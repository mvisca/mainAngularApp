import { Component, OnInit } from '@angular/core';
import { Lex1313Service as mapService } from 'src/app/services/services-index';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styles: [
  ]
})
export class MapViewComponent implements OnInit {

  constructor( private mapService: mapService ) { }

  ngOnInit(): void {
    console.log( this.mapService.userLocation );
    
  }

}
