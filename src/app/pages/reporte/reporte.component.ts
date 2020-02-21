import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {Venta} from '../../models/vender';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
 reporte: Venta;
  constructor(private service: AppService) {

  }

  ngOnInit() {
  }

  buscar(inputFechaInicial: HTMLInputElement, inputFechaFinal: HTMLInputElement) {
    this.service.getReporte(inputFechaInicial.value, inputFechaFinal.value).subscribe((response: any) => {
      this.reporte = response;
    });
  }

}
