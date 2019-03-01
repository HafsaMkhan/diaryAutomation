import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


import {User} from '../viewModels/User';
import {LoginUser} from '../viewModels/LoginUsers';
import {School} from '../viewModels/School';
import {AccountService} from '../service/account.service'
import {SchoolService} from '../service/school.service'
import { NavController } from "@ionic/angular";


@Component({
  selector: 'app-register-parent',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers:[AccountService, SchoolService]
})
export class RegisterPage implements OnInit {

  constructor(
    private accountService: AccountService,private schoolService: SchoolService, private navCtrl:NavController) 
    {
      if(localStorage.getItem('token')){
        navCtrl.navigateRoot('userHome/'+localStorage.getItem('type')+'/'+localStorage.getItem('username'));
      }
    }
  user = {} as User;
  loginUser = {} as LoginUser;
  school = {} as School;
  options:[];
  registerAs = "";
  errorMsg = "";
  msg="";

  ngOnInit() { 
    this.accountService.GetType().subscribe(res=>{
      if(res.body.userType=='success'){
        this.options=res.body.data;
      }

    })
  }

  add() {
     
    if(this.registerAs=='school'){
      let data = [this.school,this.loginUser,'school'];
      this.schoolService.RegisterSchool(data)
      .subscribe(data=> {
        console.log("POST Data #######",data.body)
        if(data.body.registerStatus=='created'){
         this.msg="You have successfully created your account. Your registration status will be updated through an email soon!"
        }
        else if(data.body.registerStatus=='existing'){
          this.errorMsg="School with this information already exists!";
        }
        else if(data.body.registerStatus=='email_existing'){
          this.errorMsg="Email Aready exists";
        }
        else if(data.body.registerStatus=='wrong_title'){
          this.errorMsg="Invalid registration type";
        }
        else {
          this.errorMsg="Invalid Information or something went wrong!"
        }
      })
      
    }
    else{
      let data = [this.user,this.loginUser,this.registerAs]
      this.accountService.RegisterUser(data).subscribe(data=> {
        console.log("POST Data #######",data.body.registerStatus)
        if(data.body.registerStatus=='created'){
         this.msg="You have successfully created your account. Your registration status will be updated through an email soon!"
        }
        else if(data=='existing'){
          this.errorMsg="Account already exists";
        }
        else {
          this.errorMsg="Invalid Information or something went wrong!"
          // alert("Invalid Information or something went wrong!")
          
        }
      })

    }
    
    }
      
}
