import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentCComponent } from './parent/parent-c/parent-c.component';
import { ChildCComponent } from './child/child-c/child-c.component';
import { FormsModule } from '@angular/forms';
import { ServicioEmergenteService } from './servicios/servicio-emergente.service';
import { DataServiceService } from './servicios/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentCComponent,
    ChildCComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ServicioEmergenteService,DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
