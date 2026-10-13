import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from '../services/evenement';

@Component({
  selector: 'app-add-evenement',
  imports: [FormsModule],
  templateUrl: './add-evenement.html',
})
export class AddEvenement implements OnInit {
  newEvenement = new Evenement();

  constructor(private evenementService: EvenementService) {}

  ngOnInit(): void {}

  addEvenement(): void {
    this.evenementService.ajouterEvenement(this.newEvenement);
    this.newEvenement = new Evenement();
  }
}
