import { Component, Input } from '@angular/core';
import { Etudiant } from '../models/etudiant-model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
  @Input() etudiant !:Observable<Etudiant> ;
  @Input() tableau_etudiant ! : Observable<Etudiant[]>;

  donnerEtudient? : Etudiant; 

  ngOninit(){
    this.etudiant.subscribe(data => {
      this.donnerEtudient = data;
    });

  }


  afficherProfil() {
    this.router.navigate(['/etudiant', this.donnerEtudient?.id]); // Redirige vers le profil avec l'ID
  }
}
