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
            () => this.router.navigateByUrl('/Filmes')),
        new OpcaoMenuModel('pi pi-server', 'Atores', 'Atores',
            () => this.router.navigateByUrl('/Atores')),
        new OpcaoMenuModel('pi pi-server', 'Classes', 'Classes',
            () => this.router.navigateByUrl('/Classes')),
        new OpcaoMenuModel('pi pi-server', 'Diretores', 'Diretores',
            () => this.router.navigateByUrl('/Diretores')),
        new OpcaoMenuModel('pi pi-server', 'Título Filmes', 'Título Filmes',
            () => this.router.navigateByUrl('/Filmes')),
        new OpcaoMenuModel('pi pi-server', 'Cadastrar Itens', 'Cadastrar Itens',
            () => this.router.navigateByUrl('/Filmes')),
        new OpcaoMenuModel('pi pi-server', 'Cadastrar Clientes', 'Cadastrar Itens',
            () => this.router.navigateByUrl('/Filmes')),
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
