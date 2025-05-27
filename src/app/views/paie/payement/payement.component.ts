import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PaieService } from '../../../services/paie.service';
import { Paie } from '../../../models/paie';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['matricule', 'mois', 'montant', 'statut', 'actions'];
  dataSource!: MatTableDataSource<Paie>;
  personnelIdFromRoute!: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
    private paieService: PaieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Récupère l'id depuis l'URL
    this.personnelIdFromRoute = Number(this.route.snapshot.paramMap.get('id'));
    this.loadPaies();
  }

  ngAfterViewInit(): void {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  loadPaies(): void {
    this.paieService.getPaies().subscribe({
      next: (paies) => {
        // Filtrer localement les paies du personnel spécifique
        const filtered = paies.filter(p => p.personnelId === this.personnelIdFromRoute);
        this.dataSource = new MatTableDataSource(filtered);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des paies:', err);
      }
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editPaie(paie: Paie): void {
    this.router.navigate(['/paie/editPaie'], { state: { data: paie } });
  }

  deletePaie(paie: Paie): void {
    const confirmDelete = confirm(`Supprimer la paie du personnel #${paie.personnelId} ?`);
    if (confirmDelete && paie.id) {
      this.paieService.deletePaie(paie.id).subscribe({
        next: () => {
          this.loadPaies(); // Recharger après suppression
        },
        error: (err) => {
          console.error('Erreur lors de la suppression:', err);
        }
      });
    }
  }
}
