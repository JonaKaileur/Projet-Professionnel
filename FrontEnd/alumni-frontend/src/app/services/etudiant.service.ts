import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private etudiants !:Observable<Etudiant[]> ;
  
  private apiURL = "http://localhost:3000";

  /*
  getEtudiants(): Etudiant[] {
    return this.etudiants;
  }
*/
  
  getEtudiantsMongos():Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.apiURL);
  }
/*
  getEtudiantById(id: string): Etudiant | undefined {
    return this.etudiants.find(etudiant => etudiant.id === id);
  }
*/
 getEtudiantByIdMongos(id: string):Observable<Etudiant>| undefined {
    return this.http.get<Etudiant>('${this.apiURL}/${id}');
  }

  
  constructor(private http: HttpClient) { }
}
