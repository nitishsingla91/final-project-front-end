import { Injectable } from '@angular/core';
import {  Headers, RequestOptions , HttpModule} from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  public input:any;
  constructor(private http:HttpClient , private router: Router) {
    this.input = {
      "email": ""
  };
   }

  public registerapi(user)
  {
    return this.http.post("localhost:9191/registration",user,{responseType:'text' as 'json'});
    }
}

