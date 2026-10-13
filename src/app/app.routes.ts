import { Routes } from '@angular/router';
import { EvenementComponent } from './evenement/evenement';
import { AddEvenement } from './add-evenement/add-evenement';
import { UpdateEvenementComponent } from './update-evenement/update-evenement';

export const routes: Routes = [
    {path: "event", component : EvenementComponent} ,
    {path: 'add-evenement', component : AddEvenement},
    {path: "", redirectTo: "event", pathMatch: "full"},
    { path: 'update-evenement/:id', component: UpdateEvenementComponent }
    
];
