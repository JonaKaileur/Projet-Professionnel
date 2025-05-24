import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../models/etudiant-model'; // <-- importe le modèle
import { EtudiantComponent } from '../etudiant/etudiant.component';

@Component({
  selector: 'app-list-etudiants',
  standalone: true,
  imports: [EtudiantComponent],
  templateUrl: './list-etudiants.component.html',
  styleUrl: './list-etudiants.component.scss'
})
export class ListEtudiantsComponent implements OnInit {
  etudiants!: Etudiant[]; // <-- tableau d'Etudiant

  constructor() {}

  ngOnInit(): void {
    this.etudiants = [
      new Etudiant('1', 'Doe', 'John', 'Promotion 2025', '0694123456', 'john.doe@example.com', new Date(2000, 0, 1), 'https://wallpapercave.com/wp/wp4878619.jpg'),
      new Etudiant('2', 'Martin', 'Molly', 'Promotion 2025', '0694123456', 'molly.martin@example.com', new Date(2000, 0, 1), 'https://wallpapercave.com/wp/wp4878619.jpg'),
      new Etudiant('3', 'Ogent', 'Ava', 'Promotion 2025', '0694123456', 'ava.ogent@example.com', new Date(2000, 0, 1), 'https://wallpapercave.com/wp/wp4878619.jpg')
    ];
  }
}
