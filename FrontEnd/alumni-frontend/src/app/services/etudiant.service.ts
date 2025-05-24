import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private etudiants: Etudiant[] = [
   //new Etudiant('3', 'Ogent', 'Ava', 'Promotion 2025', '0694123456', 'ava.ogent@example.com', new Date(2000, 0, 1), 'https://wallpapercave.com/wp/wp4878619.jpg')
];
  
  private apiURL = " http://localhost:3000/Etudient";

  getEtudiants(): Etudiant[] {
    return this.etudiants;
  }

  getEtudiantById(id: string): Etudiant | undefined {
    return this.etudiants.find(etudiant => etudiant.id === id);
  }

  getEtudientApi(){
    return this.http.get(this.apiURL);
  }
  
  constructor(private http: HttpClient) { }
}
