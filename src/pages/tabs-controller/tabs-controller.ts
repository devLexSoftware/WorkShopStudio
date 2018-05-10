import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ObrasPage } from '../obras/obras';
import { PagosPage } from '../pagos/pagos';
import { PedidosPage } from '../pedidos/pedidos';
import { CobrosPage } from '../cobros/cobros';
import { EquiposPage } from '../equipos/equipos';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = ObrasPage;
  tab2Root: any = PagosPage;
  tab3Root: any = PedidosPage;
  tab4Root: any = CobrosPage;
  tab5Root: any = EquiposPage;
  constructor(public navCtrl: NavController) {
  }
  
}
