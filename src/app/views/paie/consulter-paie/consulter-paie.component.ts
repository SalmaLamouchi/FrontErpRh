import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PaieService } from '../../../services/paie.service';
import { Paie } from '../../../models/paie';

@Component({
  selector: 'app-consulter-paie',
  templateUrl: './consulter-paie.component.html',
  styleUrls: ['./consulter-paie.component.css']
})
export class ConsulterPaieComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['matricule', 'mois', 'montant', 'statut', 'actions'];
  dataSource!: MatTableDataSource<Paie>;
  nonTraitesDataSource!: MatTableDataSource<Paie>;
  allPaies: Paie[] = [];

  filterText: string = '';

  @ViewChild('paginatorTraite') paginatorTraite!: MatPaginator;
  @ViewChild('paginatorNonTraite') paginatorNonTraite!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router, private paieService: PaieService) {}

  ngOnInit(): void {
    this.loadPaies();
  }

  ngAfterViewInit(): void {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginatorTraite;
      this.dataSource.sort = this.sort;
    }
    if (this.nonTraitesDataSource) {
      this.nonTraitesDataSource.paginator = this.paginatorNonTraite;
      this.nonTraitesDataSource.sort = this.sort;
    }
  }

  loadPaies(): void {
    this.paieService.getPaies().subscribe({
      next: (paies) => {
        this.allPaies = paies;

        const paiesTraitees = paies.filter(p => p.statut === 'Traitée');
        const paiesNonTraitees = paies.filter(p => p.statut !== 'Traitée');

        this.dataSource = new MatTableDataSource(paiesTraitees);
        this.dataSource.paginator = this.paginatorTraite;
        this.dataSource.sort = this.sort;

        this.nonTraitesDataSource = new MatTableDataSource(paiesNonTraitees);
        this.nonTraitesDataSource.paginator = this.paginatorNonTraite;
        this.nonTraitesDataSource.sort = this.sort;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des paies:', err);
      }
    });
  }

  applyFilter(event: Event): void {
    this.filterText = (event.target as HTMLInputElement).value.trim().toLowerCase();

    const paiesTraitees = this.allPaies.filter(p => p.statut === 'Traitée');
    const filtered = paiesTraitees.filter(p =>
      p.personnelId.toString().toLowerCase().includes(this.filterText) ||
      p.statut.toLowerCase().includes(this.filterText) ||
      p.montant.toString().includes(this.filterText)
    );

    this.dataSource = new MatTableDataSource(filtered);
    this.dataSource.paginator = this.paginatorTraite;
    this.dataSource.sort = this.sort;
  }

  editPaie(paie: Paie): void {
    this.router.navigate(['/paie/editPaie'], { state: { data: paie } });
  }

  deletePaie(paie: Paie): void {
    const confirmDelete = confirm(`Supprimer la paie du personnel #${paie.personnelId} ?`);
    if (confirmDelete && paie.id) {
      this.paieService.deletePaie(paie.id).subscribe({
        next: () => this.loadPaies(),
        error: (err) => console.error('Erreur lors de la suppression:', err)
      });
    }
  }

  Valider(paie: Paie): void {
    if (paie.id) {
      const paieValidee: Paie = { ...paie, statut: 'Traitée' };
      this.paieService.updatePaie(paieValidee).subscribe({
        next: () => this.loadPaies(),
        error: (err) => console.error('Erreur lors de la validation:', err)
      });
    }
  }
}
