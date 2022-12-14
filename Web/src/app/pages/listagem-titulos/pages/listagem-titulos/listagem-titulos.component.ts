import {Component, OnInit} from '@angular/core';
import {ColunaUtil} from "../../../../shared/util/coluna.util";
import {TituloListModel} from "../../../../model/list/titulo-list.model";
import {TituloService} from "../../../../shared/service/titulo.service";

@Component({
    selector: 'app-listagem-titulos',
    templateUrl: './listagem-titulos.component.html',
    styleUrls: ['./listagem-titulos.component.scss']
})
export class ListagemTitulosComponent implements OnInit {
    public colunas: ColunaUtil[] = [];
    public listaTitulosFilmes: TituloListModel[] = [];

    constructor(
        private tituloService: TituloService,
    ) {
    }

    ngOnInit(): void {
        this.colunasTabela();
        this.listarTodosTitulosFilmes();
    }

    public colunasTabela(): void {
        this.colunas = [
            new ColunaUtil('nome', 'Nome Título'),
            new ColunaUtil('nomeClasse', 'Classse'),
            new ColunaUtil('nomeCategoria', 'Categoria'),
        ]
    }

    public listarTodosTitulosFilmes(): void {
        this.tituloService.findAll().subscribe((data) => {
            this.listaTitulosFilmes = data;
        })
    }
}
