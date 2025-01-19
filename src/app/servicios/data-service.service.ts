import { Injectable } from '@angular/core';
import { ServicioEmergenteService } from './servicio-emergente.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private serviceWindowEmergent: ServicioEmergenteService) { }

  

  nombre:string="Augusto";

 alert(textoInput:string){
    this.serviceWindowEmergent.showmessage(textoInput)
  }



}
