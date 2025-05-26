import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-conge',
  templateUrl: './edit-conge.component.html',
  styleUrls: ['./edit-conge.component.css']
})
export class EditCongeComponent implements OnInit {
  conge = {
    id: 0,
    nom: '',
    dateDebut: '',
    dateFin: '',
    type: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID reçu pour édition :', id);

    //simulation :charge les données du congé existant
    this.conge = {
      id: Number(id),
      nom: '',
      dateDebut: '',
      dateFin: '',
      type: ''
    };
  }

  onSubmit() {
    console.log('Congé modifié :', this.conge);
    alert('Modification enregistrée !');
    this.router.navigate(['/conge']);
  }
}
