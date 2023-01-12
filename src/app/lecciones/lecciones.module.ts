import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeccionesRoutingModule } from './lecciones-routing.module';

import { Lex1Component } from './lex1/lex1.component';
import { Lex2Component } from './lex2/lex2.component';
import { Lex1313Component } from './lex1313/lex1313.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    Lex1Component,
    Lex2Component,
    Lex1313Component,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LeccionesRoutingModule
  ]
})
export class LeccionesModule { }
