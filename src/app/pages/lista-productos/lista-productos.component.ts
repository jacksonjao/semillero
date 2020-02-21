import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as M from '../../../assets/js/materialize';
import { AppService } from '../../app.service';
import { Precio } from '../../models/precio';
import { Producto } from '../../models/product';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: Producto[] = [];
  formEditarProducto: any;
  imagen: string;
  modalEditar: any;
  @ViewChild('ModalEditarProducto') modalEditarRef: ElementRef;

  constructor(private formBuilder: FormBuilder, private service: AppService) {

    this.formEditarProducto = this.formBuilder.group({
      nombreProducto: '',
      descripcionProducto: '',
      imagen: ''
    });
  }

  ngOnInit() {
    this.modalEditar = M.Modal.init(this.modalEditarRef.nativeElement, {});
    this.getProductos();
  }

  getProductos() {
    this.service.getProductos().subscribe((response: Producto[]) => {
      this.productos = response;
    });
  }


  guardar(input: HTMLInputElement) {
    if (this.formEditarProducto.value.nombreProducto !== '' && this.formEditarProducto.value.descripcionProducto !== '') { }
    {
    this.service.createProducto(this.formEditarProducto.value).subscribe((response: Producto) => {
      const precio: Precio = {
        idPrecio: response.idProducto,
        valor: input.value
      };
      window.alert('Se creó el producto');
      this.getProductos();
      this.service.createPrecios(precio).subscribe(response2 => {
        this.getProductos();
      });
    });
  }
  }
}
