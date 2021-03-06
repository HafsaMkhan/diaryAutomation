import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import { BrMaskerModule } from 'br-mask';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthGuardService } from './service/auth-guard.service';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TeacherMenuComponent } from './teacher-menu/teacher-menu.component';

@NgModule({
  declarations: [AppComponent, TeacherMenuComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    BrMaskerModule
  ],
  providers: [
    StatusBar,
    AuthGuardService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
