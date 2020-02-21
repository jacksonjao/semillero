import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Cliente} from '../../models/cliente';
import {FormBuilder} from '@angular/forms';
import * as M from '../../../assets/js/materialize';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  @ViewChild('ModalCrear') modalCrearRef: ElementRef;
  @ViewChild('ModalEditar') modalEditarRef: ElementRef;
  modalCrear: any;
  modalEditar: any;
  clientes: Cliente[] = [];
  formCrear: any;
  clienteSeleccionado: Cliente = {nombreCliente: '', cedulaCliente: ''};
  constructor( private formBuilder: FormBuilder) {

    this.formCrear = formBuilder.group({
      cedulaCliente: '',
      nombreCliente: ''
    });
  }

  ngOnInit() {

    this.modalCrear = M.Modal.init(this.modalCrearRef.nativeElement, {});
    this.modalEditar = M.Modal.init(this.modalEditarRef.nativeElement, {});

    for (let i = 0; i < 100; i++) {
      this.clientes. push( {
        cedulaCliente: 'Cédula' + i,
        nombreCliente: 'Nombre' + i
      });
    }

  }


  crear() {
  }
  editar(input: HTMLInputElement) {
  }
  borrar (id: any) {
    console.log(id);
  }

}
