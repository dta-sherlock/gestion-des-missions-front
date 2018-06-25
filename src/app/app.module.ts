import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TabMissionComponent } from './tab-mission/tab-mission.component';
import { RouterModule } from '@angular/router';
import { RecupMissionsService } from './services/recup-missions.service';
import { TableauMissionEnAttenteValidationComponent } from './tableau-mission-en-attente-validation/tableau-mission-en-attente-validation.component';
import {CookieService} from 'ngx-cookie-service';
import { RecupManagerMissionService } from './services/recup-manager-mission.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TabMissionComponent,
    TableauMissionEnAttenteValidationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    RecupMissionsService,
    HttpClientModule,
    CookieService,
    RecupManagerMissionService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
