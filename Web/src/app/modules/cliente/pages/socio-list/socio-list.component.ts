import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColunaModel} from "../../../../model/util/coluna.model";
import {ClienteModel} from "../../../../model/cliente.model";
import {ClienteFormComponent} from "../cliente-form/cliente-form.component";
import {ClienteService} from "../../../../shared/service/cliente.service";
import {ConfirmationService} from "primeng/api";
import {TituloModalEnum} from "../../../../model/util/titulo-modal-enum.model";
import {EntidadeUtil} from "../../../../shared/util/entidade-util";
import {SocioListModel} from "../../../../model/socio-list.model";

@Component({
    selector: 'app-socio-list',
    templateUrl: './socio-list.component.html',
    styleUrls: ['./socio-list.component.scss']
})
export class SocioListComponent implements OnInit {

    public colunas: ColunaModel[] = [];
    public listaSociosAtivos: SocioListModel[] = [];
    public listaSociosInativos: SocioListModel[] = [];
    public socio: ClienteModel;

    public tituloModal: string;
    public ativos: boolean;

    @Input() display = false;
    @Input() public configuracaoListagem?: boolean = true;
    @ViewChild(ClienteFormComponent) formCliente: ClienteFormComponent;

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

    public listarSocios(): void {
        console.log(this.configuracaoListagem)
        if(this.configuracaoListagem) {
            this.listarSociosAtivos();
            this.ativos = true;
        }
        this.listarSociosInativos();
        this.ativos = false;
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
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.NOVO_CLIENTE.index).header;
        this.formCliente.formCliente.reset();
        this.display = true;
    }

    public editarSocio(id: number): void {
        this.display = true;
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.EDITAR_CLIENTE.index).header;
        this.formCliente.editarForm(id);
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
        this.formCliente.fecharForm();
    }

    public fecharModal(): void {
        if (this.formCliente.listarClientes) {
            this.listarSociosAtivos();
            this.listarSociosInativos();
        }
        this.display = false;
    }
}
