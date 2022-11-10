import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TituloModalEnum} from "../../../../model/util/titulo-modal-enum.model";
import {ClienteFormComponent} from "../cliente-form/cliente-form.component";
import {ClienteModel} from "../../../../model/cliente.model";
import {ColunaModel} from "../../../../model/util/coluna.model";
import {ClienteListModel} from "../../../../model/list/cliente-list.model";
import {ClienteService} from "../../../../shared/service/cliente.service";

@Component({
    selector: 'app-cliente-list',
    templateUrl: './cliente-list.component.html',
    styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

    public tituloModal: string;
    public status: boolean;
    public clienteAtivo: boolean;

    public cliente: ClienteModel;
    public listaClienteAtivos: ClienteListModel[] = [];
    public colunas: ColunaModel[] = [];

    @Input() display = false;
    @ViewChild(ClienteFormComponent) formCliente: ClienteFormComponent;
    abaSelecionada: boolean;


    constructor(
        private clienteService: ClienteService,
    ) {
    }

    ngOnInit(): void {
        this.colunasTabela();
        this.requisicaoAba();
        this.listarTodosClientesAtivos();
    }

    public requisicaoAba(): void {
        if(this.abaSelecionada) {
            this.clienteAtivo = true;
        }
        this.clienteAtivo = false;
    }

    public colunasTabela(): void {
        this.colunas = [
            new ColunaModel('numeroInscricao', 'Nº Inscrição'),
            new ColunaModel('nome', 'Nome Cliente'),
            new ColunaModel('dataNascimento', 'Data Nascimento'),
            new ColunaModel('acoes', 'Ações', '132px')
        ]
    }

    public listarTodosClientesAtivos(): void {
        this.clienteService.findAllActive().subscribe((data) => {
            this.listaClienteAtivos = data;
        })
    }

    public novoSocio(): void {
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.NOVO_CLIENTE.index).header;
        this.formCliente.formCliente.reset();
        this.display = true;
    }

    public editarCliente(id: number): void {
        this.display = true;
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.EDITAR_CLIENTE.index).header;
        this.formCliente.editarCliente(id);
    }

    public visualizarDadosCliente(id: number): void {
        this.display = true;
        this.tituloModal = TituloModalEnum.setTitulo(TituloModalEnum.VISUALIZAR.index).header;
        this.formCliente.visualizarCliente(id);
    }

    public desativarCliente(id: number): void {
        this.clienteService.delete(id).subscribe(() => {
            this.listarTodosClientesAtivos();
        });
    }

    public resetarForm(): void {
        this.formCliente.fecharForm();
    }

    public fecharModal(): void {
        if (this.formCliente.listarClientes) {
            this.listarTodosClientesAtivos();
        }
        this.display = false;
    }

}
