import { Injectable } from '@angular/core';
import mapbox, { Map } from 'mapbox-gl';

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
}
