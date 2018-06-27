import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import { Router } from '@angular/router';
import { PATH_MISSIONS, PATH_PRIMES, PATH_FRAIS, PATH_NATURE, PATH_PLANNING_MISSION, PATH_ACCUEIL } from './constantes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Gestion des missions'
  apiUrl = environment.apiUrl;

  constructor(private router: Router){}

 navigateToAccueil(){
  this.router.navigate([PATH_ACCUEIL])
 }
 navigateToMissions(){
  this.router.navigate([PATH_MISSIONS])
 }
 navigateToPlanningMissions(){
  this.router.navigate([PATH_PLANNING_MISSION])
 }
 navigateToPrimes(){
  this.router.navigate([PATH_PRIMES])
 }
 navigateToNotesFrais(){
  this.router.navigate([PATH_FRAIS])
 }
 navigateToNature(){
  this.router.navigate([PATH_NATURE])
 }

  ngOnInit():void{
    
  }
}
