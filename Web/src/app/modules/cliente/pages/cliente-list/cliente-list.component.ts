import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColunaModel} from "../../../../model/util/coluna.model";
import {ClienteListModel} from "../../../../model/cliente-list.model";
import {ClienteModel} from "../../../../model/cliente.model";
import {ClienteService} from "../../../../shared/service/cliente.service";
import {ConfirmationService} from "primeng/api";
import {ClienteComponent} from "../cliente/cliente.component";

@Component({
    selector: 'app-cliente-list',
    templateUrl: './cliente-list.component.html',
    styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

    public colunasSocios: ColunaModel[] = [];
    public colunasDependentes: ColunaModel[] = [];
    public listaSocios: ClienteListModel[] = [];
    public listaDependentes: ClienteListModel[] = [];
    public listaSociosInativos: ClienteListModel[] = [];
    public listaDependentesInativos: ClienteListModel[] = [];

    public cliente: ClienteModel;

    public tituloModal: string;

    @Input() display = false;
    @ViewChild(ClienteComponent) formCliente: ClienteComponent;

    constructor(
        private clienteService: ClienteService,
        private confirmMessage: ConfirmationService
    ) {
    }

    ngOnInit(): void {
        this.colunasTabelaSocios();
        this.colunasTabelaDependentes();
    }

    public colunasTabelaSocios(): void {
        this.colunasSocios = [
            new ColunaModel('numInscricao', 'Nº Inscrição'),
            new ColunaModel('nomeCliente', 'Nome Cliente'),
            new ColunaModel('dtNascimento', 'Data Nascimento'),
            new ColunaModel('cpf', 'CPF'),
            new ColunaModel('telefone', 'Telefone'),
            new ColunaModel('acoes', 'Ações', '132px')
        ]
    }

    public colunasTabelaDependentes(): void {
        this.colunasDependentes = [
            new ColunaModel('socio', 'Nome Sócio'),
            new ColunaModel('numInscricao', 'Nº Inscrição'),
            new ColunaModel('nomeCliente', 'Nome Cliente'),
            new ColunaModel('dtNascimento', 'Data Nascimento'),
            new ColunaModel('cpf', 'CPF'),
            new ColunaModel('telefone', 'Telefone'),
            new ColunaModel('acoes', 'Ações', '132px')
        ]
    }

    // public listarTodosCliente(): void {
    //     // this.clienteService.findAll().subscribe((data) => {
    //         this.listaCliente = data;
    //     // })
    // }
    //
    // public listarTodosSocios(): void {
    //     this.clienteService.findAll().subscribe((data) => {
    //         this.listaCliente = data;
    //     })
    // }
    //
    // public listarTodosDependentes(): void {
    //     this.clienteService.findAll().subscribe((data) => {
    //         this.listaCliente = data;
    //     })
    // }

    // public novoCliente(): void {
    //     this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.NOVO_CLIENTE.index).header;
    //     this.formCliente.formCliente.reset();
    //     this.display = true;
    // }
    //
    // public editarAtor(id: number): void {
    //     this.display = true;
    //     this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.EDITAR_CLIENTE.index).header;
    //     this.formCliente.editarCliente(id);
    // }

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

    public resetarForm(): void {
        this.formCliente.fecharForm();
    }

    public fecharModal(): void {
        // if (this.formCliente.listarCLientes) {
        //     this.listarTodosAtores();
        // }
        this.display = false;
    }
}
