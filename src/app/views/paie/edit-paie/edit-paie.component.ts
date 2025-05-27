import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paie } from '../../../models/paie';
import { PaieService } from '../../../services/paie.service';

@Component({
  selector: 'app-edit-paie',
  templateUrl: './edit-paie.component.html',
  styleUrls: ['./edit-paie.component.css']
})
export class EditPaieComponent implements OnInit {
  paie: Paie = {
    id: 0,
    personnelId: 0,
    moisPaye: new Date(),
    montant: 0,
    statut: ''
  };

  // Variable string pour input type=month (format "YYYY-MM")
  moisPayeString: string = '';

  constructor(private router: Router, private paieService: PaieService) {}

  ngOnInit(): void {
    const data = history.state.data;
    if (data) {
      this.paie = data;

      // Initialiser moisPayeString au format YYYY-MM
      this.moisPayeString = this.formatDateToMonth(this.paie.moisPaye);
    }
  }

  formatDateToMonth(date: Date): string {
    const d = new Date(date);
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${year}-${month}`;
  }

  // Quand l'utilisateur change le mois payé
  onMoisChange() {
    const [year, month] = this.moisPayeString.split('-').map(Number);
    this.paie.moisPaye = new Date(year, month - 1);
  }

  onSubmit() {
    this.paieService.updatePaie(this.paie).subscribe({
      next: () => {
        alert('Fiche de paie modifiée avec succès.');
        this.router.navigate(['/paie']);
      },
      error: () => {
        alert('Erreur lors de la mise à jour.');
      }
    });
  }

  onCancel() {
    this.router.navigate(['/paie']);
  }
}
