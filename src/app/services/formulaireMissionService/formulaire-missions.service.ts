import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../../entity/Mission';
import { Observable } from 'rxjs';
import { API_BASE_URL, API_MISSION } from '../../constantes';


@Injectable()
export class FormulaireMissionsServiceService {
  constructor(private http: HttpClient) { }


  /*put(mission:Mission, id:number): any {    
    return this.http.put<Mission>(`${API_BASE_URL}${API_MISSION}/${id}`, mission);
  }


  postMission(mission: Mission) {
    console.log(mission)
    return this.http.post<Mission>(`${API_BASE_URL}${API_MISSION}`, mission);}*/
  
  
    // Met à jour une mission via son id
  put(mission:Mission, id:number): any {
    return this.http.put<Mission>(`${API_BASE_URL}${API_MISSION}/${id}`, mission);
  }

  // Ajoute une mission
  postMission(mission: Mission): Observable<Mission> {
    console.log( mission)
    return <Observable<Mission>>this.http.post(`${API_BASE_URL}${API_MISSION}`, mission);
  }
  
  // Récupère une mission particulière via son id
  getMissionById(id:number): Observable<Mission>{
    return <Observable<Mission>>this.http.get(`${API_BASE_URL}${API_MISSION}/${id}`);
  }

}
