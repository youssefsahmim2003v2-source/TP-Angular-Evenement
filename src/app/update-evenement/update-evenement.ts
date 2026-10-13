
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

    this.lieux = this.evenementService.listeLieux();
    this.currentEvenement =
      this.evenementService.consulterEvenement(id);

    this.updatedLieuId = this.currentEvenement.lieu.idLieu;
  }

  updateEvenement(): void {
    this.currentEvenement.lieu =
      this.evenementService.consulterLieu(this.updatedLieuId);

    this.evenementService.updateEvenement(this.currentEvenement);
    this.router.navigate(['event']);
  }

  onDateChange(value: string): void {
    this.currentEvenement.dateEvenement = value
      ? new Date(value + 'T00:00:00')
      : undefined;
  }
}
