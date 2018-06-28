import { Injectable } from '@angular/core';
import { Mission } from '../entity/Mission';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecupManagerMissionService {
ListeDesMissions:Array<Mission>
  constructor(private http:HttpClient){
    
 }

  getMissions(){

  }

  putMission(mission:Mission){

  }

}
