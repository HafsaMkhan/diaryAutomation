import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';
import { Http} from '@angular/http';
import { map } from 'rxjs/internal/operators/map';
import {User} from '../viewModels/User';
import {LoginUser} from '../viewModels/LoginUsers';
import {AccountService} from '../service/account.service'

@Component({
  selector: 'app-register-parent',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers:[AccountService]
})
export class RegisterPage implements OnInit {

  options=[{value:"parent",name:"Parent"},{value:"school",name:"School"},{value:"teacher",name:"Teacher"}]

  constructor(private httpClient: HttpClient,public http: Http,private service: AccountService) { }
  user = {} as User;
  loginUser = {} as LoginUser;
  registerAs = "";

  ngOnInit() {
  }

  add() {
    var data = [this.user,this.loginUser,this.registerAs]
    this.service.RegisterUser(data);
    }
      
}
