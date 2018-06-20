import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';

import {ROUTES} from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from "@angular/forms";
import { TabMissionComponent } from './tab-mission/tab-mission.component';
import { RecupMissionsService } from './services/recupMissionService/recup-missions.service';
import { FormulaireMissionsComponent } from './formulaire-missions/formulaire-missions.component';
import  FormulaireMissionsServiceService  from './services/formulaireMissionService/formulaire-missions-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NatureTableauComponent } from './nature-tableau/nature-tableau.component';
import { RecupNatureService } from './services/recupNatureService/recup-nature.service';
import { FormulaireNatureServiceService } from './services/formulaireNatureService/formulaire-nature-service.service';


@NgModule({
  declarations: [
    AppComponent,
    TabMissionComponent,
    FormulaireMissionsComponent,
    NatureTableauComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    FormulaireNatureServiceService,
    RecupNatureService,
    RecupMissionsService,
    FormulaireMissionsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
