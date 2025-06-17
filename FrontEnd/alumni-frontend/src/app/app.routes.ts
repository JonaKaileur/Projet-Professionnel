import { Routes } from '@angular/router';
import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';
import { HomeComponent } from './home/home.component';
import { ProfilEtudiantComponent } from './profil-etudiant/profil-etudiant.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { ProfilPostComponent } from './profil-post/profil-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    { path: 'home', component: HomeComponent }, // Page d'accueil affichant la liste d'étudiants
    { path: 'trombinoscope', component: ListEtudiantsComponent }, // Page d'accueil affichant la liste d'étudiants
    { path: 'forum', component: ListPostsComponent }, // Page d'accueil affichant la liste d'étudiants
    { path: 'etudiant/:id', component: ProfilEtudiantComponent }, // Page de profil étudiant
    { path: 'post/:id', component: ProfilPostComponent }, // Page de profil étudiant
    { path: 'add-post', component: AddPostComponent }, // Page d'ajout de post
    { path: 'login', component: LoginComponent }, // Page de connexion

];