import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'materialize-css/dist/js/materialize.js'

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


 document.documentElement.style.setProperty('overflow', 'auto')
 const metaViewport = document.querySelector('meta[name=viewport]')
 metaViewport.setAttribute('content', 'height=' + 'px, width=device-width, initial-scale=1.0')