import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conge } from 'src/app/models/conge';
import { CongeService } from 'src/app/services/conge.service'; // Adjust the import path as necessary
// import { Conge } from '..../'; // Adjust the import path as necessary

@Component({
  selector: 'app-edit-conge',
  templateUrl: './edit-conge.component.html',
  styleUrls: ['./edit-conge.component.css']
})
export class EditCongeComponent implements OnInit {
  conge: Conge = {
    id: 0,
    personnelId: 0, // Assuming you have a personnelId field
    dateDebut: new Date(),
    dateFin: new Date(),
    typeConge: '',
    statut: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private congeService: CongeService // Inject the CongeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID reçu pour édition :', id);

    if (id) {
      this.loadConge(id);
    }
  }

  loadConge(id: string): void {
    this.congeService.getCongeById(Number(id)).subscribe(
      (data: Conge) => {
        this.conge = data;
      },
      (error) => {
        console.error('Erreur lors du chargement du congé:', error);
        alert('Erreur lors du chargement des données du congé.');
      }
    );
  }

  onSubmit(): void {
    this.congeService.updateConge(this.conge).subscribe(
      () => {
        console.log('Congé modifié :', this.conge);
        alert('Modification enregistrée !');
        this.router.navigate(['/conge']); // Redirect to the edit page of the modified conge
      },
      (error) => {
        console.error('Erreur lors de la modification du congé:', error);
        alert('Erreur lors de la modification du congé.');
      }
    );
  }
}
