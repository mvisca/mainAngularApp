import { Component, OnInit } from '@angular/core';
import { Marker } from 'mapbox-gl';
import { Feature } from 'src/app/lecciones/interfaces/lex1313.interfaces';
import { Lex1313Service } from 'src/app/services/lex1313.service';
import { MapService } from 'src/app/services/map.service';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
    
    public selectedId: string = '';
    public searchMarker?: Marker;
    
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
    
    flyTo( place: Feature ) {
        this.searchMarker?.remove();
        this.selectedId = place.id;
//        this.createMarker(place);
        this.mapService.flyTo( place.center );
    }
    
    createMarker( place: Feature ): void {
        this.searchMarker = new Marker({ color: '#902020' })
            .setLngLat( place.center )
            .addTo( this.mapService.commonMap! );
    }
}
