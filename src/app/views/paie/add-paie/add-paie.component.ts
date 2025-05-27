import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Paie } from '../../../models/paie';

@Component({
  selector: 'app-add-paie',
  templateUrl: './add-paie.component.html',
  styleUrls: ['./add-paie.component.css']
})
export class AddPaieComponent {
  paie: Paie = {
    id: 0,
    personnelId: 0,
    moisPaye: new Date(),
    montant: 0,
    statut: ''
  };

  moisPayeString: string = '';

  constructor(private router: Router) {}

  onMoisChange() {
    if (!this.moisPayeString) {
      this.paie.moisPaye = new Date();
      return;
    }
    const [year, month] = this.moisPayeString.split('-').map(Number);
    if (year && month) {
      this.paie.moisPaye = new Date(year, month - 1);
    } else {
      // Reset si mauvais format
      this.moisPayeString = '';
      this.paie.moisPaye = new Date();
    }
  }

  onSubmit() {
    if (
      this.paie.personnelId > 0 &&
      this.paie.moisPaye &&
      this.paie.montant >= 0 &&
      this.paie.statut.trim().length >= 2
    ) {
      console.log('Paie ajoutée:', this.paie);
      alert('Fiche de paie ajoutée avec succès !');
      this.router.navigate(['/paie']);
    } else {
      alert('Merci de remplir correctement le formulaire.');
    }
  }
}
