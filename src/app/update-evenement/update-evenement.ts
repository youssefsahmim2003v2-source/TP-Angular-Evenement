
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement';
import { Lieu } from '../model/lieu.model';

@Component({
  selector: 'app-update-evenement',
  imports: [FormsModule, DatePipe],
  templateUrl: './update-evenement.html',
})
export class UpdateEvenementComponent implements OnInit {
  currentEvenement = new Evenement();
  lieux!: Lieu[];
  updatedLieuId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private evenementService: EvenementService
  ) {}

ngOnInit(): void {

  const id = Number(this.activatedRoute.snapshot.params['id']);

  // Charger la liste des lieux
  this.evenementService.listeLieux().subscribe(lieux => {
    this.lieux = lieux._embedded.lieux;
  });

  // Charger l'événement à modifier
  this.evenementService.consulterEvenement(id).subscribe(evenement => {
    this.currentEvenement = evenement;

    // Récupérer l'id du lieu associé
    this.updatedLieuId = evenement.lieu.idLieu;
  });
}

  updateEvenement(): void {

  const lieuSelectionne = this.lieux.find(
    l => l.idLieu === Number(this.updatedLieuId)
  );

  if (!lieuSelectionne) {
    alert('Veuillez choisir un lieu !');
    return;
  }

  this.currentEvenement.lieu = lieuSelectionne;

  this.evenementService.updateEvenement(this.currentEvenement)
    .subscribe({
      next: () => {
        alert('Événement modifié avec succès !');
        this.router.navigate(['/event']);
      },
      error: (err) => {
        console.error(err);
        alert('Erreur lors de la modification !');
      }
    });
}

  onDateChange(value: string): void {
    this.currentEvenement.dateEvenement = value
      ? new Date(value + 'T00:00:00')
      : undefined;
  }
}
