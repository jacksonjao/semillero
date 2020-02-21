import {ListaProductosComponent} from './pages/lista-productos/lista-productos.component';
import {RouterModule, Routes} from '@angular/router';
import {DetalleProductoComponent} from './pages/detalle-producto/detalle-producto.component';
import {ListaClientesComponent} from './pages/lista-clientes/lista-clientes.component';
import {ListadoPreciosComponent} from './pages/listado-precios/listado-precios.component';
import {ReporteComponent} from './pages/reporte/reporte.component';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'productos', pathMatch: 'full'},
  {path: 'productos', component: ListaProductosComponent},
  {path: 'producto/:id', component:  DetalleProductoComponent},
  {path: 'clientes', component:  ListaClientesComponent},
  {path: 'precios', component:  ListadoPreciosComponent},
  {path: 'reporte', component:  ReporteComponent},
  { path: '**',  redirectTo: 'login', pathMatch: 'full' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
