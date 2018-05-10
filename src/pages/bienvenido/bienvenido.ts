import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ObrasPage } from '../obras/obras';
import { AgregarObraPage } from '../agregar-obra/agregar-obra';

@Component({
  selector: 'page-bienvenido',
  templateUrl: 'bienvenido.html'
})
export class BienvenidoPage {

  constructor(public navCtrl: NavController) {
  }
  goToObras(params){
    if (!params) params = {};
    this.navCtrl.push(ObrasPage);
  }goToAgregarObra(params){
    if (!params) params = {};
    this.navCtrl.push(AgregarObraPage);
  }
}
