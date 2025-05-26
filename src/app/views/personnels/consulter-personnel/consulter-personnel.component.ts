import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { PersonnelService } from 'src/app/services/personnel.service';
import { Personnel } from 'src/app/models/personnel';

@Component({
  selector: 'app-consulter-personnel',
  templateUrl: './consulter-personnel.component.html',
  styleUrls: ['./consulter-personnel.component.css']
})
export class ConsulterPersonnelComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nomComplet', 'poste', 'email', 'salaire', 'dateEmbauche', 'actions'];
  dataSource = new MatTableDataSource<Personnel>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private personnelService: PersonnelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPersonnels();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // Filtre personnalisé sur nom+prenom+poste
    this.dataSource.filterPredicate = (data: Personnel, filter: string) => {
      const dataStr = (data.nom + ' ' + data.prenom + ' ' + data.poste).toLowerCase();
      return dataStr.includes(filter);
    };
  }

  loadPersonnels() {
    this.personnelService.getPersonnels().subscribe({
      next: (personnels) => {
        this.dataSource.data = personnels;
      },
      error: (err) => {
        console.error('Erreur chargement personnels:', err);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editPersonnel(personnel: Personnel) {
    this.router.navigate(['personnel/editPersonnel/:id'], {
      queryParams: {
        id: personnel.id,
        nom: personnel.nom,
        prenom: personnel.prenom,
        poste: personnel.poste,
        email: personnel.email,
        salaire: personnel.salaire,
dateEmbauche: new Date(personnel.dateEmbauche).toISOString()      }
    });
  }

  deletePersonnel(personnel: Personnel) {
  console.log('ID à supprimer:', personnel.id); // 👈 LOG ICI
  if (confirm(`Supprimer ${personnel.nom} ${personnel.prenom} ?`)) {
    this.personnelService.deletePersonnel(personnel.id).subscribe({
      next: () => {
        this.loadPersonnels();
      },
      error: (err) => {
        console.error('Erreur suppression:', err.error?.Message || err.message);
      }
    });
  }
}

}
