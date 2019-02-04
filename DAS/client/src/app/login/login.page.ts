import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http} from '@angular/http';
import { map } from 'rxjs/internal/operators/map';
import {AccountService} from '../service/account.service'
import { NavController } from '@ionic/angular';
import {LoginUser} from '../viewModels/LoginUsers';

@Component({
  selector: 'app-login-parent',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers:[AccountService]
})
export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController,private httpClient: HttpClient,private http: Http,private service: AccountService) {
    alert(this.service.error)
    if(this.service.error!=''){
      this.errMsg=this.service.error;
    }
   }
  loginUser = {} as LoginUser
  errMsg="";
  ngOnInit() {
  }

  login() {
      this.service.loginUser(this.loginUser)
      console.log(this.service.error)
    }
}
