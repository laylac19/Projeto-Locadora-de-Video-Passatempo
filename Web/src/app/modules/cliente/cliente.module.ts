import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClienteRoutingModule} from './cliente-routing.module';
import {ClienteComponent} from './pages/cliente/cliente.component';
import {ClienteListComponent} from './pages/cliente-list/cliente-list.component';


@NgModule({
    declarations: [
        ClienteComponent,
        ClienteListComponent
    ],
    imports: [
        CommonModule,
        ClienteRoutingModule
    ]
})
export class ClienteModule {
}
