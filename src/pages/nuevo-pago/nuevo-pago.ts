import { ComprasCrearPage } from './../compras-crear/compras-crear';
import { ComprasProvider } from './../../providers/compras/compras';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController, AlertController, ModalController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-nuevo-pago',
  templateUrl: 'nuevo-pago.html'
})
export class NuevoPagoPage {
  
  image: string = null;
  source: string = null;
  public images: any = [];
  public save = {foto:"", obra:"", origen:"", proveedor:"", fecha:""};
  count = 0;
  loading:any;
  obras: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private camera: Camera,
    public provider: ComprasProvider,
    public loadingCtrl:LoadingController,
    private toastCtrl:ToastController, 
    public alertCtrl: AlertController,
    public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
   this.getObras();
  }

  getObras(){
    //console.log('ionViewDidLoad MisCitasPage');      
    this.showLoader();
    this.provider.Obras().then((result) =>{
      this.loading.dismiss();
      this.obras = result["results"];        
      //--Guardar en variable local, los datos obtenidos del query              
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    }); 
 }

 goto(data, data2){
    let modal = this.modalCtrl.create(ComprasCrearPage,
    {
      obra: data,
      fecha: data2
    });
    modal.present();    
 }

 showLoader(){
  this.loading = this.loadingCtrl.create({
    content: 'Creando...'
  });
}

presentToast(msg){
  let toast = this.toastCtrl.create({
    message: msg,
    duration:3000,
    position:'bottom',
    dismissOnPageChange : true
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
  
}
