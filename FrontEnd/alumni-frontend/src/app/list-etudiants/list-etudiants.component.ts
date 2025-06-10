import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../models/etudiant-model'; // <-- importe le modèle
import { EtudiantComponent } from '../etudiant/etudiant.component';
import { EtudiantService } from '../services/etudiant.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-etudiants',
  standalone: true,
  imports: [EtudiantComponent, CommonModule],
  templateUrl: './list-etudiants.component.html',
  styleUrl: './list-etudiants.component.scss'
})
export class ListEtudiantsComponent implements OnInit {
  etudiants!: Etudiant[]; // <-- tableau d'Etudiant
  etudiantsMangos!: Observable<Etudiant[]>; // <-- tableau d'Etudiant
  constructor(private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.etudiantService.getEtudiantsMongos().subscribe(data => { this.etudiants = data; console.log(data);});

  }
}
