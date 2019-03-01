import { Component, OnInit } from '@angular/core';
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

  loginUser = {} as LoginUser;
  errMsg="";

  constructor(private navCtrl: NavController,private service: AccountService) {
    if(localStorage.getItem('token')){
      navCtrl.navigateRoot('userHome/'+localStorage.getItem('type')+'/'+localStorage.getItem('username'));
    }
  }
  
  ngOnInit() { }

  login() {
    console.log("Login User",this.loginUser)
    this.service.loginUser(this.loginUser)
      .subscribe(data=> {console.log("POST Data #######",data.body.loginStatus)
      if(data.body.loginStatus=='authorized'){
        localStorage.setItem('token',data.body.token);
        localStorage.setItem('type',data.body.type);
        localStorage.setItem('username',data.body.username);
        this.navCtrl.navigateForward('userHome/'+ data.body.type +'/'+ data.body.username)
      }
      else if(data.body.loginStatus=='unauthorized'){
        this.errMsg = "Incorrect password!";
      }
      else if(data.body.loginStatus=='not_exist'){
        this.errMsg = "Not a registered account";
      }
      else{
        this.errMsg="Check your connection";
      }
    })

    }
}
