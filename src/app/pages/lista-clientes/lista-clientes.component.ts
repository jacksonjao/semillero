import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Cliente} from '../../models/cliente';
import {FormBuilder} from '@angular/forms';
import * as M from '../../../assets/js/materialize';
import {AppService} from '../../app.service';

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
  constructor( private formBuilder: FormBuilder,  private service: AppService) {

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

    this.getClientes();
  }

  getClientes() {
    this.service.getClientes().subscribe((clientes: Cliente[]) => {
      console.log(clientes)
      this.clientes = clientes;
    });
  }


  crear() {
    this.service.createCliente(this.formCrear.values).subscribe(result => {
      window.alert('Usuario creado satisfactoriamente');
    });
  }
  editar(input: HTMLInputElement) {
    this.service.updateCliente(this.clienteSeleccionado.cedulaCliente, {nombreCliente: input.value}).subscribe(result => {
      window.alert('Usuario creado satisfactoriamente');
    });
  }
  borrar() {
    this.service.deleteCliente(this.clienteSeleccionado).subscribe(result => {
      window.alert('Usuario creado satisfactoriamente');
    });
  }

}
