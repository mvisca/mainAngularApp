import { Component } from '@angular/core';

import { Lex1313Service } from 'src/app/services/lex1313.service';


@Component({
    selector: 'app-lex1313',
    templateUrl: './lex1313.component.html',
    styles: []
})
export class Lex1313Component {
        
    constructor( private lex1313Service: Lex1313Service ) {}

    get isUserLocationReady() {
        return this.lex1313Service.isUserLocationReady;
    }
    
}