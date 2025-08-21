import { Injectable } from '@angular/core';
import { Http, HttpOptions } from '@capacitor-community/http';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  doGet(url :string){
    const options: HttpOptions = {
      url,
      params: {}
    };

    return from(Http.get(options));
  }

  doPostVoluntariado(url:string, cedula:string, nombre:string, apellido:string, correo:string, password:string, telefono:string) :Observable<any>{
    const options: HttpOptions = {
      url,
      method: 'POST',
      data: {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        password: password,
        telefono: telefono
      }
    };

    return from(Http.request(options));
  }
}
