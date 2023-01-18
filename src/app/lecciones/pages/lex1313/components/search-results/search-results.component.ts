import { Component, OnInit } from '@angular/core';
import { Lex1313Service } from 'src/app/services/lex1313.service';
import { MapService } from 'src/app/services/map.service';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
    
    
    
    get isLoadingPlaces() { 
        return this.lex1313Service.isLoadingPlaces;
    }
    
    get places() {
        return this.lex1313Service.places;
    }
    
    constructor( private lex1313Service: Lex1313Service,
                 private mapService: MapService ) { }
    
    
    ngOnInit(): void {
    }
    
    flyTo( place: any ) {
        console.log(this.places, 'PLACE');
        
        this.mapService.flyTo( place.center );
    }
}
