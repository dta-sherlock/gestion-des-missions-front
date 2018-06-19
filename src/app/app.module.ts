import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TabMissionComponent } from './tab-mission/tab-mission.component';
import { RouterModule } from '@angular/router';
import { RecupMissionsService } from './services/recup-missions.service';


@NgModule({
  declarations: [
    AppComponent,
    TabMissionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    RecupMissionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
