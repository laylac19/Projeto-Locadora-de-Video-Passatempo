import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './pages/app/app.component';
import {TopbarComponent} from './components/topbar/topbar.component';
import {SidemenuComponent} from './components/sidemenu/sidemenu.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuModule} from 'primeng/menu';
import {ControleAcervoComponent} from './pages/controle-acervo/pages/controle-acervo.component';
import {ScrollPanelModule} from "primeng/scrollpanel";
import {AtorModule} from "./modules/ator/ator.module";
import {DiretorModule} from "./modules/diretor/diretor.module";
import {ClasseModule} from "./modules/classe/classe.module";
import {ConfirmationService} from "primeng/api";
import { MenuControleAcervoComponent } from './components/menu-controle-acervo/menu-controle-acervo.component';

@NgModule({
    declarations: [
        AppComponent,
        TopbarComponent,
        SidemenuComponent,
        ControleAcervoComponent,
        MenuControleAcervoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        BrowserAnimationsModule,
        PanelMenuModule,
        MenuModule,
        AtorModule,
        ClasseModule,
        DiretorModule,
        ScrollPanelModule
    ],
    providers: [
        ConfirmationService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
