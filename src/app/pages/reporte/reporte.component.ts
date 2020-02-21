import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {Venta} from '../../models/vender';
import { reporte } from 'src/app/models/reporte';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
 reportes: reporte[];
  constructor(private service: AppService) {

  }

  ngOnInit() {
  }

  buscar(inputFechaInicial: HTMLInputElement, inputFechaFinal: HTMLInputElement) {
    console.log(inputFechaInicial.value+" fechas "+inputFechaFinal.value);
    this.service.getReporte(inputFechaInicial.value, inputFechaFinal.value).subscribe((response: any) => {
      this.reportes = response;
    });
  }

}
