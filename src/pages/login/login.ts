import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import firebase from 'firebase';
import { HomePage } from "../home/home";
import { GooglePlus } from '@ionic-native/google-plus';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  a: number = 0;
  googleProvider = new firebase.auth.GoogleAuthProvider();
  constructor(private alertCtrl: AlertController, public googleplus: GooglePlus, public _auth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {


  }
  navigate() {
    console.log("navigate1");
    if (this.a == 1) {
       let alert = this.alertCtrl.create({
          title: 'welcome',
          subTitle: 'have fun',
          buttons: ['Dismiss']
        });
        alert.present();
      this.navCtrl.push(HomePage);
    }
  }
  signInWithGoogle() {
    /*
    this._auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(function(result) {
     console.log(result);
    });*/
    this.googleplus.login({
      'webClientId': '382554077907-f0tb5v9gr50i2d7erum4s15gljrhe37l.apps.googleusercontent.com',
      'ofline': true,
      'scopes': 'profile email'
    })
      .then((res) => {
        const firecreds = firebase.auth.GoogleAuthProvider.credential(res.idToken);
        this._auth.auth.signInWithCredential(firecreds).then((res) => {

          this.navCtrl.setRoot(HomePage);
        }).catch((err) => {

        })

      }).catch((err) => {

      })

  }
  signIn(email, password) {

  }
  signUp(email, password) {

  }
  ionViewDidLoad() {

        console.log("Viral hiii");
   /* this._auth.authState.subscribe(auth => {
      if (auth) {
        console.log("navigate");
        this.a = 1;
        this.navigate();

      }
      else
      {
         let alert = this.alertCtrl.create({
          title: 'sELECT USER',
          subTitle: 'have fun',
          buttons: ['Dismiss']
        });
        alert.present();
      }

    });*/
  }

}
