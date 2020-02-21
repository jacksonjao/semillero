import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Producto} from '../../models/product';
import {FormBuilder} from '@angular/forms';
import * as M from '../../../assets/js/materialize';
import {AppService} from '../../app.service';

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
    for (let i = 0; i < 100; i++) {
      this.productos. push({
        idProducto: i,
        nombreProducto: 'producto: ' + i,
        imagen: 'https://picsum.photos/200/300/?image=' + i,
        descripcionProducto: 'descripción' + i,
        valor: i,
      });
    }


    this.formEditarProducto = this.formBuilder.group({
      nombre: '',
      descripcion: '',
      imagen: ''
    });
  }

  ngOnInit() {
    this.modalEditar = M.Modal.init(this.modalEditarRef.nativeElement, {});

    this.service.getProductos().subscribe((response: any) => {
      this.productos = response;
    });
  }


  guardar(input: HTMLInputElement) {
    console.log(input.value);
    console.log(this.formEditarProducto.value);
  }
}
