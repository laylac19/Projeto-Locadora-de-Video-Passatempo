import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColunaModel} from "../../../../model/coluna.model";
import {TituloListModel} from "../../../../model/titulo-list.model";
import {TituloModel} from "../../../../model/titulo.model";
import {TituloComponent} from "../titulo/titulo.component";
import {ConfirmationService} from "primeng/api";
import {TituloModalEnum} from "../../../../model/titulo-modal-enum.model";

@Component({
    selector: 'app-titulo-list',
    templateUrl: './titulo-list.component.html',
    styleUrls: ['./titulo-list.component.scss']
})
export class TituloListComponent implements OnInit {

    colunas: ColunaModel[] = [];
    listaAtor: TituloListModel[] = [];
    titulo: TituloModel;

    tituloModal: string;

    @Input() display = false;
    @ViewChild(TituloComponent) formTituloFilme: TituloComponent;

    constructor(
        private confirmMessage: ConfirmationService
    ) {
    }

    ngOnInit(): void {
    }

    public colunasTabela(): void {
        this.colunas = [
            new ColunaModel('nomeTitulo', 'Nome Título'),
            new ColunaModel('ano', 'Ano Lançamento'),
            new ColunaModel('categoria', 'Categoria'),
            new ColunaModel('acoes', 'Ações','132px')
        ]
    }

    // public listarTodosAtores(): void {
    //     this.atorService.findAll().subscribe((data) => {
    //         this.listaAtor = data;
    //     })
    // }

    public novoTituloFilme(): void {
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.NOVO_TITULO.index).header;
        this.formTituloFilme.formTitulo.reset();
        this.display = true;
    }

    public editarTitulo(id: number): void {
        this.display = true;
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.EDITAR_TITULO.index).header;
        // this.formTituloFilme.editarAtor(id);
    }

    // public desativarAtor(id: number): void {
    //     this.atorService.delete(id).subscribe(() => {
    //         this.listarTodosAtores();
    //     });
    // }

    // public confirmarAcao(id: number): void {
    //     this.confirmarDialog(id, () => this.desativarAtor(id), EntidadeUtil.ATOR);
    // }
    //
    // public confirmarDialog(id: number, alterarSituacao: () => void, entidade: EntidadeUtil): void {
    //     this.confirmMessage.confirm({
    //         header: 'Confirmação',
    //         message: 'Deseja desativar esse(a) ' + entidade.descricao + ' ?',
    //         acceptLabel: 'Sim',
    //         rejectLabel: 'Cancelar',
    //         accept: alterarSituacao
    //     });
    // }
    //
    // public resetarForm(): void {
    //     this.formAtor.fecharForm();
    // }
    //
    // public fecharModal(): void {
    //     if (this.formAtor.listarAtores) {
    //         this.listarTodosAtores();
    //     }
    //     this.display = false;
    // }
}
