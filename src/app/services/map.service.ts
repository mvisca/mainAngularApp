import { Injectable } from '@angular/core';
import { Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

    private map?: Map;
    
    get isMapReady() {
        return !!this.map;
    }
    
    setMap( map: Map ) {
        this.map = map;
    }
    
    get commonMap() {
        return this.map;
    }
    
    flyTo( coords: [number, number] ) {
        console.log('flyTo my location from service');
        const map = this.map;
        
        map?.flyTo({
            center: coords,
            zoom: 12,
            duration: 2000,
            bearing: 340,
            pitch: 65
    })
}
}
