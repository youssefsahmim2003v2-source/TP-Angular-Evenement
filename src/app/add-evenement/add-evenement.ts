
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
    this.lieux = this.evenementService.listeLieux();
  }

  addEvenement(): void {
    this.newEvenement.lieu =
      this.evenementService.consulterLieu(this.newIdLieu);

    this.evenementService.ajouterEvenement(this.newEvenement);

    this.newEvenement = new Evenement();

    this.router.navigate(['/event']);
  }
}
