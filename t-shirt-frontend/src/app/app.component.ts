import { Component, OnInit } from '@angular/core';
import { AuthServices } from './shared/layouts/servises/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private auth:AuthServices) {}

  ngOnInit() {
    const correntToken = localStorage.getItem('auth-token')
    if (correntToken !== null) {
      this.auth.setToken(correntToken)
    }

//     document.documentElement.style.setProperty('overflow', 'auto')
//  const metaViewport = document.querySelector(‘meta[name=viewport]’)
//  metaViewport.setAttribute('content', 'height=' + initialHeight + 'px, width=device-width, initial-scale=1.0')
  }
}
