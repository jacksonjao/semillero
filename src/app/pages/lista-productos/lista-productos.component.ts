import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Producto} from '../../models/product';
import {FormBuilder} from '@angular/forms';
import * as M from '../../../assets/js/materialize';
import {AppService} from '../../app.service';
import {Precio} from '../../models/precio';

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

  constructor(private formBuilder: FormBuilder,  private service: AppService) {
    this.productos.push({
      idProducto: 0,
      nombreProducto: '',
      imagen: '',
      descripcionProducto: '',
      valor: 0,
    });


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
    console.log(input.value);
    console.log(this.formEditarProducto.value);
    this.service.createProducto(this.formEditarProducto.value).subscribe((response: Producto) => {
      const precio: Precio = {
        idPrecio: response.idProducto,
        valor: input.value
      };
      this.service.createPrecios(precio).subscribe(response2 => {
        window.alert('Se creó el producto');
        this.getProductos();
      });
    });

  }
}
