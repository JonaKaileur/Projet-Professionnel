import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Etudiant } from '../models/etudiant-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil-etudiant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil-etudiant.component.html',
  styleUrl: './profil-etudiant.component.scss'
})
export class ProfilEtudiantComponent {
  etudiant !: Etudiant;
  etudiantId!: string;

  constructor(private route: ActivatedRoute) {
    this.etudiantId = this.route.snapshot.paramMap.get('id') || '';
  }
}
