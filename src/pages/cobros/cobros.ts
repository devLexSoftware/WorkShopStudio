import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NuevoCobroPage } from '../nuevo-cobro/nuevo-cobro';

@Component({
  selector: 'page-cobros',
  templateUrl: 'cobros.html'
})
export class CobrosPage {

  constructor(public navCtrl: NavController) {
  }
  goToNuevoCobro(params){
    if (!params) params = {};
    this.navCtrl.push(NuevoCobroPage);
  }
}
