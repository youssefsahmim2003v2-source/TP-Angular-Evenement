
import { Injectable } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { Lieu } from '../model/lieu.model';

@Injectable({
  providedIn: 'root',
})
export class EvenementService {
  
  
listeLieux(): Lieu[] {
  return this.lieux;
}

consulterLieu(id: number): Lieu {
  return this.lieux.find(lieu => lieu.idLieu == id)!;
}


  lieux: Lieu[] = [
  { idLieu: 1, nomLieu: 'Hammamet' },
  { idLieu: 2, nomLieu: 'Nabeul' },
  { idLieu: 3, nomLieu: 'Tunis' }
];
 
  evenements: Evenement[];
 updateEvenement(evenement: Evenement): void {
  const index = this.evenements.findIndex(
    e => e.idEvenement === evenement.idEvenement
  );

  if (index !== -1) {
    this.evenements[index] = evenement;
  }
}
  constructor() {
    this.evenements = [
  {
    idEvenement: 1,
    nomEvenement: "Festival de musique",
    prixEvenement: 35,
    dateEvenement: new Date("01/14/2026"),
    lieu: this.lieux[0]
  },
  {
    idEvenement: 2,
    nomEvenement: "Conférence informatique",
    prixEvenement: 20,
    dateEvenement: new Date("12/17/2026"),
    lieu: this.lieux[1]
  },
  {
    idEvenement: 3,
    nomEvenement: "Salon des jeux vidéo",
    prixEvenement: 15,
    dateEvenement: new Date("02/20/2027"),
    lieu: this.lieux[2]
  }
];
  }

  listeEvenements(): Evenement[] {
    return this.evenements;
  }

  ajouterEvenement(evenement: Evenement): void {
    this.evenements.push(evenement);
  }
  supprimerEvenement(evenement: Evenement): void {
  const index = this.evenements.indexOf(evenement);

  if (index > -1) {
    this.evenements.splice(index, 1);
  }
}
evenement!: Evenement;

consulterEvenement(id: number): Evenement {
  this.evenement = this.evenements.find(
    e => e.idEvenement == id
  )!;

  return this.evenement;
}
}
