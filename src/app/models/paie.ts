export interface Paie {
  id: number;
  personnelId: number;
  moisPaye: Date;
  montant: number;
  statut: string;
}