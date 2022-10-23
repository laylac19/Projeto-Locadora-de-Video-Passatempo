import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClienteRoutingModule} from './cliente-routing.module';
import {SharedModule} from "../../shared/shared.module";
import { ClienteFormComponent } from './pages/cliente-form/cliente-form.component';
import { ClienteListComponent } from './pages/cliente-list/cliente-list.component';
import { SocioListComponent } from './pages/socio-list/socio-list.component';
import { DependenteListComponent } from './pages/dependente-list/dependente-list.component';
import { SocioFormComponent } from './pages/socio-form/socio-form.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
    declarations: [

    ClienteFormComponent,
         ClienteListComponent,
         SocioListComponent,
         DependenteListComponent,
         SocioFormComponent
  ],
    imports: [
        CommonModule,
        ClienteRoutingModule,
        SharedModule,
        MatSelectModule
    ]
})
export class ClienteModule {
}
