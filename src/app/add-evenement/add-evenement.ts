
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement';
import { Lieu } from '../model/lieu.model';

@Component({
  selector: 'app-add-evenement',
  imports: [FormsModule],
  templateUrl: './add-evenement.html',
})
export class AddEvenement implements OnInit {
  newEvenement = new Evenement();
  lieux!: Lieu[];
  newIdLieu!: number;

  constructor(
    private evenementService: EvenementService,
    private router: Router
  ) {}

  

ngOnInit(): void {
  this.evenementService.listeLieux().subscribe(lieux => {
    console.log(lieux);
    this.lieux = lieux._embedded.lieux;
  });
}

 addEvenement(): void {

  const lieuSelectionne = this.lieux.find(
    l => l.idLieu === Number(this.newIdLieu)
  );

  if (!lieuSelectionne) {
    alert('Veuillez choisir un lieu !');
    return;
  }

  this.newEvenement.lieu = lieuSelectionne;

  this.evenementService.ajouterEvenement(this.newEvenement)
    .subscribe({
      next: () => {
        alert('Événement ajouté avec succès !');
        this.router.navigate(['/event']);
      },
      error: (err) => {
  console.error('HTTP ERROR:', err);
  console.log('STATUS:', err.status);
  console.log('ERROR BODY:', err.error);
  console.log('MESSAGE:', err.message);

  alert('Erreur HTTP: ' + err.status);
}
    });
}
}