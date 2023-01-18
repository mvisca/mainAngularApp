import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Feature, PlacesResponse } from '../lecciones/interfaces/lex1313.interfaces';
import { SearchApiClient } from '../lecciones/pages/lex1313/api';



@Injectable({
    providedIn: 'root'
})
export class Lex1313Service {
    
    
    // required to serve the map. userLocation is used to store the navigator geolocation
    public userLocation?: [number, number];

    get isUserLocationReady(): boolean {
        return !!this.userLocation;
    }
    
    
    
    // Env access token
    get mapboxToken() { 
        return environment.mapbox.accessToken
    }
    
    // Search feature vars
    public isLoadingPlaces: boolean = false;
    public places: Feature[] = [];
    
    
    
    constructor( private searchApiClient: SearchApiClient ) {
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
    
    
    
    // Search api http request get
        getPlacesByQuery( query: string) {
        
            if ( !this.userLocation )
                { throw new Error ('No hay user location') };
            
            const params = new HttpParams()
                .set('limit', 5)
                .set('language', 'es')
                .set('access_token', environment.mapbox.accessToken)
                .set('proximity', this.userLocation.join(',') );
                
            this.searchApiClient.get<PlacesResponse>( `/${ query }.json`, { params })
        
                .subscribe( resp =>  {
                    console.log(resp.features);
                    console.log('formed string  ' +`${ query }.json`);
                    this.isLoadingPlaces = false;
                    this.places = resp.features;
                });
        }

    
}

// OK
// https://api.mapbox.com/geocoding/v5/mapbox.places/cafe%20virreina.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1IjoibWFydGludmlzY2EiLCJhIjoiY2xiejRlaG00MHdldzN4bzVtZm5xYjhzbSJ9.Wa6UHlb2fr5ZyzHckYWmlg

// FAIL
// https://api.mapbox.com/geocoding/v5/mapbox.placeshttps://api.mapbox.com/geocoding/v5/mapbox.placessalambo.json?limit=5&language=es&access_token=pk.eyJ1IjoibWFydGludmlzY2EiLCJhIjoiY2xiejRlaG00MHdldzN4bzVtZm5xYjhzbSJ9.Wa6UHlb2fr5ZyzHckYWmlg&proximity=2.1586575,41.4067775