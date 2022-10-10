import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ItemRoutingModule} from './item-routing.module';
import {ItemComponent} from './pages/item/item.component';
import {ItemListComponent} from './pages/item-list/item-list.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    declarations: [
        ItemComponent,
        ItemListComponent
    ],
    imports: [
        CommonModule,
        ItemRoutingModule,
        SharedModule
    ]
})
export class ItemModule {
}
