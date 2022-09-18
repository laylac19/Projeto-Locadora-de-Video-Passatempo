import {Component, OnInit} from '@angular/core';
import {ControleAcervoEnumModel} from "../../../model/controle-acervo-enum.model";

@Component({
    selector: 'app-controle-acervo',
    templateUrl: './controle-acervo.component.html',
    styleUrls: ['./controle-acervo.component.scss']
})
export class ControleAcervoComponent implements OnInit {
    public cardComponent: string = 'Atores';

    constructor() {
    }

    ngOnInit(): void {
    }

    public mudarTipoAcervo(idTipoAcervo: number): void {
        this.cardComponent = ControleAcervoEnumModel.setClasse(idTipoAcervo).descricao;
    }
}
