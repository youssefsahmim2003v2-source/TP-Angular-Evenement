
import { Lieu } from './lieu.model';

export class Evenement {
  idEvenement?: number;
  nomEvenement?: string;
  prixEvenement?: number;
  dateEvenement?: Date;
  lieu!: Lieu;
}
