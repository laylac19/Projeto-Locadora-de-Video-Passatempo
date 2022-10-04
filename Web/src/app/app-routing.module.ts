import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: 'filmes', loadChildren: () => import('./modules/titulo/titulo.module').then(m => m.TituloModule)},
    {path: 'ca', loadChildren: () => import('./pages/controle-acervo/controle-acervo.module').then(m => m.ControleAcervoModule)},
    {path: 'atores', loadChildren: () => import('./modules/ator/ator.module').then(m => m.AtorModule)},
    {path: 'classes', loadChildren: () => import('./modules/classe/classe.module').then(m => m.ClasseModule)},
    {path: 'diretores', loadChildren: () => import('./modules/diretor/diretor.module').then(m => m.DiretorModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
