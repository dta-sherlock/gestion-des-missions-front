import { Injectable } from '@angular/core';
import { Mission } from '../entity/Mission';
import { HttpClient } from '@angular/common/http';
import { PATH_VALIDATION_MISSION, API_BASE_URL } from '../constantes';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class RecupManagerMissionService {
ListeDesMissions:Array<Mission>
  constructor(private http:HttpClient,private cookie:CookieService ){
    
 }

  getMissions(){
    let id = this.cookie.get('utilisateur');
   return <Observable<Array<Mission>>>this.http.get(`${API_BASE_URL}${PATH_VALIDATION_MISSION}/${id}`);
  }

  putMission(mission:Mission){
    let id = this.cookie.get('utilisateur');
   // this.http.put(`${API_BASE_URL}${PATH_VALIDATION_MISSION}/${id}/mission/${mission.id}`, mission);
  }

}
