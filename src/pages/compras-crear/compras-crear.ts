import { ComprasProvider } from './../../providers/compras/compras';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


/**
 * Generated class for the ComprasCrearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compras-crear',
  templateUrl: 'compras-crear.html',
})
export class ComprasCrearPage {

  image: string = null;
  source: string = null;
  public images: any = [];
  public save = {foto:"", obra:"", origen:"", proveedor:"", fecha:""};
  count = 0;
  loading:any;
  obras: any[] = [];
  public obra = "";
  public fecha = "";


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private camera: Camera,
    public provider: ComprasProvider,
    public loadingCtrl:LoadingController,
    private toastCtrl:ToastController, 
    public alertCtrl: AlertController) {

      this.obra = navParams.get("obra");
      this.fecha = navParams.get("fecha");
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ComprasCrearPage');
    //this.getObras();
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

  dismiss() {
    this.viewCtrl.dismiss();
  }

  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.images.push(`data:image/jpeg;base64,${imageData}`);
      this.image = `data:image/jpeg;base64,${imageData}`;
      this.source = imageData;
      this.savePicture();
    })
    .catch(error =>{
      console.error( error );
    });
  }

 
  savePicture(){      
      this.showLoader();   
      this.save.foto = this.source;
      this.save.obra = this.obra;
      this.save.fecha = this.fecha;
      this.save.proveedor = "9";
      this.save.origen = "movil";        
      this.provider.save(this.save).then((result) =>{          
      this.navCtrl.pop();      
      this.showAlert();                      
    }, (err) => {      
      this.presentToast(err);
    });             
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Exito',
      subTitle: 'Se creo el usuario con exito.',
      buttons: ['OK']
    });
    alert.present();
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
