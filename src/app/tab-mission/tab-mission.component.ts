import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'
import { PATH_AJOUT_MISSION } from '../../constantes';

@Component({
  selector: 'app-tab-mission',
  templateUrl: './tab-mission.component.html',
  styleUrls: ['./tab-mission.component.css']
})
export class TabMissionComponent implements OnInit {

  constructor(private router: Router) { }

  // Si l'utilisateur clique sur le bouton d'ajout
  // il est renvoyé vers le formulaire d'ajout de mission
  goToAjout(){
    this.router.navigate([PATH_AJOUT_MISSION]);
  }

  ngOnInit() {
  }

}
