import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from 'src/app/services/personnel.service';
import { Personnel } from 'src/app/models/personnel';

@Component({
  selector: 'app-edit-personnel',
  templateUrl: './edit-personnel.component.html',
  styleUrls: ['./edit-personnel.component.css']
})
export class EditPersonnelComponent implements OnInit {
  personnel: Personnel = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    poste: '',
    salaire: 0,
    dateEmbauche: new Date()
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personnelService: PersonnelService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.personnelService.getPersonnelById(id).subscribe({
        next: (data) => {
          this.personnel = {
            ...data,
            dateEmbauche: data.dateEmbauche ? new Date(data.dateEmbauche) : new Date()
          };
        },
        error: (err) => {
          console.error('Erreur chargement personnel', err);
          alert('Erreur lors du chargement du personnel');
        }
      });
    }
  }

  onSubmit() {
    this.personnelService.updatePersonnel(this.personnel).subscribe({
      next: () => {
        alert(`Personnel ${this.personnel.prenom} ${this.personnel.nom} modifié avec succès !`);
        this.router.navigate(['/personnel']);
      },
      error: (err) => {
        console.error(err);
        alert("Erreur lors de la modification du personnel");
      }
    });
  }
}
