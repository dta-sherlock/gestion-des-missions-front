import { Injectable } from '@angular/core';
import { Nature } from '../../entity/Nature';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL, API_NATURE} from '../../constantes';

@Injectable()
export class FormulaireNatureServiceService {

  constructor(private http: HttpClient) { }

  // Ajout d'une nature
  postNature(nature: Nature): Observable<Nature> {
    return <Observable<Nature>>this.http.post(`${API_BASE_URL}${API_NATURE}`, nature);
  }

  // Met à jour une nature via son id
  put(nature:Nature, id:number){
    return this.http.put<Nature>(`${API_BASE_URL}${API_NATURE}/${id}`, nature);
  }

  // Supprime une nature via son id
  delete(nature:Nature){
    return this.http.delete(`${API_BASE_URL}${API_NATURE}/${nature.id}`);
  }
 
}
