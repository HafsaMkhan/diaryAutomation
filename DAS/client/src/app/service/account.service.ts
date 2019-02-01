import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http} from '@angular/http';
import { map } from 'rxjs/internal/operators/map';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  constructor(private navCtrl: NavController,private httpClient: HttpClient,private http: Http) { }
  error = "";
  RegisterUser(data){
    const url='http://localhost:3301/api/register';
    this.http.post(url, data).pipe( 
      map(res=>res.json())
      ).subscribe(data=> {
        console.log("POST Data #######",data)
        if(data.registerStatus=='created'){
          alert("Registered")
        }
        else if(data.registerStatus=='existing'){
          alert("Existing")
        }
        else {
          alert("Sever Error")
        }
      })
  }

  loginUser(data){
    const url='http://localhost:3301/api/login'
    
    this.http.post(url, data).pipe(
      map(res=>res.json())
      ).subscribe(data=> {console.log("POST Data #######",data.loginStatus,data.username)
        if(data.loginStatus=='authorized'){
          this.navCtrl.navigateForward('userHome/'+ data.username)
        }
        else if(data.loginStatus=='not_authorized'){
          alert("NOT Authorized");
          this.error="Invalid username or password";
        }
        else{
          alert("Failure");
          this.error="Check your connection";
        }

      })
  }
}
