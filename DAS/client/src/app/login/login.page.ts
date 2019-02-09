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

  constructor(private navCtrl: NavController,private service: AccountService) {}
  
  loginUser = {} as LoginUser;
  errMsg="";
  ngOnInit() { }

  login() {
    console.log("Login User",this.loginUser)
    this.service.loginUser(this.loginUser)
      .subscribe(data=> {console.log("POST Data #######",data.body)
      if(data.body.loginStatus=='authorized'){
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
