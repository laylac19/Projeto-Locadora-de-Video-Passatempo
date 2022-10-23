import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColunaModel} from "../../../../model/util/coluna.model";
import {ClienteService} from "../../../../shared/service/cliente.service";
import {ConfirmationService} from "primeng/api";
import {TituloModalEnum} from "../../../../model/util/titulo-modal-enum.model";
import {EntidadeUtil} from "../../../../shared/util/entidade-util";
import {SocioListModel} from "../../../../model/socio-list.model";
import {SocioModel} from "../../../../model/socio.model";
import {SocioFormComponent} from "../socio-form/socio-form.component";

@Component({
    selector: 'app-socio-list',
    templateUrl: './socio-list.component.html',
    styleUrls: ['./socio-list.component.scss']
})
export class SocioListComponent implements OnInit {

    public colunas: ColunaModel[] = [];
    public listaSociosAtivos: SocioListModel[] = [];
    public listaSociosInativos: SocioListModel[] = [];
    public socio: SocioModel;

    public tituloModal: string;
    public ativos: boolean = true;

    @Input() display = false;
    @Input() public configuracaoListagem?: boolean;
    @ViewChild(SocioFormComponent) formSocio: SocioFormComponent;

    constructor(
        private clienteService: ClienteService,
        private confirmMessage: ConfirmationService
    ) {
    }

    ngOnInit(): void {
        this.colunasTabela();
        this.listarSocios();
    }

    public colunasTabela(): void {
        this.colunas = [
            new ColunaModel('numInscricao', 'Nº Inscrição'),
            new ColunaModel('nomeCliente', 'Nome Cliente'),
            new ColunaModel('dtNascimento', 'Data Nascimento'),
            new ColunaModel('cpf', 'CPF'),
            new ColunaModel('telefone', 'Telefone'),
            new ColunaModel('acoes', 'Ações', '132px')
        ]
    }

    public listarSocios(): boolean {
        if(this.configuracaoListagem === true) {
            this.listarSociosInativos();
            return this.ativos = false;
        }
        this.listarSociosAtivos();
        return this.ativos = true;
    }

    public listarSociosAtivos(): void {
        this.clienteService.findAllPartners(true).subscribe((data) => {
            this.listaSociosAtivos = data;
        })
    }

    public listarSociosInativos(): void {
        this.clienteService.findAllPartners(false).subscribe((data) => {
            this.listaSociosInativos = data;
        })
    }

    public novoSocio(): void {
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.NOVO_SOCIO.index).header;
        console.log(this.formSocio);
        console.log(this.formSocio.formSocio);
        this.display = true;
    }

    public editarSocio(id: number): void {
        this.display = true;
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.EDITAR_SOCIO.index).header;
        this.formSocio.editarForm(id);
    }

    public visualizarDadosSocio(id: number): void {
        this.display = true;
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.VISUALIZAR_SOCIO.index).header;
        this.formSocio.visualizarDadosSocio(id);
    }

    public desativarSocio(id: number): void {
        this.clienteService.delete(id).subscribe(() => {
            this.listarSociosAtivos();
            this.listarSociosInativos();
        });
    }

    public confirmarAcao(id: number): void {
        this.confirmarDialog(id, () => this.desativarSocio(id), EntidadeUtil.CLIENTE);
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
        this.formSocio.fecharForm();
    }

    public fecharModal(): void {
        if (this.formSocio.listarSocios) {
            this.listarSociosAtivos();
        }
        this.display = false;
    }
}
