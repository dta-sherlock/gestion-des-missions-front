import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../../Entity/Mission';
import { Observable } from 'rxjs';
import { API_BASE_URL, API_MISSION } from '../../constantes';


@Injectable()
export default class FormulaireMissionsServiceService {

  constructor(private http: HttpClient) { }

  postMission(mission: Mission): Observable<Mission> {
    return <Observable<Mission>> this.http.post(`${API_BASE_URL}${API_MISSION}/${mission.id}`, mission);
  }

}
