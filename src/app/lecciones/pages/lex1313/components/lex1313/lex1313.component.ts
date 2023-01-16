import { Component } from '@angular/core';

import { Lex1313Service } from 'src/app/services/services-index';


@Component({
    selector: 'app-lex1313',
    templateUrl: './lex1313.component.html',
    styleUrls: ['../map-view/map-view.component.css']
})
export class Lex1313Component {
    
    constructor( private lex1313Service: Lex1313Service ) {}
    
    get isUserLocationReady(): boolean{
        return this.lex1313Service.isUserLocationReady;
    }
    
}