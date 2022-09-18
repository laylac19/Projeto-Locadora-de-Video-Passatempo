import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ControleAcervoComponent} from "./pages/controle-acervo.component";

const routes: Routes = [
    {path: '', component: ControleAcervoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControleAcervoRoutingModule { }
