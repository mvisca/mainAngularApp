import { Component, OnInit } from '@angular/core';
import { Lex1313Service } from '../../../../../services/lex1313.service';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styles: [
  ]
})
export class MapViewComponent implements OnInit {

  constructor( private lex1313Service: Lex1313Service ) { }

  ngOnInit(): void {
    console.log( this.lex1313Service.userLocation );
  }

}
