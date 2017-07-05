import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { LoginPage } from "../login/login";
import { GooglePlus } from '@ionic-native/google-plus'
import { ImagePicker } from '@ionic-native/image-picker';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Userimage: String = "";
  Username: String = "";
  email: String = "";
  arr: FirebaseListObservable<any[]>;


  constructor(private alertCtrl: AlertController, private imagePicker: ImagePicker, public googleplus: GooglePlus, public navCtrl: NavController, public _database: AngularFireDatabase, public _auth: AngularFireAuth) {
    /*-_auth.authState.subscribe(auth => {
      if (auth) {
        this.email = auth.email;
        this.Username = auth.displayName;
        this.Userimage = auth.photoURL;
      }
      else {
        navCtrl.push(LoginPage);
      }
    });*/

  }
  add(field) {
    this.arr.push({ message: field.value, createdAt: new Date().toString(), send: this.Username, senderimage: this.Userimage, email: this.email });
    field.value = "";
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.arr = this._database.list('/');
  }
  logout() {
    let options = {
      maximumImagesCount: 8,
      width: 500,
      height: 500,
      quality: 75
    }

    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        let alert = this.alertCtrl.create({
          title: 'Image URI:',
          subTitle: results[i],
          buttons: ['Dismiss']
        });
        alert.present(); // console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }
}
