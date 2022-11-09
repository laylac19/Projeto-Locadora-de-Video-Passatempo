import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColunaModel} from "../../../../model/util/coluna.model";
import {LocacaoListModel} from "../../../../model/locacao-list.model";
import {LocacaoModel} from "../../../../model/locacao.model";
import {LocacaoComponent} from "../locacao/locacao.component";

@Component({
    selector: 'app-locacao-list',
    templateUrl: './locacao-list.component.html',
    styleUrls: ['./locacao-list.component.scss']
})
export class LocacaoListComponent implements OnInit {

    public colunas: ColunaModel[] = [];
    public listaMovimentacaoLocacao: LocacaoListModel[] = [];
    public locacao: LocacaoModel;

    public tituloModal: string;

    @Input() display = false;
    @ViewChild(LocacaoComponent) formLocacao: LocacaoComponent;

    constructor() {
    }

    ngOnInit(): void {
        this.colunasTabela();
    }

    public colunasTabela(): void {
        this.colunas = [
            new ColunaModel('', 'Cliente'),
            new ColunaModel('', 'Item'),
            new ColunaModel('', 'Data Locação'),
            new ColunaModel('', 'Dt. Devolução Prevista'),
            new ColunaModel('', 'Dt. Devolução Efetiva'),
            new ColunaModel('', 'Valor Cobrado'),
            new ColunaModel('', 'Multa Cobrada'),
            new ColunaModel('', 'Ações', '132px')
        ]
    }

    // public listarTodasLocacoes(): void {
    //     this.locacaoService.findAll().subscribe((data) => {
    //         this.listaMovimentacaoLocacao = data;
    //     })
    // }

    // public novaLocacao(): void {
    //     this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.NOVA_LOCACAO.index).header;
    //     this.formLocacao.formLocacao.reset();
    //     this.display = true;
    // }

    // public editarLocacao(id: number): void {
    //     this.display = true;
    //     this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.EDITAR_LOCACAO.index).header;
    //     this.formLocacao.editarLocacao(id);
    // }

    // public resetarForm(): void {
    //     this.formLocacao.fecharForm();
    // }

    // public fecharModal(): void {
    //     if (this.formLocacao.listarLocacoes) {
    //         this.listarTodasLocacoesAbertas();
    //     }
    //     this.display = false;
    // }
}
