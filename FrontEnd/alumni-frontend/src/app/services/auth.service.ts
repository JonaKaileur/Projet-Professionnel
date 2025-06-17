import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn(): boolean {
    // Logique pour vérifier si l'utilisateur est connecté
    // Par exemple, vérifier la présence d'un token dans le stockage local
    const token = localStorage.getItem('authToken');
    return !!token; // Retourne true si le token existe, sinon false
  }
}
