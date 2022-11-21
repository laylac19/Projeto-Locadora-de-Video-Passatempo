import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColunaUtil} from "../../../../shared/util/coluna.util";
import {LocacaoListModel} from "../../../../model/list/locacao-list.model";
import {LocacaoModel} from "../../../../model/locacao.model";
import {LocacaoComponent} from "../locacao/locacao.component";
import {TituloModalEnum} from "../../../../shared/util/enum/titulo-modal-enum.model";
import {EntidadeUtil} from "../../../../shared/util/entidade-util";
import {MensagensConfirmacao} from "../../../../shared/util/msgConfirmacaoDialog.util";
import {ItemModel} from "../../../../model/item.model";
import {LocacaoService} from "../../../../shared/service/locacao.service";

@Component({
    selector: 'app-locacao-list',
    templateUrl: './locacao-list.component.html',
    styleUrls: ['./locacao-list.component.scss']
})
export class LocacaoListComponent implements OnInit {

    public colunas: ColunaUtil[] = [];
    public listaMovimentacaoLocacao: LocacaoListModel[] = [];
    public items: ItemModel[] = [];
    public locacao: LocacaoModel;

    public tituloModal: string;
    public filterItem: string;
    public novaLocaco: boolean = false;

    @Input() display = false;
    @ViewChild(LocacaoComponent) formLocacao: LocacaoComponent;

    constructor(
        private confirmMessage: MensagensConfirmacao,
        private locacaoService: LocacaoService,
    ) {
    }

    ngOnInit(): void {
        this.colunasTabela();
        this.listarTodasLocacoes();
    }

    public colunasTabela(): void {
        this.colunas = [
            new ColunaUtil('nomeCliente', 'Cliente'),
            new ColunaUtil('numeroItem', 'Nº Série Item'),
            new ColunaUtil('dtLocacao', 'Data Locação'),
            new ColunaUtil('dtDevolucaoPrevista', 'Dt. Devolução Prevista'),
            new ColunaUtil('status', 'Status'),
            new ColunaUtil('dtDevolucaoEfetiva', 'Dt. Devolução'),
            new ColunaUtil('multaCobrada', 'Multa Cobrada'),
            new ColunaUtil('valorCobrado', 'Valor Total'),
            new ColunaUtil('acoes', 'Ações', '230px')
        ];
    }

    public listarTodasLocacoes(): void {
        this.locacaoService.findAll().subscribe((data) => {
            this.listaMovimentacaoLocacao = data;
        });
    }

    public novaLocacao(): void {
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.NOVA_LOCACAO.index).header;
        this.formLocacao.formLocacao.reset();
        this.display = true;
    }

    public visualizarDados(id: number): void {
        this.display = true;
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.VISUALIZAR_MOVIMENTACAO.index).header;
        this.formLocacao.visualizarLocacao(id);
    }

    public realizarDevolucaoItem(id: number): void {
        this.display = true;
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.EDITAR_LOCACAO.index).header;
        this.formLocacao.novaDevolucao(id);
    }

    public editarLocacao(id: number): void {
        this.display = true;
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.EDITAR_LOCACAO.index).header;
        this.formLocacao.editarForm(id);
    }

    public desativarLocacao(id: number) {
        this.locacaoService.delete(id).subscribe(()=> {
            this.listarTodasLocacoes();
        });
    }

    public resetarForm(): void {
        this.formLocacao.fecharForm();
    }

    public confirmarDevolucao(id: number): void {
        this.confirmMessage.confirmarDialogDevolucao(id, () => this.realizarDevolucaoItem(id), EntidadeUtil.LOCACAO);
    }

    public confirmarExclusaoLocacao(id: number): void {
        this.confirmMessage.confirmarDialog(id, () => this.desativarLocacao(id), EntidadeUtil.LOCACAO);
    }

    public fecharModal(): void {
        if (this.formLocacao.listarLocacoes) {
            this.listarTodasLocacoes();
        }
        this.display = false;
    }

    setStatusLocacao(rowDatum: any): string {
        return rowDatum ? 'EM ABERTO' : 'EFETIVADA';
    }
}
