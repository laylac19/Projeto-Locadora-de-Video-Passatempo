import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClasseRoutingModule} from './classe-routing.module';
import {ClasseComponent} from "./pages/classe/classe.component";
import {SharedModule} from "../../shared/shared.module";
import {ClasseListComponent} from './pages/classe-list/classe-list.component';


@NgModule({
    declarations: [
        ClasseComponent,
        ClasseListComponent
    ],
    exports: [
        ClasseListComponent
    ],
    imports: [
        CommonModule,
        ClasseRoutingModule,
        SharedModule
    ]
})
export class ClasseModule {
}
