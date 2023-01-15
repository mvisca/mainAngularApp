import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { config } from 'dotenv';

import { AppModule } from './app/app.module';

// From dotenv
// config();
// if (process.env['NODE_ENV'] === 'production' ) {
//     enableProdMode();
// }
// if (process.env['MAPBOX_KEY']) {
//   mapboxgl.accessToken = process.env['MAPBOX_KEY'];
// } else {
//   console.error("No MAPBOX_TOKEN found in environment variables, please check your .env file.");
// }


if ( !navigator.geolocation ) {
    alert('Navegador sin geolocalización');
    throw new Error('No geolocation available in browser.');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
