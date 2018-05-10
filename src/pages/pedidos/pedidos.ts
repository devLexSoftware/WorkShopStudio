import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NuevoPedidoPage } from '../nuevo-pedido/nuevo-pedido';

@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html'
})
export class PedidosPage {

  constructor(public navCtrl: NavController) {
  }
  goToNuevoPedido(params){
    if (!params) params = {};
    this.navCtrl.push(NuevoPedidoPage);
  }
}
