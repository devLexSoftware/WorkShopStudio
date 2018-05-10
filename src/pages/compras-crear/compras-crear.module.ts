import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComprasCrearPage } from './compras-crear';

@NgModule({
  declarations: [
    ComprasCrearPage,
  ],
  imports: [
    IonicPageModule.forChild(ComprasCrearPage),
  ],
})
export class ComprasCrearPageModule {}
