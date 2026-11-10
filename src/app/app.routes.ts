import { Routes } from '@angular/router';
import { EvenementComponent } from './evenement/evenement';
import { AddEvenement } from './add-evenement/add-evenement';
import { UpdateEvenementComponent } from './update-evenement/update-evenement';
import { RechercheParLieuComponent } from './recherche-par-lieu/recherche-par-lieu';
import { Login } from './login/login';
import { authGuard } from './auth-guard';
import { Forbidden } from './forbidden/forbidden';

export const routes: Routes = [
    { path: "event", component: EvenementComponent },

    {
        path: "add-evenement",
        component: AddEvenement,
        canActivate: [authGuard]
    },
    
    {path: "", redirectTo: "event", pathMatch: "full"},
    {
        path: "update-evenement/:id",
        component: UpdateEvenementComponent,
        canActivate: [authGuard]
    },
    { path: "rechercheParLieu", component: RechercheParLieuComponent },

    { path: "forbidden", component: Forbidden },
    { path: 'login', component: Login },
];
