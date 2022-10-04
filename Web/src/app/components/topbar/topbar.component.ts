import {Component, Input} from '@angular/core';
import {OpcaoMenuModel} from "../../shared/models/opcao-menu.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

    @Input() public opcoes: OpcaoMenuModel[] = [
        new OpcaoMenuModel('pi pi-server', 'Controle de Acervo', 'Controle de Acervo',
            () => this.router.navigateByUrl('/ca')),
        new OpcaoMenuModel('pi pi-users', 'Atendimento Ao Cliente', 'Atendimento Ao Cliente',
            () => window.alert('Pagina Atentimento ao Cliente!!!')),
    ];

    constructor(
        private router: Router
    ) {
    }

    public navegarParaUrl(): void {
        this.router.navigateByUrl('ca');
    }


    ngOnInit() {
    }
}
