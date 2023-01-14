import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styles: [`
    .loading-map {
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        height: 100vh;
        width: 100vw;
        position: fixed;
        right: 0pc;
        top: 0px;
    }
  `]
})
export class LoadingComponent {

}
