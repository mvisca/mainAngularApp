import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lex4Component } from './lex4/lex4.component';
import { Lex5Component } from './lex5/lex5.component';
import { Lex6Component } from './lex6/lex6.component';
import { Lex7Component } from './lex7/lex7.component';
import { Lex8Component } from './lex8/lex8.component';
import { Lex9Component } from './lex9/lex9.component';
import { Lex10Component } from './lex10/lex10.component';


@NgModule({
    declarations: [
        Lex4Component,
        Lex5Component,
        Lex6Component,
        Lex7Component,
        Lex8Component,
        Lex9Component,
        Lex10Component
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        Lex4Component,
        Lex5Component,
        Lex6Component,
        Lex7Component,
        Lex8Component,
        Lex9Component,
        Lex10Component
    ]
    
})
export class Grupo4al10Module { }
