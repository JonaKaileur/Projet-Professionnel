import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListEtudiantsComponent, EtudiantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { 
  title = 'alumni-frontend';
}
