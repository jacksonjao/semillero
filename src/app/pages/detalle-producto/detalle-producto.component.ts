import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as M from 'src/assets/js/materialize.js';
import { Producto } from '../../models/product';
import { FormBuilder } from '@angular/forms';
import { Venta } from '../../models/vender';
import { AppService } from '../../app.service';
import {Router, ActivatedRoute } from '@angular/router';
import { Precio } from '../../models/precio';
import { debug } from 'util';
@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  @ViewChild('ModalEditarProducto') modalEditarRef: ElementRef;
  @ViewChild('ModalVenderProducto') modalVenderRef: ElementRef;
  modalEditar: any;
  modalVender: any;
  producto: Producto;
  imagen: string;
  formEditarProducto: any;
  formVenderProducto: any;
  venta: Venta;
  idProducto: any;
  constructor(private formBuilder: FormBuilder, private service: AppService, private activatedRoute: ActivatedRoute, private router: Router) {
     this.initData();
    this.formEditarProducto = this.formBuilder.group({
      nombreProducto: '',
      descripcionProducto: '',
      imagen: '',
      precio: 0
    });

    this.formVenderProducto = this.formBuilder.group({
      cedulaCliente: '',
      fechaCompraPedido: '',
    });

  }

  initData() {
    this.producto = {
      idProducto: 0,
      nombreProducto: 'producto: ' + 0,
      imagen: 'https://picsum.photos/200/300/?image=' + 0,
      descripcionProducto: 'descripción' + 0,
      precio: 0
    };

    this.imagen = this.producto.imagen;

    this.venta = {
      idPedido: 0,
      cedulaCliente: '',
      idProducto: this.producto.idProducto,
      fechaCompraPedido: '',
      detallePedido: this.producto.descripcionProducto
    };
  }

  ngOnInit() {
    this.modalEditar = M.Modal.init(this.modalEditarRef.nativeElement, {});
    this.modalVender = M.Modal.init(this.modalVenderRef.nativeElement, {});
    this.idProducto = (this.activatedRoute.params as any).value.id;
    this.getProducto();
  }

  getProducto() {
    this.service.getProductoById(this.idProducto).subscribe((data: any) => {
      console.log(data);
      this.producto = data;
      this.venta.idProducto = this.idProducto;
      Object.keys(this.formEditarProducto.value).forEach(key => {
        this.formEditarProducto.get(key).setValue(this.producto[key]);
      });

    });
  }

  guardar() {
  
    this.service.updateProducto({ ...this.formEditarProducto.value, idProducto: this.idProducto}).subscribe(response => {
      window.alert('Se actualizó correctamente');
      this.getProducto();
    },
      error => { window.alert('Ha ocurrido un error al actualizar, revise la consola'), console.log(error); });
  }

  vender() {
    if (this.venta.cedulaCliente !== '' && this.venta.fechaCompraPedido !== '') {
      console.log(this.venta);
      this.service.createPedido(this.venta).subscribe(response => {
        window.alert('Se registró la venta');
      });
    } else {
      alert("Campos Vacios");
    }

  }

  eliminar() {
    this.service.deleteProducto(this.producto).subscribe(response => {
      window.alert('Se eliminó el producto');
this.router.navigateByUrl('/');
    });
  }

  abrirModalEditar() {
    this.modalEditar.open();
  }
  abrirModalVender() {
    this.modalVender.open();
  }
}
