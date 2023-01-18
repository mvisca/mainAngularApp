import { Component } from '@angular/core';

import { Lex1313Service } from 'src/app/services/lex1313.service';


@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {


    
    // Instancia una variable timeout
    private debounceTimer?: NodeJS.Timeout;
    


    constructor( private lex1313Service: Lex1313Service) { }

    
    
    onQueryChange(query:string = '') {
        
        // Reinica el timeout antrior
        // if ( this.debounceTimer ) clearTimeout( this.debounceTimer );
        this.debounceTimer 
            ? clearTimeout( this.debounceTimer )
            : true;
            
            
        this.debounceTimer = setTimeout(() => {
            this.lex1313Service.getPlacesByQuery(query);
        }, 250)
    }    
}
