import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NuevoPagoPage } from '../nuevo-pago/nuevo-pago';

@Component({
  selector: 'page-pagos',
  templateUrl: 'pagos.html'
})
export class PagosPage {

  constructor(public navCtrl: NavController) {
  }

  goto(){
    this.navCtrl.push(NuevoPagoPage);   
    //let modal = this.modalCtrl.create(ComprasCrearPage);
    //modal.present();
  }
}
