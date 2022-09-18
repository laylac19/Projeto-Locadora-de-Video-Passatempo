import {Component, OnInit} from '@angular/core';
import {ControleAcervoEnumModel} from "../../model/controle-acervo-enum.model";

@Component({
    selector: 'app-menu-controle-acervo',
    templateUrl: './menu-controle-acervo.component.html',
    styleUrls: ['./menu-controle-acervo.component.scss']
})
export class MenuControleAcervoComponent implements OnInit {
    public cardComponent: string = 'Atores';

    constructor() {
    }

    ngOnInit(): void {
    }

    public mudarTipoAcervo(idTipoAcervo: number): void {
        this.cardComponent = ControleAcervoEnumModel.setClasse(idTipoAcervo).descricao;
    }
}
