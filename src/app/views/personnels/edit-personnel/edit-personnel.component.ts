import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-personnel',
  templateUrl: './edit-personnel.component.html',
  styleUrls: ['./edit-personnel.component.css']
})
export class EditPersonnelComponent implements OnInit {
  personnel = {
    fullName: '',
    poste: '',
    email: '',
    phone: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    //récupérer les parametres dans l'URL (ex:/personnel/editPersonnel?fullName=...&poste=... )
    this.route.queryParams.subscribe(params => {
      this.personnel.fullName = params['fullName'] || '';
      this.personnel.poste = params['poste'] || '';
      this.personnel.email = params['email'] || '';
      this.personnel.phone = params['phone'] || '';
    });
  }

  onSubmit() {
    console.log('Personnel modifié :', this.personnel);
    alert(`Personnel ${this.personnel.fullName} modifié avec succès !`);
    this.router.navigate(['/personnel']);
  }
}
