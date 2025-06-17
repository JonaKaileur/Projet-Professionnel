import { Injectable } from '@angular/core';
import { Poste } from '../models/poste-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PosteService {

  private apiURL = "http://localhost:3000/Post";

  getPostes():Observable<Poste[]> {
    return this.http.get<Poste[]>(this.apiURL);
  }
  
  getPosteById(id: string):Observable<Poste> {
    return this.http.get<Poste>(`${this.apiURL}/${id}`);
  }

  /*
  async addPost(description: string, imageUrl: string) {
    // Vérifie si l'utilisateur est authentifié
    if (this.authService.id_user) {
      const newItem: Maeev = { 
        description: description,
        imageurl: imageUrl,
        name_user: this.authService.name_user_auth,  // Utiliser le nom de l'utilisateur authentifié
        id: this.authService.id_user,  // Utiliser l'ID de l'utilisateur authentifié
        nblike : 0
      };
      
      const postsCollection = collection(db, 'post');
      addDoc(postsCollection, newItem).then(async() => {
        await this.loadMaeevs();  
      });
    } else {
      console.error('Utilisateur non authentifié. Impossible d\'ajouter un maeev.');
    }
  }
    */

  constructor(private http : HttpClient) { }
}
