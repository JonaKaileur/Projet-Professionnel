import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant-model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private etudiants: Etudiant[] = [
    new Etudiant('1', 'Doe', 'John', '2025', '0694123456', 'john.doe@example.com', new Date(2000, 0, 1), 'https://wallpapercave.com/wp/wp4878619.jpg'),
    new Etudiant('2', 'Martin', 'Molly', '2025', '0694123456', 'molly.martin@example.com', new Date(2000, 0, 1), 'https://wallpapercave.com/wp/wp6220498.png'),
    new Etudiant('3', 'Ogent', 'Ava', '2025', '0694123456', 'ava.ogent@example.com', new Date(2000, 0, 1), 'https://www.svg.com/img/gallery/apex-legends-everything-we-know-about-valkyrie/l-intro-1618943684.jpg')
  ];
  // Renvoyer la liste des étudiants pour l'affichage dans le trombinoscope
  getEtudiants(): Etudiant[] {
    return this.etudiants;
  }

  // 
  getEtudiantById(id: string): Etudiant | undefined {
    return this.etudiants.find(etudiant => etudiant.id === id);
  }

  constructor() { }
}
