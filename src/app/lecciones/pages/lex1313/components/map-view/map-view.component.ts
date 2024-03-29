import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import mapbox from 'mapbox-gl';

import { environment } from 'src/environments/environment';
import { Lex1313Service, MapService } from 'src/app/services/services-index';

// RrlG4GMC4C1Vdj>
@Component({
    selector: 'app-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.css'] 
    
})
export class MapViewComponent implements AfterViewInit {
    
    // Target the #mapDiv element in the template to bind it to the map elemento
    @ViewChild('mapDiv') mapDivElement!: ElementRef;
    
    // Initializes the class var where the user location will be stores
    userLocation!: [number, number];
    
    // Injects services for the current lesson
    constructor( private lex1313Service: Lex1313Service,
                 private mapService: MapService ) { }
        
        
        
    // Lifecycle
    
    ngAfterViewInit(): void {
        
        // Read access token from the enviroment variables 
        // TO-DO - Implement .env // DOTENV
        mapbox.accessToken = environment.mapbox.accessToken;
        
        // Null check via IF commented, doing it now via "as TYPE"
        // if ( this.lex1313Service.userLocation ) {
        
        // (For educational purpose) Selects the div to display the map using querySelector and a class
        // const element = document.querySelector('.map-container')  as HTMLElement; // this.mapDivElement.nativeElement;
        
        
        const ul = this.lex1313Service.userLocation as [number, number];  //this replaces IF ( VALUE ) { // CODE }
        
        
        
        // Container key recives the ViewChild reference to div element used as Mapbox map container.
        const map = new mapbox.Map({
            container: this.mapDivElement.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: ul,
            zoom: 12,
            bearing: 340,   
            pitch: 65,
        });

        // Adds full screen feature to map and binds it to map
        map.addControl(new mapbox.FullscreenControl());
        
        // Instantiates popup
        const popup = new mapbox.Popup({
            closeButton: true,
            closeOnClick: true,
            closeOnMove: false,
            offset: 50,
            anchor: 'bottom',
            className: 'popup-class',
        })
        .setLngLat( ul )
        .setHTML(`
        <div class=container
            style="background-color: pink">
            <h1>
                Hello world!
            </h1>
            <h6>
                Estas en ${ ul }
            </h6>
        </div>
        `)
        .addTo(map);
        
        // Instantiates marker at user location
        const marker = new mapbox.Marker({
            draggable: true                    
        })
        .setLngLat( ul )
        .setPopup(popup)                
        .addTo(map)
        .togglePopup(); 
        
        popup.on('close', () => {
            console.log('pop close');
        })
        
        this.mapService.setMap(map);
    }
    
}
    