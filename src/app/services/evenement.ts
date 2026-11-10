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
    return this.lieux.find((lieu) => lieu.idLieu == id)!;
  }

  
lieux: Lieu[] = [
  { idLieu: 1, nomLieu: 'Hammamet' },
  { idLieu: 2, nomLieu: 'Nabeul' },
  { idLieu: 3, nomLieu: 'Tunis' },
  { idLieu: 4, nomLieu: 'Sousse' },
  { idLieu: 5, nomLieu: 'Sfax' },
  { idLieu: 6, nomLieu: 'Monastir' },
  { idLieu: 7, nomLieu: 'Bizerte' },
  { idLieu: 8, nomLieu: 'Djerba' },
  { idLieu: 9, nomLieu: 'Kairouan' },
  { idLieu: 10, nomLieu: 'Mahdia' },
  { idLieu: 11, nomLieu: 'Tozeur' },
  { idLieu: 12, nomLieu: 'Gabès' }
];


  evenements: Evenement[];
  updateEvenement(evenement: Evenement): void {
    const index = this.evenements.findIndex((e) => e.idEvenement === evenement.idEvenement);

    if (index !== -1) {
      this.evenements[index] = evenement;
    }
  }
  constructor() {
    this.evenements = [
      {
        idEvenement: 1,
        nomEvenement: 'Festival de musique',
        prixEvenement: 35,
        dateEvenement: new Date('2026-01-14'),
        lieu: this.lieux[0],
      },
      {
        idEvenement: 2,
        nomEvenement: 'Conférence informatique',
        prixEvenement: 20,
        dateEvenement: new Date('2026-12-17'),
        lieu: this.lieux[1],
      },
      {
        idEvenement: 3,
        nomEvenement: 'Salon des jeux vidéo',
        prixEvenement: 15,
        dateEvenement: new Date('2027-02-20'),
        lieu: this.lieux[2],
      },
      {
        idEvenement: 4,
        nomEvenement: 'Concert de rock',
        prixEvenement: 45,
        dateEvenement: new Date('2027-03-15'),
        lieu: this.lieux[0],
      },
      {
        idEvenement: 5,
        nomEvenement: 'Salon du livre',
        prixEvenement: 10,
        dateEvenement: new Date('2027-04-10'),
        lieu: this.lieux[1],
      },
      {
        idEvenement: 6,
        nomEvenement: 'Tournoi de football',
        prixEvenement: 25,
        dateEvenement: new Date('2027-05-20'),
        lieu: this.lieux[2],
      },
      {
        idEvenement: 7,
        nomEvenement: 'Festival du cinéma',
        prixEvenement: 30,
        dateEvenement: new Date('2027-06-05'),
        lieu: this.lieux[0],
      },
      {
        idEvenement: 8,
        nomEvenement: 'Hackathon étudiant',
        prixEvenement: 0,
        dateEvenement: new Date('2027-07-12'),
        lieu: this.lieux[1],
      },
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
    this.evenement = this.evenements.find((e) => e.idEvenement == id)!;

    return this.evenement;
  }
}
