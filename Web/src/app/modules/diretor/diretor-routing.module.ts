import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DiretorListComponent} from "./pages/diretor-list/diretor-list.component";

const routes: Routes = [
    {path: '', component: DiretorListComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DiretorRoutingModule {
}
