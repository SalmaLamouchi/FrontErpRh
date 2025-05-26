import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

export interface Personnel {
  fullName: string;
  poste: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-consulter-personnel',
  templateUrl: './consulter-personnel.component.html',
  styleUrls: ['./consulter-personnel.component.css']
})
export class ConsulterPersonnelComponent implements OnInit {

  displayedColumns: string[] = ['fullName', 'poste', 'email', 'phone', 'actions'];
  dataSource: MatTableDataSource<Personnel>;

  personnels: Personnel[] = [
    { fullName: 'Rayhane Z', poste: 'Développeur', email: 'rayhane@gmail.com', phone: '55123456' },
    { fullName: 'Salma L', poste: 'Designer', email: 'salma@gmail.com', phone: '28987654' },
    { fullName: 'Ahmed M', poste: 'RH', email: 'ahmed@gmail.com', phone: '22321654' }
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router) { //router
    this.dataSource = new MatTableDataSource(this.personnels);
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  editPersonnel(personnel: Personnel) {
    //redirection vers le formulaire d’edit
    this.router.navigate(['/personnel/editPersonnel'], {
      queryParams: {
        fullName: personnel.fullName,
        poste: personnel.poste,
        email: personnel.email,
        phone: personnel.phone
      }
    });
  }

  deletePersonnel(personnel: Personnel) {
    const confirmDelete = confirm(`Supprimer ${personnel.fullName} ?`);
    if (confirmDelete) {
      this.personnels = this.personnels.filter(p => p !== personnel);
      this.dataSource.data = this.personnels;
    }
  }
}
