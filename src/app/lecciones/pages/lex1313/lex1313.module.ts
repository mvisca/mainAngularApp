import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lex1313Component } from './components/section-home/lex1313.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MapViewComponent } from './components/map-view/map-view.component';


// TO-DO:agregar los compoenentes 
@NgModule({
  declarations: [ 
    Lex1313Component,
    LoadingComponent,
    MapViewComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    Lex1313Component
  ],
})
export class Lex1313Module { }
