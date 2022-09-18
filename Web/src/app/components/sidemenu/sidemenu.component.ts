import {Component, Input} from '@angular/core';
import {OpcaoMenuModel} from 'src/app/shared/models/opcao-menu.model';
import {SidemenuModel} from 'src/app/shared/models/sidemenu.model';
import {Router} from "@angular/router";

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {
    @Input() public configuracaoMenuLateral?: SidemenuModel;
    @Input() public opcoes: OpcaoMenuModel[] = [
        new OpcaoMenuModel('pi pi-home', 'Início', 'Início',
            () => this.router.navigateByUrl('')),
        new OpcaoMenuModel('pi pi-server', 'Controle de Acervo', 'Controle de Acervo',
            () => this.router.navigateByUrl('/ca')),
        new OpcaoMenuModel('pi pi-users', 'Atendimento Ao Cliente', 'Atendimento Ao Cliente',
            () => window.alert('Pagina Atentimento ao Cliente!!!')),
    ];

    constructor(
        private router: Router
    ) {
    }

    public estaVisivel(): boolean {
        if (this.configuracaoMenuLateral) {
            return this.configuracaoMenuLateral.visivel;
        }
        return false;
    }
}
