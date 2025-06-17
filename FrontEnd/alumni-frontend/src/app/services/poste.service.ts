import { Injectable } from '@angular/core';
import { Poste } from '../models/poste-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PosteService {

  private apiURL = "http://localhost:3000/Post";
  private mesPostes: Poste[] = [];

  getPostes():Observable<Poste[]> {
      return this.http.get<Poste[]>(this.apiURL);
    }
  
getPosteById(id: string):Observable<Poste> {
    return this.http.get<Poste>(`${this.apiURL}/${id}`);
  }

  constructor(private http : HttpClient) { }
}
