import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmergenteService {

  constructor() { }

  showmessage(mensage:String){
    
    alert(`${mensage} `);
    

  }
    

}
