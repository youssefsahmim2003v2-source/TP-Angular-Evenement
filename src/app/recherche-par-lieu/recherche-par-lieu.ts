import { Component, OnInit } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { Lieu } from '../model/lieu.model';
import { EvenementService } from '../services/evenement';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recherche-par-lieu',
  imports: [CommonModule, FormsModule],
  templateUrl: './recherche-par-lieu.html',
  styles: ``,
})
export class RechercheParLieuComponent implements OnInit {
  evenements: Evenement[] = [];
  evenementsFiltres: Evenement[] = [];
  lieux: Lieu[] = [];
  idLieu?: number;

  constructor(private evenementService: EvenementService) {}

  ngOnInit(): void {
    this.evenementService.listeLieux().subscribe(lieux => {
      this.lieux = lieux._embedded.lieux;
    });

    this.evenementService.listeEvenements().subscribe(evenements => {
      this.evenements = evenements;
      this.evenementsFiltres = evenements;
    });
  }

  onChange(): void {
    if (this.idLieu === undefined || this.idLieu === null) {
      this.evenementsFiltres = this.evenements;
      return;
    }
    this.evenementsFiltres = this.evenements.filter(
      evenement => evenement.lieu?.idLieu === Number(this.idLieu)
    );
  }
}