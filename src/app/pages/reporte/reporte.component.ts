import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
 reporte: any;
  constructor(private service: AppService) {

  }

  ngOnInit() {
    this.service.getReporte()
  }

}
