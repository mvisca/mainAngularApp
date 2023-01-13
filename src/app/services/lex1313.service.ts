import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root'
})
export class Lex1313Service {
    
    // userLocation is used to store the navigator geolocation
    public userLocation?: [number, number];

    get isUserLocationReady(): boolean {
        return !!this.userLocation;
    }
    
    constructor() {
        this.getUserLocation();
    }
    
    
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
                    throw new Error('error en getUserLocation');
                    reject();
                }
            )
        });
    }
    
    
    
}