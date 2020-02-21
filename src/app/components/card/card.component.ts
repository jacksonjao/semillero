import {Component, Input, OnInit} from '@angular/core';
import {Producto} from '../../models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() producto: Producto;
  constructor() { }

  ngOnInit() {
  }

}
