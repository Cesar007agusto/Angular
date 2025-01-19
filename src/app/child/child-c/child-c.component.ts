import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataServiceService } from 'src/app/servicios/data-service.service';



@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrls: ['./child-c.component.css']
})
export class ChildCComponent {

  @Input() mensaje: string = ""; //parent to child
  @Output() propiedadEnelHijo = new EventEmitter<number>();//child to parent

  constructor(private miDato:DataServiceService){}

  onClick(valor: string) {
    this.miDato.alert(valor);
    const numero = Number(valor);
    this.propiedadEnelHijo.emit(numero);
  }










}
