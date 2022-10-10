import {Component, Input} from '@angular/core';
import {OpcaoMenuModel} from "../../shared/models/opcao-menu.model";
import {Router} from "@angular/router";
import {SidemenuModel} from "../../shared/models/sidemenu.model";

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

    @Input() public configuracaoMenuLateral?: SidemenuModel;

    @Input() public opcoes: OpcaoMenuModel[] = [
        new OpcaoMenuModel('pi pi-server', 'Controle de Acervo', 'Controle de Acervo',
            () => this.router.navigateByUrl('/Filmes')),
        new OpcaoMenuModel('pi pi-users', 'Atendimento Ao Cliente', 'Atendimento Ao Cliente',
            () => window.alert('Pagina Atentimento ao Cliente!!!')),
    ];

    constructor(
        private router: Router
    ) {
    }

    public alternarVisibilidadeMenuLateral(): void {
        if(this.configuracaoMenuLateral) {
            this.configuracaoMenuLateral.visivel = !this.configuracaoMenuLateral.visivel;
            this.router.navigateByUrl('/Filmes');
        }
    }
}
