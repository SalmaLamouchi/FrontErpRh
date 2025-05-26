import { Component, OnInit } from '@angular/core';
import { Conge } from 'src/app/models/conge';
import { CongeService } from 'src/app/services/conge.service'; // Adjust the import path as necessary

@Component({
  selector: 'app-consulte-conge',
  templateUrl: './consulte-conge.component.html',
  styleUrls: ['./consulte-conge.component.css']
})
export class ConsulteCongeComponent implements OnInit {
  conges: Conge[] = [];

  constructor(private congeService: CongeService) {}

  ngOnInit(): void {
    this.loadConges();
  }

  loadConges(): void {
    this.congeService.getConges().subscribe(
      (data: Conge[]) => {
        this.conges = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des congés:', error);
        alert('Erreur lors du chargement des congés.');
      }
    );
  }
}
