import { Injectable } from '@angular/core';
import { Nature } from '../../entity/Nature';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL, API_NATURE } from '../../constantes';

@Injectable()
export class RecupNatureService {

  constructor(private http: HttpClient) { }

  getNature(): Observable<Array<Nature>> {
    return <Observable<Array<Nature>>>this.http.get(`${API_BASE_URL}${API_NATURE}`);
  }
}
