
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-evenement',
  imports: [DatePipe, RouterLink],
  templateUrl: './evenement.html',
})
export class EvenementComponent implements OnInit {
  evenements: Evenement[];

  constructor(
    private evenementService: EvenementService,
    public authService: AuthService
  ) {
    this.evenements = this.evenementService.listeEvenements();
  }

  ngOnInit(): void {
  }

  supprimerEvenement(evenement: Evenement): void {

    // Only ADMIN can delete
    if (!this.authService.isAdmin()) {
      return;
    }

    const conf = confirm("Êtes-vous sûr ?");

    if (conf) {
      this.evenementService.supprimerEvenement(evenement);
    }
  }
}
