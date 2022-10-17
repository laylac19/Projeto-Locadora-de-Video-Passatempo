import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TituloListModel} from "../../../../model/titulo-list.model";
import {TituloModel} from "../../../../model/titulo.model";
import {TituloComponent} from "../titulo/titulo.component";
import {ConfirmationService} from "primeng/api";
import {TituloModalEnum} from "../../../../model/util/titulo-modal-enum.model";
import {TituloService} from "../../../../shared/service/titulo.service";
import {EntidadeUtil} from "../../../../shared/util/entidade-util";
import {ColunaModel} from "../../../../model/util/coluna.model";

@Component({
    selector: 'app-titulo-list',
    templateUrl: './titulo-list.component.html',
    styleUrls: ['./titulo-list.component.scss']
})
export class TituloListComponent implements OnInit {

    public colunas: ColunaModel[] = [];
    public listaTitulosFilmes: TituloListModel[] = [];
    public tituloFilme: TituloModel;

    public tituloModal: string;

    @Input() displayFormTitulo = false;
    @ViewChild(TituloComponent) formTituloFilme: TituloComponent;

    constructor(
        private tituloService: TituloService,
        private confirmMessage: ConfirmationService
    ) {
    }

    ngOnInit(): void {
        this.colunasTabela();
        this.listarTodosTitulosFilmes();
    }

    public colunasTabela(): void {
        this.colunas = [
            new ColunaModel('nomeTitulo', 'Nome Título'),
            new ColunaModel('ano', 'Ano Lançamento'),
            new ColunaModel('classe', 'Classse'),
            new ColunaModel('categoria', 'Categoria'),
            new ColunaModel('acoes', 'Ações', '132px')
        ]
    }

    public listarTodosTitulosFilmes(): void {
        this.tituloService.findAll().subscribe((data) => {
            this.listaTitulosFilmes = data;
        })
    }

    public novoTituloFilme(): void {
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.NOVO_TITULO.index).header;
        this.formTituloFilme.formTituloFilme.reset();
        this.displayFormTitulo = true;
    }

    public editarTitulo(id: number): void {
        this.displayFormTitulo = true;
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.EDITAR_TITULO.index).header;
        this.formTituloFilme.editarTituloFilme(id);
    }

    public desativarTitulo(id: number): void {
        this.tituloService.delete(id).subscribe(() => {
            this.listarTodosTitulosFilmes();
        });
    }

    public confirmarAcao(id: number): void {
        this.confirmarDialog(id, () => this.desativarTitulo(id), EntidadeUtil.TITULO);
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
        this.formTituloFilme.fecharForm();
    }

    public fecharModal(): void {
        if (this.formTituloFilme.listarTitulos) {
            this.listarTodosTitulosFilmes();
        }
        this.displayFormTitulo = false;
    }
}
