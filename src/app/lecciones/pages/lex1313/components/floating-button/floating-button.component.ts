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
        
        flyTo() {
            console.log('flyTo my location');
            const map = this.mapService.commonMap as Map;
            const ul = this.lex1313Service.userLocation as [number, number];
            
            map?.flyTo({
                center: ul,
                zoom: 12,
                duration: 2000,
                bearing: 340,
                pitch: 65
            })
                
        }
    }