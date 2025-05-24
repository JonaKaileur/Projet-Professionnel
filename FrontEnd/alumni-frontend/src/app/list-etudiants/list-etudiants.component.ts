import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../models/etudiant-model'; // <-- importe le modèle
import { EtudiantComponent } from '../etudiant/etudiant.component';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-list-etudiants',
  standalone: true,
  imports: [EtudiantComponent],
  templateUrl: './list-etudiants.component.html',
  styleUrl: './list-etudiants.component.scss'
})
export class ListEtudiantsComponent implements OnInit {
  etudiants!: Etudiant[]; // <-- tableau d'Etudiant

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.etudiants = this.etudiantService.getEtudiants();
  }
}
