import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Producto} from '../../models/product';
import {FormBuilder} from '@angular/forms';
import * as M from '../../../assets/js/materialize';

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

  constructor(private formBuilder: FormBuilder) {
    for (let i = 0; i < 100; i++) {
      this.productos. push({
        id: i,
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
  }


  guardar(input: HTMLInputElement) {
    console.log(input.value);
    console.log(this.formEditarProducto.value);
  }
}
