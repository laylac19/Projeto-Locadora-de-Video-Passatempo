import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ControleAcervoRoutingModule} from './controle-acervo-routing.module';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ControleAcervoRoutingModule,
        SharedModule
    ]
})
export class ControleAcervoModule {
}
