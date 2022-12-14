import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListagemTitulosRoutingModule } from './listagem-titulos-routing.module';
import { ListagemTitulosComponent } from './pages/listagem-titulos/listagem-titulos.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    declarations: [
        ListagemTitulosComponent
    ],
    exports: [
        ListagemTitulosComponent
    ],
    imports: [
        CommonModule,
        ListagemTitulosRoutingModule,
        SharedModule
    ]
})
export class ListagemTitulosModule { }
