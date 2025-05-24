import { Routes } from '@angular/router';
import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';
import { HomeComponent } from './home/home.component';
import { ProfilEtudiantComponent } from './profil-etudiant/profil-etudiant.component';

export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},

    { path: 'home', component: HomeComponent }, // Page d'accueil affichant la liste d'étudiants
    { path: 'trombinoscope', component: ListEtudiantsComponent }, // Page d'accueil affichant la liste d'étudiants
    { path: 'etudiant/:id', component: ProfilEtudiantComponent }, // Page de profil étudiant
];