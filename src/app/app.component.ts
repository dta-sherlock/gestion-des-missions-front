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
    this.cookie.set('test','3');
    this.cookieValue = this.cookie.get('test');
  }
}
