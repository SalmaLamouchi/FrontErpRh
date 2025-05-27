import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { CongeService } from 'src/app/services/conge.service';
import { Conge } from 'src/app/models/conge';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.css']
})
export class CongeComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['typeConge', 'dateDebut', 'dateFin', 'statut', 'actions'];
  dataSource!: MatTableDataSource<Conge>;
  personnelIdFromRoute!: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private route: ActivatedRoute,
    private congeService: CongeService
  ) {}

  ngOnInit(): void {
    this.personnelIdFromRoute = Number(this.route.snapshot.paramMap.get('id'));
    this.loadConges();
  }

  ngAfterViewInit(): void {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  loadConges(): void {
    this.congeService.getConges().subscribe({
      next: (conges) => {
        const filtered = conges.filter(c => c.personnelId === this.personnelIdFromRoute);
        this.dataSource = new MatTableDataSource(filtered);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.error('Erreur chargement congés :', err);
      }
    });
  }

  applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = value;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  changerStatut(conge: Conge, nouveauStatut: string): void {
    const updatedConge = { ...conge, statut: nouveauStatut };

    this.congeService.updateConge(updatedConge).subscribe({
      next: () => this.loadConges(),
      error: (err) => console.error('Erreur mise à jour statut :', err)
    });
  }
}
