import { Injectable } from '@angular/core';
import { Nature } from '../../Entity/Nature';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/*TODO : mettre le bon chemin*/
const API_BASE_URL: string = 'http://localhost:3000/';
const API_NATURE: string = 'natures';
@Injectable()
export class FormulaireNatureServiceService {

  constructor(private http: HttpClient) { }
  postNature(nature: Nature): Observable<Nature> {
    return <Observable<Nature>>this.http.post(`${API_BASE_URL}${API_NATURE}`, nature);
  }
}
