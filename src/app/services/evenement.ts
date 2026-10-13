
import { Injectable } from '@angular/core';
import { Evenement } from '../model/evenement.model';

@Injectable({
  providedIn: 'root',
})
export class EvenementService {
 
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
        lieuEvenement: "Hammamet",
        prixEvenement: 35,
        dateEvenement: new Date("01/14/2026")
      },
      {
        idEvenement: 2,
        nomEvenement: "Conférence informatique",
        lieuEvenement: "Nabeul",
        prixEvenement: 20,
        dateEvenement: new Date("12/17/2026")
      },
      {
        idEvenement: 3,
        nomEvenement: "Salon des jeux vidéo",
        lieuEvenement: "Tunis",
        prixEvenement: 15,
        dateEvenement: new Date("02/20/2027")
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
