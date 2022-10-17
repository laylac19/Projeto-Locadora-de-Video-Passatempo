import {Component, Input} from '@angular/core';
import {SidemenuModel} from "../shared/models/sidemenu.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @Input() public aplicarNovaRota?: string;

    public configuracaoMenuLateral: SidemenuModel = new SidemenuModel();
    public casoUso: string = 'Controle';
}
