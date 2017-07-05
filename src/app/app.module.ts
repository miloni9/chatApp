import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from "../pages/login/login";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { ImagePicker } from '@ionic-native/image-picker';
export const firebaseconfig={
  apiKey: "AIzaSyA_CT6vz8qHVhV8mRBH8pNAHW6iNnhZdOQ",
    authDomain: "chatapp-17ffc.firebaseapp.com",
    databaseURL: "https://chatapp-17ffc.firebaseio.com",
    projectId: "chatapp-17ffc",
    storageBucket: "chatapp-17ffc.appspot.com",
    messagingSenderId: "382554077907"}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   AngularFireModule.initializeApp(firebaseconfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [AngularFireAuth,AngularFireDatabase,
    StatusBar,
    SplashScreen,
    GooglePlus,
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
