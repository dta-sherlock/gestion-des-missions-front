import { Injectable } from '@angular/core';
import { Mission } from '../../entity/Mission';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, API_MISSION } from '../../constantes';

@Injectable()
export class RecupMissionsService {


  constructor(private http: HttpClient) { }

  getMissionsPourCollab(): Observable<Array<Mission>>{
    return <Observable<Array<Mission>>> this.http.get(`${API_BASE_URL}${API_MISSION}`);
  }

  supprimerMission(mission: Mission): Observable<Array<Mission>>{
    return <Observable<Array<Mission>>> this.http.delete(`${API_BASE_URL}${API_MISSION}/${mission.id}`);
  }

}
