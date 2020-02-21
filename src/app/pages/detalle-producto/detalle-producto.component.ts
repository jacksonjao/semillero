import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as M from 'src/assets/js/materialize.js';
import {Producto} from '../../models/product';
import {FormBuilder} from '@angular/forms';
import {Venta} from '../../models/vender';
import {AppService} from '../../app.service';
import {ActivatedRoute} from '@angular/router';
import {Precio} from '../../models/precio';
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
  constructor( private formBuilder: FormBuilder, private service: AppService, private router: ActivatedRoute) {
    this.initData();
    this.formEditarProducto = this.formBuilder.group({
      nombreProducto: '',
      descripcionProducto: '',
      imagen: ''
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
      valor: 0
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
    this.idProducto = (this.router.params as any).value.id;
    this.getProducto();
  }

  getProducto() {
    this.service.getProductoById(this.idProducto).subscribe((data: any) => {
      console.log(data)
      this.producto = data;
      this.service.getPreciosById(this.producto.idProducto).subscribe((precio: Precio) => {
        this.producto.valor = precio.valor;
      });
      this.venta.idProducto = this.producto.idProducto;
      this.venta.detallePedido = this.producto.descripcionProducto;
    });
  }

  guardar(input: HTMLInputElement) {
    this.service.updateProducto(this.formEditarProducto.value).subscribe(response => {
      window.alert('Se actualizó correctamente');
      this.modalEditar.close();
    },
      error => {window.alert('Ha ocurrido un error al actualizar, revise la consola'), console.log(error); });

    this.service.updatePrecios({idProducto: this.producto.idProducto, valor:  input.value});
  }

  vender() {
    this.service.createPedido(this.venta).subscribe(response => {
      window.alert('Se registró la venta');
    });
  }

  eliminar() {
    this.service.deleteCliente(this.producto).subscribe(response => {
      window.alert('Se eliminó el producto');
    });
  }

  abrirModalEditar() {
    this.modalEditar.open();
  }
  abrirModalVender() {
    this.modalVender.open();
  }
}
