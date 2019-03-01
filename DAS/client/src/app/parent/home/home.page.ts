import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../service/auth-guard.service';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-profile',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class ParentHome implements OnInit {

  constructor(public navCtrl: NavController, private authService: AuthGuardService) { }

  ngOnInit() {
  }
  
logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('type');
  this.navCtrl.navigateBack('login');
}

}
