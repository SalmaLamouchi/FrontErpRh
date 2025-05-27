import { Component } from '@angular/core';
import { PersonnelService } from 'src/app/services/personnel.service';
import { Personnel } from 'src/app/models/personnel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-personnel',
  templateUrl: './add-personnel.component.html',
  styleUrls: ['./add-personnel.component.css']
})
export class AddPersonnelComponent {
  personnel: Partial<Personnel> = {
    nom: '',
    prenom: '',
    email: '',
    poste: '',
    salaire: 0,
    dateEmbauche: new Date()
  };

  constructor(private personnelService: PersonnelService,private router: Router) {}

  onSubmit() {
    this.personnelService.addPersonnel(this.personnel as Personnel).subscribe({
      next: (res) => {
        alert(`Personnel ${res.prenom} ${res.nom} ajouté avec succès !`);
        this.router.navigate(['/personnel']);
      },
      error: (err) => {
        console.error(err);
        alert("Erreur lors de l'ajout du personnel");
      }
    });
  }
}
