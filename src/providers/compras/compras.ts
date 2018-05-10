import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ComprasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let apiURL0 = 'http://13.57.216.72/workshop.com/services/servicios/pagos/'
let apiURL1 = 'http://13.57.216.72/workshop.com/services/servicios/obras/'
//let apiURL = 'http://localhost/app/services/servicios/pagos'
//let apiURL1 = 'http://localhost/app/services/servicios/obras/'
@Injectable()
export class ComprasProvider {
  
  constructor(public http: Http) {
    console.log('Hello ComprasProvider Provider');
  }

  //--Funcion para crear compras
  save(data){
    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      headers.append('content-Type', 'application/json');
      this.http.post(apiURL0+'create.php', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          resolve(res.json());          
        }, (err) => {
          reject(err);
        });
    });      
  }

  Obras(){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');     
      this.http.post(apiURL1+'obtener.php', JSON.stringify(""), {headers : headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

}
