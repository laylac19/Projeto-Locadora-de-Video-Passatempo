import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColunaModel} from "../../../../model/coluna.model";
import {DiretorModel} from "../../../../model/diretor.model";
import {DiretorComponent} from "../diretor/diretor.component";
import {TituloModalEnum} from "../../../../model/titulo-modal-enum.model";
import {DiretorListModel} from "../../../../model/diretor-list.model";
import {DiretorService} from "../../../../shared/service/diretor.service";
import {ConfirmationService} from "primeng/api";
import {EntidadeUtil} from "../../../../shared/util/entidade-util";

@Component({
    selector: 'app-diretor-list',
    templateUrl: './diretor-list.component.html',
    styleUrls: ['./diretor-list.component.scss']
})
export class DiretorListComponent implements OnInit {

    colunas: ColunaModel[] = [];
    listaDiretores: DiretorListModel[] = [];

    diretor: DiretorModel;

    tituloModal: string;


    @Input() display = false;
    @ViewChild(DiretorComponent) formDiretor: DiretorComponent;

    constructor(
        private diretorService: DiretorService,
        private confirmMessage: ConfirmationService
    ) {
    }

    ngOnInit(): void {
        this.colunasTabela();
        this.buscarDiretor();
    }

    public colunasTabela(): void {
        this.colunas = [
            new ColunaModel('nomeDiretor', 'Nome Diretor'),
            new ColunaModel('acoes', 'Ações')
        ]
    }

    public buscarDiretor(): void {
        this.diretorService.findAll().subscribe((data) => {
            this.listaDiretores = data;
        } )
    }

    public novoDiretor(): void {
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.NOVO_DIRETOR.index).header;
        this.formDiretor.formDiretor.reset();
        this.display = true;
    }

    public editarDiretor(id: number): void {
        this.display = true;
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.EDITAR_DIRETOR.index).header;
        this.formDiretor.editarDiretor(id);
    }

    public desativarDiretor(id: number): void {
        this.diretorService.delete(id).subscribe(() => {
            this.buscarDiretor();
        });
    }

    public confirmarAcao(id: number): void {
        this.confirmarDialog(id, () => this.desativarDiretor(id), EntidadeUtil.DIRETOR);
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
        this.formDiretor.fecharForm();
    }

    public fecharModal(): void {
        if(this.formDiretor.listarDiretores){
            this.buscarDiretor();
        }
        this.display = false;
    }
}
