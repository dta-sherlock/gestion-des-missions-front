import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import { Router } from '@angular/router';
import { PATH_MISSIONS, PATH_NATURE, } from './constantes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Gestion des missions'
  apiUrl = environment.apiUrl;

  constructor(private router: Router){}


 navigateToMissions(){
  this.router.navigate([PATH_MISSIONS])
 }

 navigateToNature(){
  this.router.navigate([PATH_NATURE])
 }

  ngOnInit():void{
    
  }
}
