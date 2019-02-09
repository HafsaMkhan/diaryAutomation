import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import {User} from '../viewModels/User'

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  constructor(private navCtrl: NavController,private http: HttpClient) { }
  error = "";
  msg="";
  httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
});

  GetType(): Observable<any>{
    const url='http://localhost:3301/get/userType'
    return this.http.get(url, {headers: this.httpHeaders, observe:'response',responseType: 'json'})
  }
  RegisterUser(data): Observable<any> { 
    const url='http://localhost:3301/register/user';
    return this.http.post(url, data,{headers: this.httpHeaders, observe:'response',responseType: 'json'});
  }

  loginUser(data): Observable<any>{
    let url='http://localhost:3301/api/login'
    
    return this.http.post(url, data,{observe:'response',responseType: 'json'})
  }
}
