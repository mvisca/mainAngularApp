import { Injectable } from '@angular/core';
import { Map, Marker, Popup } from 'mapbox-gl';
import { Feature } from '../lecciones/interfaces/lex1313.interfaces';

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
        
        const randPitch = 
        
        map?.flyTo({
            center: coords,
            zoom: this.randZoom,
            duration: 2800,
            bearing: this.randBearing,
            pitch: this.randPitch
        })
    }
    
    get randPitch() {
        const pitch:number[] = [57, 58.5, 60, 61.5, 63];
        const i = Math.floor(Math.random() * pitch.length);
        return pitch[i];
    }
    
    get randBearing() {
        const bearing:number[] = [335, 337.5, 340, 342.5, 345];
        const i = Math.floor(Math.random() * bearing.length);
        return bearing[i];
    }
    
    get randZoom() {
        const zoom:number[] = [14.5, 14.75, 15, 15.25, 15.5];
        const i = Math.floor(Math.random() * zoom.length);
        return zoom[i];
    }
    


}