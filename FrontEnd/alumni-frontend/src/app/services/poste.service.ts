import { Injectable } from '@angular/core';
import { Poste } from '../models/poste-model';

@Injectable({
  providedIn: 'root'
})
export class PosteService {
  private postes: Poste[] = [
    new Poste('1', 'Doe', 'Stage - Développeur Frontend', 'Développement d\'applications web', 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', new Date(2023, 0, 1)),
    new Poste('2', 'Martin','Job - Développeur Backend', 'Développement de services backend', 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', new Date(2023, 0, 15) ),
    new Poste('3', 'Ogent','Alternance - Data Scientist', 'Analyse de données et machine learning', 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', new Date(2023, 1, 1))
  ];


  private mesPostes: Poste[] = [];

  getPostes(): Poste[] {
    return this.postes;
  }

  getPosteById(id: string): Poste | undefined {
    return this.postes.find(poste => poste.id === id);
  }
  

  constructor() { }
}
