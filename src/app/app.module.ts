import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentCComponent } from './parent/parent-c/parent-c.component';
import { ChildCComponent } from './child/child-c/child-c.component';
import { FormsModule } from '@angular/forms';
import { ServicioEmergenteService } from './servicios/servicio-emergente.service';
import { DataServiceService } from './servicios/data-service.service';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { ProyectosComponentComponent } from './ProyectosComponent/ProyectosComponent.component';
import { QuienesComponentComponent } from './QuienesComponent/QuienesComponent.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[

{path:'',component:HomecomponentComponent},
{path:'proyectos',component:ProyectosComponentComponent},
{path:'quienes',component:QuienesComponentComponent},
{path:'contact',component:ContactoComponentComponent}

];

@NgModule({
  declarations: [		
    AppComponent,
    ParentCComponent,
    ChildCComponent,
    HomecomponentComponent,
      ProyectosComponentComponent,
      QuienesComponentComponent,
      ContactoComponentComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ServicioEmergenteService,DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
