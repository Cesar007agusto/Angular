import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmergenteService {

  constructor() { }

  showmessage(mensage:String,value:number){
    
    alert(`${mensage} ${value}`);
    

  }
    

}
