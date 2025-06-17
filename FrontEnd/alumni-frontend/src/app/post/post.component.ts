import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Poste } from '../models/poste-model';

// CommonModule est un module Angular qui contient des directives et des pipes de base, comme ngIf et ngFor.
// Il est nécessaire pour utiliser ces fonctionnalités dans les composants Angular.

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  constructor(private router: Router) { }
  @Input() post !: Poste ;
  afficherPost() {
    this.router.navigate(['/post', this.post.id]); // Redirige vers le post avec l'ID
  }
}
