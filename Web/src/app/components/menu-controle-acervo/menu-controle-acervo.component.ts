import {Component, OnInit} from '@angular/core';
import {ControleAcervoEnumModel} from "../../model/controle-acervo-enum.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-menu-controle-acervo',
    templateUrl: './menu-controle-acervo.component.html',
    styleUrls: ['./menu-controle-acervo.component.scss']
})
export class MenuControleAcervoComponent implements OnInit {
    public cardComponent: string = 'Titulos';

    constructor(
        private router: Router
    ) {
    }

    ngOnInit(): void {
    }

    public mudarTipoAcervoPorURL(idTipoAcervo: number): void {
        this.cardComponent = ControleAcervoEnumModel.setClasse(idTipoAcervo).descricao;
        this.router.navigateByUrl('/' + this.cardComponent);
    }
}
