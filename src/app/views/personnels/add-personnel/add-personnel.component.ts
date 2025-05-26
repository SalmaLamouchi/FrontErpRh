import { Component } from '@angular/core';

@Component({
  selector: 'app-add-personnel',
  templateUrl: './add-personnel.component.html',
  styleUrls: ['./add-personnel.component.css']
})
export class AddPersonnelComponent {
  personnel = {
    fullName: '',
    poste: '',
    email: '',
    phone: ''
  };

  onSubmit() {
    console.log('Nouveau personnel ajouté:', this.personnel);
    alert(`Personnel ${this.personnel.fullName} ajouté avec succès !`);
    //plus tard j'envoyer les donnees vers le backend
  }
}
