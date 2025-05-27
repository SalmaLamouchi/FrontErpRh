import { Component, OnInit } from '@angular/core';
import { Conge } from 'src/app/models/conge';
import { Personnel } from 'src/app/models/personnel';
import { CongeService } from 'src/app/services/conge.service';
import { PersonnelService } from 'src/app/services/personnel.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-consulte-conge',
  templateUrl: './consulte-conge.component.html',
  styleUrls: ['./consulte-conge.component.css']
})
export class ConsulteCongeComponent implements OnInit {
  conges: Conge[] = [];
  personnelsMap: Map<number, Personnel> = new Map();

  loading = true;
  errorMessage = '';

  constructor(
    private congeService: CongeService,
    private personnelService: PersonnelService
  ) {}

  ngOnInit(): void {
    this.loadCongesWithPersonnel();
  }

  loadCongesWithPersonnel(): void {
    this.congeService.getConges().subscribe({
      next: (congesData) => {
        this.conges = congesData;

        // Pour chaque conge, on récupère le personnel par son personnelId
        const personnelIds = [...new Set(congesData.map(c => c.personnelId))];

        // Tableau d'observables pour charger chaque personnel
        const observables = personnelIds.map(id => this.personnelService.getPersonnelById(id));

        forkJoin(observables).subscribe({
          next: (personnels) => {
            // Construire une map id => personnel
            personnels.forEach(p => this.personnelsMap.set(p.id, p));
            this.loading = false;
          },
          error: (err) => {
            this.errorMessage = 'Erreur lors du chargement des personnels';
            this.loading = false;
          }
        });
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des congés';
        this.loading = false;
      }
    });
  }

  getPersonnelById(id: number): Personnel | undefined {
    return this.personnelsMap.get(id);
  }
}
