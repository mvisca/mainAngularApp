import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lex1313Component } from './components/lex1313/lex1313.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LogoComponent } from './components/logo/logo.component';
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';


// TO-DO:agregar los compoenentes 
@NgModule({
  declarations: [ 
    Lex1313Component,
    LoadingComponent,
    MapViewComponent,
    LogoComponent,
    FloatingButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    Lex1313Component
  ],
})
export class Lex1313Module { }
