import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AtorModel} from "../../../../model/ator.model";
import {AtorComponent} from "../ator/ator.component";
import {TituloModalEnum} from "../../../../model/util/titulo-modal-enum.model";
import {AtorListModel} from "../../../../model/ator-list.model";
import {AtorService} from "../../../../shared/service/ator.service";
import {EntidadeUtil} from "../../../../shared/util/entidade-util";
import {ConfirmationService} from "primeng/api";
import {ColunaModel} from "../../../../model/util/coluna.model";

@Component({
    selector: 'app-ator-list',
    templateUrl: './ator-list.component.html',
    styleUrls: ['./ator-list.component.scss']
})
export class AtorListComponent implements OnInit {

    public colunas: ColunaModel[] = [];
    public listaAtor: AtorListModel[] = [];
    public ator: AtorModel;

    public tituloModal: string;

    @Input() display = false;
    @ViewChild(AtorComponent) formAtor: AtorComponent;

    constructor(
        private atorService: AtorService,
        private confirmMessage: ConfirmationService
    ) {
    }

    ngOnInit(): void {
        this.colunasTabela();
        this.listarTodosAtores();
    }

    public colunasTabela(): void {
        this.colunas = [
            new ColunaModel('nomeAtor', 'Nome Ator'),
            new ColunaModel('acoes', 'Ações', '132px')
        ]
    }

    public listarTodosAtores(): void {
        this.atorService.findAll().subscribe((data) => {
            this.listaAtor = data;
            console.log(this.listaAtor)
        })
    }

    public novoAtor(): void {
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.NOVO_ATOR.index).header;
        this.formAtor.formAtor.reset();
        this.display = true;
    }

    public editarAtor(id: number): void {
        this.display = true;
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.EDITAR_ATOR.index).header;
        this.formAtor.editarAtor(id);
    }

    public desativarAtor(id: number): void {
        this.atorService.delete(id).subscribe(() => {
            this.listarTodosAtores();
        });
    }

    public confirmarAcao(id: number): void {
        this.confirmarDialog(id, () => this.desativarAtor(id), EntidadeUtil.ATOR);
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
        this.formAtor.fecharForm();
    }

    public fecharModal(): void {
        if (this.formAtor.listarAtores) {
            this.listarTodosAtores();
        }
        this.display = false;
    }
}
