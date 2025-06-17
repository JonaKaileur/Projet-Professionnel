import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private apiURL = "http://localhost:3000/Etudiant";
  
  // Renvoyer la liste des étudiants pour l'affichage dans le trombinoscope

  getEtudiants():Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.apiURL);
  }

  // Renvoyer un étudiant par son ID
  getEtudiantById(id: string):Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.apiURL}/${id}`);
  }

  constructor(private http: HttpClient) { }
}






  


  

  
