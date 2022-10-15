import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClienteRoutingModule} from './cliente-routing.module';
import {ClienteListComponent} from './pages/cliente-list/cliente-list.component';
import {SharedModule} from "../../shared/shared.module";
import {ClienteComponent} from "./pages/cliente/cliente.component";

@NgModule({
    declarations: [
        ClienteComponent,
        ClienteListComponent,
    ],
    imports: [
        CommonModule,
        ClienteRoutingModule,
        SharedModule
    ]
})
export class ClienteModule {
}
