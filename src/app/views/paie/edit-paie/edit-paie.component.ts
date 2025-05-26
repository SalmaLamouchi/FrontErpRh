import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-paie',
  templateUrl: './edit-paie.component.html',
  styleUrls: ['./edit-paie.component.css']
})
export class EditPaieComponent implements OnInit {
  paie = {
    matricule: '',
    nom: '',
    mois: '',
    salaireBrut: 0,
    retenues: 0,
    salaireNet: 0
  };

  constructor(public router: Router) {}

  ngOnInit(): void {
    const data = history.state.data;
    if (data) {
      this.paie = data;
    }
  }

  calculerSalaireNet() {
    this.paie.salaireNet = this.paie.salaireBrut - this.paie.retenues;
  }

  onSubmit() {
    console.log('Paie modifiée :', this.paie);
    alert(`La fiche de paie de ${this.paie.nom} a été modifiée.`);
    this.router.navigate(['/paie']);
  }
}
