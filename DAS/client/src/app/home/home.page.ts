import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";
import { Http} from '@angular/http';
import { LoginPage } from '../login/login.page';
import { AuthGuardService } from '../service/auth-guard.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public navCtrl: NavController,private http: Http) {
    if(localStorage.getItem('token')){
      navCtrl.navigateForward('userHome/'+localStorage.getItem('type')+'/'+localStorage.getItem('username'));
    }
  }

ngOnInit(): void {}

}
