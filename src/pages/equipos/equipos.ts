import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetallesPage } from '../detalles/detalles';
import { NuevoEquipoPage } from '../nuevo-equipo/nuevo-equipo';

@Component({
  selector: 'page-equipos',
  templateUrl: 'equipos.html'
})
export class EquiposPage {

  constructor(public navCtrl: NavController) {
  }
  goToDetalles(params){
    if (!params) params = {};
    this.navCtrl.push(DetallesPage);
  }goToNuevoEquipo(params){
    if (!params) params = {};
    this.navCtrl.push(NuevoEquipoPage);
  }
}
