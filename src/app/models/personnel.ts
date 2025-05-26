import { Conge } from "./conge";
import { Paie } from "./paie";

// personnel.model.ts
export interface Personnel {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  poste: string;
  salaire: number;
  dateEmbauche: Date;
  conges?: Conge[];  // Relation avec les congés
  payes?: Paie[];    // Relation avec les paiements
}