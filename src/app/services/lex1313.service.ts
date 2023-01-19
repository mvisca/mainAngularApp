import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LngLatBounds, Marker, Popup } from 'mapbox-gl';

import { environment } from 'src/environments/environment';
import { Feature, PlacesResponse } from '../lecciones/interfaces/lex1313.interfaces';
import { SearchApiClient } from '../lecciones/pages/lex1313/api';
import { MapService } from './map.service';



@Injectable({
    providedIn: 'root'
})
export class Lex1313Service {
    
    private markers: Marker[] = [];
    
    // required to serve the map. userLocation is used to store the navigator geolocation
    public userLocation?: [number, number];

    get isUserLocationReady(): boolean {
        return !!this.userLocation;
    }
    
    // Env access token
    get mapboxToken() { 
        return environment.mapbox.accessToken
    }
    
    // Search vars
    public isLoadingPlaces: boolean = false;
    public places: Feature[] = [];
    
    
    
    constructor( private searchApiClient: SearchApiClient,
                 private mapService: MapService ) {
        this.getUserLocation();
    }
    
    
    // Required to build map. Get user location.
    getUserLocation(): Promise<[ number, number]> {
        
        return new Promise( ( resolve, reject ) => {

            navigator.geolocation.getCurrentPosition(
                ({ coords }) => {
                    this.userLocation = [ coords.longitude, coords.latitude ];
                    resolve( this.userLocation );
                },
                ( err ) => {
                    console.log('error en getUserLocation');
                    alert('error en getUserLocation');
                    reject( err );
                }
            )
        });
    }
    
    

    
    newMarkersForPlaces( places: Feature[] ) {
        if (!this.mapService.commonMap) { throw Error('Mapa no inicializado')};
        
        this.markers.forEach( marker => marker.remove() );
        const newMarkers: Marker[] = [];
        
        for (const place of places) {
            const [ lng, lat ] = place.center;
            const popup = new Popup()
                .setHTML(`
                    <h6>${ place.text }</h6>
                    <span>${ place.place_name }</span>
                `);
            const marker = new Marker()
                .setLngLat([ lng, lat])
                .setPopup(popup)
                .addTo( this.mapService.commonMap ); 
                
            newMarkers.push( marker );
        }
        
        this.markers = newMarkers;
        
        // Limites del mapa
        if ( this.markers.length > 0 ) {
    
            const bounds = new LngLatBounds()
            this.markers.forEach( m => {
                bounds.extend( m.getLngLat() )
            })  
            this.mapService.commonMap.fitBounds( bounds);
        } 
    }
    
    // Search api http request get
        getPlacesByQuery( query: string) {
        
            if ( !this.userLocation )
                { throw new Error ('No hay user location') };
            
            const params = new HttpParams()
                .set('limit', 5)
                .set('language', 'es')
                .set('access_token', environment.mapbox.accessToken )
                .set('proximity', this.userLocation.join(',') );
                
            this.searchApiClient.get<PlacesResponse>( `/${ query }.json`, { params })
        
                .subscribe( resp =>  {

                    this.isLoadingPlaces = false;
                    this.places = resp.features;
                    
                    this.newMarkersForPlaces( this.places ) 
                });
        }
}