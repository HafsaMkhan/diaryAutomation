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
    const url='http://localhost:3301/register/user';
    this.http.post(url, data).pipe( 
      map(res=>res.json())
      ).subscribe(data=> {
        console.log("POST Data #######",data)
        if(data.registerStatus=='created'){

          alert("Registered")
        }
        else if(data.registerStatus=='existing'){
          this.error="Account already exists";
          alert("Existing")
        }
        else {
          this.error="Invalid Information or something went wrong!"
          alert("Invalid Information or something went wrong!")
        }
        return data.registerStatus;
      })
  }

  loginUser(data){
    const url='http://localhost:3301/api/login'
    
    this.http.post(url, data).pipe(
      map(res=>res.json())
      ).subscribe(data=> {console.log("POST Data #######",data.loginStatus,data.username)
        if(data.loginStatus=='authorized'){
          this.error= "Authorized";
          this.navCtrl.navigateForward('userHome/'+ data.type +'/'+ data.username)
        }
        else if(data.loginStatus=='unauthorized'){
          this.error="Incorrect password!";
        }
        else if(data.loginStatus=='not_exist'){
          this.error="Not a registered account";
        }
        else{
          this.error="Check your connection";
        }
        alert("Error"+ this.error)
      })
  }
}
