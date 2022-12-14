import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListagemTitulosComponent} from "./pages/listagem-titulos/listagem-titulos.component";

const routes: Routes = [
    {path: '', component: ListagemTitulosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListagemTitulosRoutingModule { }
