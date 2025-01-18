import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrls: ['./child-c.component.css']
})
export class ChildCComponent {

  @Input() mensaje: string = ""; //parent to child
  @Output() propiedadEnelHijo = new EventEmitter<number>();//child to parent

  dataFromService:string="";

  onClick(valor: string) {
    const numero = Number(valor);
    this.propiedadEnelHijo.emit(numero);
  }

 
  
  






}
