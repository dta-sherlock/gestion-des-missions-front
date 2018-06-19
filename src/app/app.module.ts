import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import {ROUTES} from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { FormulaireMissionsComponent } from './formulaire-missions/formulaire-missions.component';


@NgModule({
  declarations: [
    AppComponent,
    FormulaireMissionsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
