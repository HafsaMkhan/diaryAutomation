import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http} from '@angular/http';
import { map } from 'rxjs/internal/operators/map';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private navCtrl: NavController,private httpClient: HttpClient,private http: Http) { }
  error = "";

  RegisterSchool(data){
    alert("Alert here in service")
    const url='http://localhost:3301/register/school';
    this.http.post(url, data).pipe( 
      map(res=>res.json())
      ).subscribe(data=> {
        console.log("POST Data #######",data)
        if(data.registerStatus=='created'){
          this.error="Registered"
          alert(this.error)
        }
        else if(data.registerStatus=='existing'){
          this.error="School with this information already exists!";
          alert(this.error)
        }
        else if(data.registerStatus=='email_existing'){
          this.error="Email Aready exists";
          alert(this.error)
        }
        else if(data.registerStatus=='wrong_title'){
          this.error="Invalid registration type";
          alert(this.error)
        }
        else {
          this.error="Invalid Information or something went wrong!"
          alert("Invalid Information or something went wrong!")
        }
      })
  }

}
