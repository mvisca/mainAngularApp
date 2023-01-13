import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeccionesRoutingModule } from './lecciones-routing.module';

import { Grupo4al10Module } from './pages/grupo4al10/grupo4al10.module';
import { Lex1313Module } from './pages/lex1313/lex1313.module';

import { HomeComponent } from './pages/home/home.component';
import { Lex1Component } from './pages/lex1/lex1.component';
import { Lex2Component } from './pages/lex2/lex2.component';


@NgModule({
    declarations: [
        Lex1Component,
        Lex2Component,
        HomeComponent
    ],
    imports: [
        CommonModule,
        LeccionesRoutingModule,
        Grupo4al10Module,
        Lex1313Module
    ]
})
export class LeccionesModule { }
