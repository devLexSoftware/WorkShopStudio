import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ComprasCrearPage } from '../compras-crear/compras-crear';

/**
 * Generated class for the ComprasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compras',
  templateUrl: 'compras.html',
})
export class ComprasPage {
  obra = "";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComprasPage');
  }

  goto(){
    this.navCtrl.push(ComprasCrearPage);   
    //let modal = this.modalCtrl.create(ComprasCrearPage);
    //modal.present();
  }

}
