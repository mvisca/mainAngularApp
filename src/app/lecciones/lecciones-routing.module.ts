import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { Lex1Component } from './pages/lex1/lex1.component';
import { Lex2Component } from './pages/lex2/lex2.component';
import { Lex4Component } from './pages/grupo4al10/lex4/lex4.component';
import { Lex10Component } from './pages/grupo4al10/lex10/lex10.component';
import { Lex1313Component } from './pages/lex1313/components/section-home/lex1313.component';



const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '' },
    { path: 'lex1', component: Lex1Component },
    { path: 'lex2', component: Lex2Component },
    { path: 'lex4', component: Lex4Component },
    { path: 'lex10', component: Lex10Component },
    { path: 'lex1313', component: Lex1313Component },
    { 
        path: '', 
        loadChildren: () => import('./pages/grupo4al10/grupo4al10.module').then(m => m.Grupo4al10Module)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeccionesRoutingModule { }
