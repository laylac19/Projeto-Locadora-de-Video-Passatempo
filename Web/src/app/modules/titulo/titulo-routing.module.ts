import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TituloListComponent} from "./pages/titulo-list/titulo-list.component";

const routes: Routes = [
    {path: '', component: TituloListComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TituloRoutingModule {
}
