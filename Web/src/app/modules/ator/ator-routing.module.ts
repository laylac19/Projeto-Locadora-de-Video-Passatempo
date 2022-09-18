import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AtorListComponent} from "./pages/ator-list/ator-list.component";

const routes: Routes = [
    {path: '', component: AtorListComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AtorRoutingModule {
}
