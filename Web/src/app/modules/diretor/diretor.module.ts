import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DiretorRoutingModule} from './diretor-routing.module';
import {DiretorComponent} from './pages/diretor/diretor.component';
import {DiretorListComponent} from './pages/diretor-list/diretor-list.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    declarations: [
        DiretorComponent,
        DiretorListComponent
    ],
    exports: [
        DiretorListComponent
    ],
    imports: [
        CommonModule,
        DiretorRoutingModule,
        SharedModule
    ]
})
export class DiretorModule {
}
