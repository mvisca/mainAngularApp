import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Lex4Component } from './lex4/lex4.component';
import { Lex5Component } from './lex5/lex5.component';
import { Lex6Component } from './lex6/lex6.component';
import { Lex7Component } from './lex7/lex7.component';
import { Lex8Component } from './lex8/lex8.component';
import { Lex9Component } from './lex9/lex9.component';
import { Lex10Component } from './lex10/lex10.component';

const routes: Routes = [
    { path: 'lex4', component: Lex4Component },
    { path: 'lex5', component: Lex5Component },
    { path: 'lex6', component: Lex6Component },
    { path: 'lex7', component: Lex7Component },
    { path: 'lex8', component: Lex8Component },
    { path: 'lex9', component: Lex9Component },
    { path: 'lex10', component: Lex10Component }
];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class Grupo4al10RoutingModule { }
