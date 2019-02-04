import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';
import { Http} from '@angular/http';
import { map } from 'rxjs/internal/operators/map';
import {User} from '../viewModels/User';
import {LoginUser} from '../viewModels/LoginUsers';
import {School} from '../viewModels/School';
import {AccountService} from '../service/account.service'
import {SchoolService} from '../service/school.service'
import { Title } from '@angular/platform-browser';
import { BrMaskerIonic3, BrMaskModel } from 'brmasker-ionic-3';

@Component({
  selector: 'app-register-parent',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers:[AccountService, SchoolService]
})
export class RegisterPage implements OnInit {

  options=[{value:"parent",name:"Parent"},{value:"school",name:"School"},{value:"teacher",name:"Teacher"}]

  constructor(private httpClient: HttpClient,
    public http: Http,
    private accountService: AccountService,
    private schoolService: SchoolService,
    public brMaskerIonic3: BrMaskerIonic3) { }
  user = {} as User;
  loginUser = {} as LoginUser;
  school = {} as School;
  registerAs = "";
  errorMsg = "";

  ngOnInit() {
    this.errorMsg=this.accountService.error;
  }

  add() {
    if(this.registerAs=='school'){
      let data = [this.school,this.loginUser,'school']
      this.schoolService.RegisterSchool(data);
    }
    else{
      let data = [this.user,this.loginUser,this.registerAs]
      this.accountService.RegisterUser(data);
    }
    
    }
      
}
