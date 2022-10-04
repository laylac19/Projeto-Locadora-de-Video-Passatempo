import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TituloRoutingModule } from './titulo-routing.module';
import { TituloComponent } from './pages/titulo/titulo.component';
import { TituloListComponent } from './pages/titulo-list/titulo-list.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    declarations: [
        TituloComponent,
        TituloListComponent
    ],
    exports: [
        TituloListComponent
    ],
    imports: [
        CommonModule,
        TituloRoutingModule,
        SharedModule
    ]
})
export class TituloModule { }
