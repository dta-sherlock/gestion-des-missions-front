import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';

import {ROUTES} from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from "@angular/forms";
import { FormulaireMissionsComponent } from './formulaire-missions/formulaire-missions.component';
import  FormulaireMissionsServiceService  from './services/formulaireMissionService/formulaire-missions-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FormulaireMissionsComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [FormulaireMissionsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
