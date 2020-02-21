import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Producto} from './models/product';
import {Cliente} from './models/cliente';
import {Precio} from './models/precio';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  API = environment.API;
  constructor(private httpClient: HttpClient) { }


  // Productos

  getProductos() {
    return this.httpClient.get(`${this.API}/producto/consultar`);
  }

  getProductoById(id: any) {
    return this.httpClient.get(`${this.API}/producto/consultar/${id}`);
  }

  createProducto(obj: object) {
    return this.httpClient.post(`${this.API}/producto/crear`, obj);
  }

  updateProducto(obj: object) {
    return this.httpClient.put(`${this.API}/producto/actualizar`, obj);
  }

  deleteProducto(obj: object) {
    return this.httpClient.delete(`${this.API}/producto/borrar`, obj);
  }



  // Clientes

  getClientes() {
    return this.httpClient.get(`${this.API}/cliente/consultar`);
  }

  getClienteById(id: any) {
    return this.httpClient.get(`${this.API}/cliente/consultar/${id}`);
  }

  createCliente(obj: object) {
    return this.httpClient.post(`${this.API}/cliente/crear`, obj);
  }

  updateCliente(id: any, obj: object) {
    return this.httpClient.put(`${this.API}/cliente/actualizar`, obj);
  }

  deleteCliente(obj: object) {
    return this.httpClient.delete(`${this.API}/cliente/borrar`, obj);
  }


  // Precios

  getPrecios() {
    return this.httpClient.get(`${this.API}/precios/consultar`);
  }

  getPreciosById(id: any) {
    return this.httpClient.get(`${this.API}/precios/consultar/${id}`);
  }

  createPrecios(obj: object) {
    return this.httpClient.post(`${this.API}/precios/crear`, obj);
  }

  updatePrecios(obj: object) {
    return this.httpClient.put(`${this.API}/precios/actualizar`, obj);
  }

  deletePrecios(obj: object) {
    return this.httpClient.delete(`${this.API}/precios/borrar`, obj);
  }


// Pedido

  getPedido() {
    return this.httpClient.get(`${this.API}/pedido/consultar`);
  }

  getPedidoById(id: any) {
    return this.httpClient.get(`${this.API}/pedido/consultar/${id}`);
  }

  createPedido(obj: object) {
    return this.httpClient.post(`${this.API}/pedido/crear`, obj);
  }

  updatePedido(id: any, obj: object) {
    return this.httpClient.put(`${this.API}/pedido/actualizar`, obj);
  }

  deletePedido(obj: object) {
    return this.httpClient.delete(`${this.API}/pedido/borrar`, obj);
  }


  // reporte

  getReporte(fechasInicial: string, fechasFinal: string ) {
    return this.httpClient.post(`${this.API}/pedido/consularByFechas`, [fechasInicial, fechasFinal]);
  }

}
