import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../../Entity/Mission';
import { Observable } from 'rxjs';

/*TODO : mettre le bon chemin*/
const API_BASE_URL: string = 'http://localhost:3000/';
const API_MISSION: string = 'missions';


@Injectable()
export default class FormulaireMissionsServiceService {

  constructor(private http: HttpClient) { }

  postMission(misson: Mission): Observable<Mission> {
    return <Observable<Mission>>this.http.post(`${API_BASE_URL}${API_MISSION}`, misson);
  }

  getMissionById(id:number): Observable<Mission>{
    
    return <Observable<Mission>>this.http.get(`${API_BASE_URL}${API_MISSION}/${id}`);
    
  }

}
