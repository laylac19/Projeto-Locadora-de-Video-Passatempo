import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColunaModel} from "../../../../model/coluna.model";
import {ItemListModel} from "../../../../model/item-list.model";
import {ItemModel} from "../../../../model/item.model";
import {ItemComponent} from "../item/item.component";
import {ConfirmationService} from "primeng/api";
import {ItemService} from "../../../../shared/service/item.service";
import {TituloModalEnum} from "../../../../model/titulo-modal-enum.model";
import {EntidadeUtil} from "../../../../shared/util/entidade-util";

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

    public colunas: ColunaModel[] = [];
    public listaItnes: ItemListModel[] = [];
    public item: ItemModel;

    public tituloModal: string;

    @Input() display = false;
    @ViewChild(ItemComponent) formItem: ItemComponent;

    constructor(
        private itemService: ItemService,
        private confirmMessage: ConfirmationService
    ) {
    }

    ngOnInit(): void {
        this.colunasTabela();
        this.listarTodosItens();
    }

    public colunasTabela(): void {
        this.colunas = [
            new ColunaModel('numeroSerie', 'Número de Série'),
            new ColunaModel('titulo', 'Filme'),
            new ColunaModel('data', 'Data Aquisição'),
            new ColunaModel('tipoItem', 'Tipo'),
            new ColunaModel('acoes', 'Ações', '132px')
        ]
    }

    public listarTodosItens(): void {
        this.itemService.findAll().subscribe((data) => {
            this.listaItnes = data;
        })
    }

    public novoItem(): void {
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.NOVO_TITULO.index).header;
        this.formItem.formItem.reset();
        this.display = true;
    }

    public editarItem(id: number): void {
        this.display = true;
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.EDITAR_TITULO.index).header;
        this.formItem.editarItem(id);
    }

    public desativarItem(id: number): void {
        this.itemService.delete(id).subscribe(() => {
            this.listarTodosItens();
        });
    }

    public confirmarAcao(id: number): void {
        this.confirmarDialog(id, () => this.desativarItem(id), EntidadeUtil.ITEM_TITULO);
    }

    public confirmarDialog(id: number, alterarSituacao: () => void, entidade: EntidadeUtil): void {
        this.confirmMessage.confirm({
            header: 'Confirmação',
            message: 'Deseja desativar esse(a) ' + entidade.descricao + ' ?',
            acceptLabel: 'Sim',
            rejectLabel: 'Cancelar',
            accept: alterarSituacao
        });
    }

    public resetarForm(): void {
        this.formItem.fecharForm();
    }

    public fecharModal(): void {
        if (this.formItem.listarItens) {
            this.listarTodosItens();
        }
        this.display = false;
    }

}
