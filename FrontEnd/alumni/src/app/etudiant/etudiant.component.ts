import { Component } from '@angular/core';
import { Etudiant } from '../models/etudiant';

@Component({
  selector: 'app-etudiant',
  imports: [],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.scss'
})
export class EtudiantComponent {
  etudiant: Etudiant = new Etudiant(0, "", "", "");
  etudiants: Etudiant[] = [];
  id: number = 0;
  nom: string = "";
  prenom: string = "";
  obtentiondiplome: string = "";

  constructor() {
    this.etudiants.push(new Etudiant(1, "Dupont", "Jean", "2023"));
    this.etudiants.push(new Etudiant(2, "Martin", "Marie", "2022"));
    this.etudiants.push(new Etudiant(3, "Durand", "Pierre", "2021"));
  }

  ajouterEtudiant() {
    this.etudiants.push(new Etudiant(this.id, this.nom, this.prenom, this.obtentiondiplome));
    this.id = 0;
    this.nom = "";
    this.prenom = "";
    this.obtentiondiplome = "";
  }
}
