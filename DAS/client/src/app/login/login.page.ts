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

  constructor(private navCtrl: NavController,private httpClient: HttpClient,private http: Http,private service: AccountService) { }
  loginUser = {} as LoginUser

  ngOnInit() {
  }

  login() {
    this.service.loginUser(this.loginUser);
    }
}
