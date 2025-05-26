import { Component } from '@angular/core';

@Component({
  selector: 'app-consulte-conge',
  templateUrl: './consulte-conge.component.html',
  styleUrls: ['./consulte-conge.component.css']
})
export class ConsulteCongeComponent {
  conges = [
    {
      //id:1,
      nom: 'Rayhane Z',
      dateDebut: '2025-06-01',
      dateFin: '2025-06-10',
      type: 'Annuel'
    },
    { //id:2,
      nom: 'Salma L',
      dateDebut: '2025-05-26',
      dateFin: '2025-05-30',
      type: 'Maladie'
    }
  ];
}
