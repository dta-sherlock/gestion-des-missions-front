import { Injectable } from '@angular/core';
import { Mission } from '../../entity/Mission';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, API_MISSION, PATH_MISSIONS } from '../../constantes';
import { Router } from '@angular/router';

@Injectable()
export class RecupMissionsService {


  constructor(private router: Router, private http: HttpClient) { }

  getMissionsPourCollab(): Observable<Array<Mission>>{
    return <Observable<Array<Mission>>> this.http.get(`${API_BASE_URL}${API_MISSION}`);
  }

  supprimerMission(mission: Mission): Observable<Array<Mission>>{
    this.router.navigate([PATH_MISSIONS]);
    return <Observable<Array<Mission>>> this.http.delete(`${API_BASE_URL}${API_MISSION}/${mission.id}`);
  }

}
