import { Component, OnInit } from '@angular/core';
import { Map } from 'mapbox-gl';

import { Lex1313Service } from 'src/app/services/lex1313.service';
import { MapService } from 'src/app/services/map.service';
import mapboxgl from 'mapbox-gl';

@Component({
    selector: 'app-floating-button',
    templateUrl: './floating-button.component.html',
    styleUrls: ['./floating-button.component.css']
})
export class FloatingButtonComponent implements OnInit {
    
    constructor( private lex1313Service: Lex1313Service,
        private mapService: MapService ) { }
        
        ngOnInit(): void {  
        }
    
    get coords() {
        return this.lex1313Service.userLocation;    
    }
    
    flyTo() {
        this.mapService.flyTo( this.coords as [number,number]);
    }
    
    }