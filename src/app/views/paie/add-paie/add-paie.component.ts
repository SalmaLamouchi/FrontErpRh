import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-paie',
  templateUrl: './add-paie.component.html',
  styleUrls: ['./add-paie.component.css']
})
export class AddPaieComponent {
  paie = {
    matricule: '',
    nom: '',
    mois: '',
    salaireBrut: 0,
    retenues: 0,
    salaireNet: 0
  };

  constructor(private router: Router) {}

  calculerSalaireNet() {
    this.paie.salaireNet = this.paie.salaireBrut - this.paie.retenues;
  }

  onSubmit() {
    console.log('Paie ajoutée :', this.paie);
    alert('Paie ajoutée avec succès !');
    this.router.navigate(['/paie']);
  }
}
