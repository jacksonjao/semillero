import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import {RouterModule} from '@angular/router';
import {APP_ROUTING} from './app.router';
import {HeaderComponent} from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';
import { ListadoPreciosComponent } from './pages/listado-precios/listado-precios.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
import {AppService} from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    CardComponent,
    DetalleProductoComponent,
    HeaderComponent,
    ListaClientesComponent,
    ListadoPreciosComponent,
    ReporteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
