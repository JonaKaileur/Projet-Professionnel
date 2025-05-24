import { Component, Input } from '@angular/core';
import { Etudiant } from '../models/etudiant-model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// CommonModule est un module Angular qui contient des directives et des pipes de base, comme ngIf et ngFor.
// Il est nécessaire pour utiliser ces fonctionnalités dans les composants Angular.

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.scss'
})
export class EtudiantComponent {
  constructor(private router: Router) { }
  @Input() etudiant !: Etudiant ;
  afficherProfil() {
    this.router.navigate(['/etudiant', this.etudiant.id]); // Redirige vers le profil avec l'ID
  }
}
