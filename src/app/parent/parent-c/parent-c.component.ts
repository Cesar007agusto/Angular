import { Component } from '@angular/core';
import { ServicioEmergenteService } from 'src/app/servicios/servicio-emergente.service';
import { DataServiceService } from 'src/app/servicios/data-service.service';

@Component({
  selector: 'app-parent-c',
  templateUrl: './parent-c.component.html',
  styleUrls: ['./parent-c.component.css']
})
export class ParentCComponent {

  
  //@Input
  textoParaHijo:string = " ";  // Mensaje para pasar al hijo

  procesarTexto(texto:string){
   // this.miServicio.showmessage(texto,1);
    this.miDato.alert(texto);
    this.textoParaHijo=texto;
    
  }

  //@Output
  receivedMessage: number=0;  // Variable para almacenar el mensaje recibido

  manejoMensaje(event: number) {
    //this.miServicio.showmessage("Data From child-> ",event);
    this.receivedMessage = event;  // Guardar el mensaje recibido en la variable
  }

  constructor(
    //private miServicio:ServicioEmergenteService,
    private miDato:DataServiceService
  ){

  }

  ShowDataFromService(){
    
    this.textoParaHijo=this.miDato.nombre
  }
  
}
