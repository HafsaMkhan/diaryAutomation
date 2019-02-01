import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { IonicModule } from '@ionic/angular';
import { ParentHome } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: ParentHome
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ParentHome]
})
export class HomePageModule {}
