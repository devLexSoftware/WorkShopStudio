import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgregarObraPage } from '../agregar-obra/agregar-obra';

@Component({
  selector: 'page-obras',
  templateUrl: 'obras.html'
})
export class ObrasPage {

  constructor(public navCtrl: NavController) {
  }
  goToAgregarObra(params){
    if (!params) params = {};
    this.navCtrl.push(AgregarObraPage);
  }
}
