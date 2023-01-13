import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lex1313Component } from './lex1313.component';
    import { LoadingComponent } from './components/loading/loading.component';
    import { MapViewComponent } from './components/map-view/map-view.component';



@NgModule({
  declarations: [ 
    Lex1313Component,
    LoadingComponent,
    MapViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ],
})
export class Lex1313Module { }
