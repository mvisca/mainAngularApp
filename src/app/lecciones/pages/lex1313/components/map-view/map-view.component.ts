import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import mapbox from 'mapbox-gl';

import { Lex1313Service as MapService } from 'src/app/services/services-index';
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-map-view',
    templateUrl: './map-view.component.html',
    styles: [`
    
    body, html {
        height: 100%;
        width: 100%;    
    } 
    
    #map {
        height: 100%;
        width: 100%;
    }
    
    .map-container {
        background-color: blue;
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
    }
    `]
})
export class MapViewComponent implements AfterViewInit {
    
    @ViewChild('mapDiv')
    mapDivElement!: ElementRef
    
    constructor( private mapService: MapService ) { }
    
    ngAfterViewInit(): void {
        
        mapbox.accessToken = environment.mapbox.accessToken;
        // TO-DO: probar sin el any
        
        console.log( 'Map View Cpnt', this.mapService.userLocation );
        if ( this.mapService.userLocation ) {
            
            
            const map = new mapbox.Map({
                // container: this.mapDivElement.nativeElement,
                container: 'map', // mediante un <div id='map'>
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                // TO-DO Probar con nombre del elemento
                center: this.mapService.userLocation,
                zoom: 12
            })
        }
    }

    
}
