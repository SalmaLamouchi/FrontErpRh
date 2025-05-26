import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulter-paie',
  templateUrl: './consulter-paie.component.html',
  styleUrls: ['./consulter-paie.component.css']
})
export class ConsulterPaieComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) {}

  displayedColumns: string[] = ['matricule', 'nom', 'mois', 'salaireBrut', 'salaireNet', 'actions'];
  dataSource!: MatTableDataSource<any>;

  paies = [
    { matricule: 'EMP001', nom: 'Rayhane Z', mois: 'Mai', salaireBrut: 4000, salaireNet: 3600 },
    { matricule: 'EMP002', nom: 'Salma L', mois: 'Mai', salaireBrut: 5000, salaireNet: 4400 }
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.paies);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = value;
  }

  editPaie(paie: any) {
    this.router.navigate(['/paie/editPaie'], { state: { data: paie } });
  }

  deletePaie(paie: any) {
    const confirmDelete = confirm(`Supprimer la paie de ${paie.nom} ?`);
    if (confirmDelete) {
      this.paies = this.paies.filter(p => p !== paie);
      this.dataSource.data = this.paies;
    }
  }
}
