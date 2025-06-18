import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../models/etudiant-model';
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
  etudiants: Etudiant[] = [];
  etudiantsFiltres: Etudiant[] = [];
  searchTerm: string = '';
  champsRecherche: Set<string> = new Set(['nom', 'prenom', 'promotion', 'email']);

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.etudiantService.getEtudiants().subscribe(data => {
      this.etudiants = data;
      this.appliquerFiltre();
    });
  }

  onRechercheChange(event: Event): void {
    const input = event.target as HTMLInputElement | null;
    if (!input) return;

    this.searchTerm = input.value.trim().toLowerCase();
    this.appliquerFiltre();
  }

  toggleChampRecherche(champ: string, event: Event): void {
    const checkbox = event.target as HTMLInputElement | null;
    if (!checkbox) return;

    if (checkbox.checked) {
      this.champsRecherche.add(champ);
    } else {
      this.champsRecherche.delete(champ);
    }
    this.appliquerFiltre();
  }

  appliquerFiltre(): void {
    if (!this.searchTerm) {
      this.etudiantsFiltres = this.etudiants;
      return;
    }

    const term = this.searchTerm.toLowerCase();

    this.etudiantsFiltres = this.etudiants.filter(etudiant => {
      for (const champ of this.champsRecherche) {
        const valeur = (etudiant as any)[champ];
        if (valeur && valeur.toLowerCase().includes(term)) {
          return true;
        }
      }
      return false;
    });
  }
}
