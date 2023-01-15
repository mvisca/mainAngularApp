import { Component } from '@angular/core';

import { Lex1313Service as MapService } from 'src/app/services/services-index';


@Component({
    selector: 'app-lex1313',
    templateUrl: './lex1313.component.html',
    styles: []
})
export class Lex1313Component {
        
    constructor( private mapService: MapService ) {}

    get isUserLocationReady(): boolean{
        return this.mapService.isUserLocationReady;
    }
    
}