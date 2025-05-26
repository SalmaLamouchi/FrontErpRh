import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-conge',
  templateUrl: './add-conge.component.html',
  styleUrls: ['./add-conge.component.css']
})
export class AddCongeComponent {
  conge = {
    nom: '',
    dateDebut: '',
    dateFin: '',
    type: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Congé ajouté :', this.conge);
    alert('Demande de congé ajoutée avec succès !');
    this.router.navigate(['/conge']);
  }
}
