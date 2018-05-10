import { ObrasPage } from '../pages/obras/obras';
import { PagosPage } from '../pages/pagos/pagos';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { CobrosPage } from '../pages/cobros/cobros';
import { EquiposPage } from '../pages/equipos/equipos';
import { AgregarObraPage } from '../pages/agregar-obra/agregar-obra';
import { NuevoPagoPage } from '../pages/nuevo-pago/nuevo-pago';
import { NuevoCobroPage } from '../pages/nuevo-cobro/nuevo-cobro';
import { NuevoPedidoPage } from '../pages/nuevo-pedido/nuevo-pedido';
import { DetallesPage } from '../pages/detalles/detalles';
import { NuevoEquipoPage } from '../pages/nuevo-equipo/nuevo-equipo';
import { ClientesPage } from '../pages/clientes/clientes';
import { EmpleadosPage } from '../pages/empleados/empleados';
import { SoportePage } from '../pages/soporte/soporte';
import { BienvenidoPage } from '../pages/bienvenido/bienvenido';

import { ComprasCrearPage } from './../pages/compras-crear/compras-crear';
import { ComprasPage } from './../pages/compras/compras';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
//import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { ComprasProvider } from '../providers/compras/compras';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    //TabsPage,
    ComprasPage,
    ComprasCrearPage,
    ObrasPage,
    PagosPage,
    PedidosPage,
    TabsControllerPage,
    CobrosPage,
    EquiposPage,
    AgregarObraPage,
    NuevoPagoPage,
    NuevoCobroPage,
    NuevoPedidoPage,
    DetallesPage,
    NuevoEquipoPage,
    ClientesPage,
    EmpleadosPage,
    SoportePage,
    BienvenidoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    //TabsPage,
    ComprasPage,
    ComprasCrearPage,
    ObrasPage,
    PagosPage,
    PedidosPage,
    TabsControllerPage,
    CobrosPage,
    EquiposPage,
    AgregarObraPage,
    NuevoPagoPage,
    NuevoCobroPage,
    NuevoPedidoPage,
    DetallesPage,
    NuevoEquipoPage,
    ClientesPage,
    EmpleadosPage,
    SoportePage,
    BienvenidoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ComprasProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ComprasProvider
  ]
})
export class AppModule {}
