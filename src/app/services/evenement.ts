import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evenement } from '../model/evenement.model';
import { LieuWrapper } from '../model/lieuWrapper.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class EvenementService {
  apiURL: string = 'http://localhost:8083/evenements/api';
  apiURLLieu: string = 'http://localhost:8083/evenements/lieux';

  constructor(private http: HttpClient) {}

  listeEvenements(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.apiURL);
  }

  ajouterEvenement(evenement: Evenement): Observable<Evenement> {
    return this.http.post<Evenement>(this.apiURL, evenement, httpOptions);
  }

  supprimerEvenement(id: number) {
    return this.http.delete(this.apiURL + '/' + id, httpOptions);
  }

  consulterEvenement(id: number): Observable<Evenement> {
    return this.http.get<Evenement>(this.apiURL + '/' + id);
  }

  updateEvenement(evenement: Evenement): Observable<Evenement> {
    return this.http.put<Evenement>(this.apiURL, evenement, httpOptions);
  }

  listeLieux(): Observable<LieuWrapper> {
    return this.http.get<LieuWrapper>(this.apiURLLieu); 
  }

  rechercherParLieu(idLieu: number): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.apiURL + '/evenlieu/' + idLieu);
  }
}