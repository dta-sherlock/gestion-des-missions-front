import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../../Entity/Mission';
import { Observable } from 'rxjs';
import { API_BASE_URL, API_MISSION } from '../../constantes';


@Injectable()
export default class FormulaireMissionsServiceService {
  constructor(private http: HttpClient) { }


  put(mission:Mission, id:number): any {
    console.log(id);
    
    console.log(mission);
    
    return this.http.put<Mission>(`${API_BASE_URL}${API_MISSION}/${id}`, mission);
  }


  postMission(mission: Mission): Observable<Mission> {
    console.log( mission)
    return <Observable<Mission>>this.http.post(`${API_BASE_URL}${API_MISSION}`, mission);
  }
  
  getMissionById(id:number): Observable<Mission>{
    return <Observable<Mission>>this.http.get(`${API_BASE_URL}${API_MISSION}/${id}`);
    
  }

}
