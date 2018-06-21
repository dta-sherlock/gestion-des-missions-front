import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  apiUrl = environment.apiUrl;

  cookieValue = "UNKNOM";

  constructor(private cookie:CookieService){}

  ngOnInit():void{
    //utilisateur permet d'avoir le nom du cookie.
    //3 est la valeur indiqué dans le cookie.
    this.cookie.set('utilisateur','3');
    //Pour crée un nouveau cookie, il suffit d'en déclarer un autre
    // Pour récupéré la valeur d'un cookie, il suffit de faire un get du CookieService en précisant le nom.
    this.cookie.set('name','ronald');
  }
}
