import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColunaModel} from "../../../../model/util/coluna.model";
import {ClienteListModel} from "../../../../model/cliente-list.model";
import {ClienteModel} from "../../../../model/cliente.model";
import {ClienteFormComponent} from "../cliente-form/cliente-form.component";
import {ClienteService} from "../../../../shared/service/cliente.service";
import {ConfirmationService} from "primeng/api";
import {TituloModalEnum} from "../../../../model/util/titulo-modal-enum.model";

@Component({
    selector: 'app-socio-list',
    templateUrl: './socio-list.component.html',
    styleUrls: ['./socio-list.component.scss']
})
export class SocioListComponent implements OnInit {

    public colunas: ColunaModel[] = [];
    public listaSociosAtivos: ClienteListModel[] = [];
    public listaSociosInativos: ClienteListModel[] = [];
    public socio: ClienteModel;

    public tituloModal: string;
    public ativos: boolean = true;

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
        // this.listarSocios();
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

    // public listarSocios(): void {
    //     if(this.configuracaoListagem) {
    //         this.listaSociosAtivos();
    //         this.ativos;
    //     }
    //     this.listaSociosInativos();
    //     this.ativos = false;
    // }

    // public listarSociosAtivos(): void {
    //     this.clienteService.findAll().subscribe((data) => {
    //         this.listaSociosAtivos = data;
    //     })
    // }
    //
    // public listarSociosinativos(): void {
    //     this.clienteService.findAll().subscribe((data) => {
    //         this.listaSociosInativos = data;
    //     })
    // }

    public novoSocio(): void {
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.NOVO_CLIENTE.index).header;
        this.formCliente.formCliente.reset();
        this.display = true;
    }

    //public editarSocio(id: number): void {
    //     this.display = true;
    //     this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.EDITAR_CLIENTE.index).header;
    //     this.formCliente.editarAtor(id);
    // }

    // public desativarSocio(id: number): void {
    //     this.clienteService.delete(id).subscribe(() => {
    //         this.listaSociosAtivos();
    //         this.listaSociosInativos();
    //     });
    // }

    // public confirmarAcao(id: number): void {
    //     this.confirmarDialog(id, () => this.desativarAtor(id), EntidadeUtil.ATOR);
    // }

    // public confirmarDialog(id: number, alterarSituacao: () => void, entidade: EntidadeUtil): void {
    //     this.confirmMessage.confirm({
    //         header: 'Confirmação',
    //         message: 'Deseja desativar esse(a) ' + entidade.descricao + ' ?',
    //         acceptLabel: 'Sim',
    //         rejectLabel: 'Cancelar',
    //         accept: alterarSituacao
    //     });
    // }

    public resetarForm(): void {
        this.formCliente.fecharForm();
    }

    // public fecharModal(): void {
    //     if (this.formCliente.listarClientes) {
    //         this.listaSociosAtivos();
    //         this.listaSociosInativos();
    //     }
    //     this.display = false;
    // }
}
