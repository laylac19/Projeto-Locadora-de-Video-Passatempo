import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColunaModel} from "../../../../model/coluna.model";
import {ClasseModel} from "../../../../model/classe.model";
import {ClasseComponent} from "../classe/classe.component";
import {TituloModalEnum} from "../../../../model/titulo-modal-enum.model";
import {ClasseService} from "../../../../shared/service/classe.service";
import {ConfirmationService} from "primeng/api";
import {ClasseListModel} from "../../../../model/classe-list.model";
import {EntidadeUtil} from "../../../../shared/util/entidade-util";

@Component({
    selector: 'app-classe-list',
    templateUrl: './classe-list.component.html',
    styleUrls: ['./classe-list.component.scss']
})
export class ClasseListComponent implements OnInit {

    colunas: ColunaModel[] = [];
    listaClasse: ClasseListModel[] = [];

    classe: ClasseModel;

    tituloModal: string;

    @Input() display = false;
    @ViewChild(ClasseComponent) formClasse: ClasseComponent;

    constructor(
        private classeService: ClasseService,
        private confirmMessage: ConfirmationService
    ) {
    }

    ngOnInit(): void {
        this.colunasTabela();
        this.buscarClasse();
    }

    public colunasTabela(): void {
        this.colunas = [
            new ColunaModel('nomeClasse', 'Nome Classe'),
            new ColunaModel('valor', 'Valor'),
            new ColunaModel('prazoDevolucao', 'Prazo De Devolução'),
            new ColunaModel('acoes', 'Ações')
        ]
    }

    campoData(coluna: string): boolean {
        return coluna === 'prazoDevolucao';
    }

    campoValor(coluna: string): boolean {
        return coluna == 'valor';
    }

    public buscarClasse(): void {
        this.classeService.findAll().subscribe((data) => {
            this.listaClasse = data;
        } )
    }

    public novaClasse(): void {
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.NOVA_CLASSE.index).header;
        this.formClasse.formClasse.reset();
        this.display = true;
    }

    public editarClasse(id: number): void {
        this.display = true;
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.EDITAR_CLASSE.index).header;
        this.formClasse.editarForm(id);
    }

    public desativarCasse(id: number): void {
        this.classeService.delete(id).subscribe(() => {
            this.buscarClasse();
        });
    }

    public confirmarAcao(id: number): void {
        this.confirmarDialog(id, () => this.desativarCasse(id), EntidadeUtil.CLASSE);
    }

    public confirmarDialog(id: number, alterarSituacao: () => void, entidade: EntidadeUtil): void {
        this.confirmMessage.confirm({
            header: 'Confirmação',
            message: 'Deseja desativar esse(a) ' + entidade.descricao + ' ?' ,
            acceptLabel: 'Sim',
            rejectLabel: 'Cancelar',
            accept: alterarSituacao
        });
    }

    public resetarForm(): void {
        this.formClasse.fecharForm();
    }

    public fecharModal(): void {
        if (this.formClasse.listarClasses) {
            this.buscarClasse();
        }
        this.display = false;
    }
}
