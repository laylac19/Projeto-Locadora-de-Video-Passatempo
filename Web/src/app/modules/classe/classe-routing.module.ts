import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClasseListComponent} from "./pages/classe-list/classe-list.component";

const routes: Routes = [
    {path: '', component: ClasseListComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClasseRoutingModule {
}
