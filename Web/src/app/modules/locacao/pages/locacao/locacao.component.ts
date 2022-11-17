import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocacaoModel} from "../../../../model/locacao.model";
import {ClasseService} from "../../../../shared/service/classe.service";
import {SelectItem} from "primeng/api";
import {MensagensUtil} from "../../../../shared/util/mensagens-util";
import {ColunaModel} from "../../../../shared/util/coluna.model";
import {ItemListModel} from "../../../../model/list/item-list.model";
import {VinculoEntidades} from "../../../../model/vinculo-entidade.model";
import {ClienteService} from "../../../../shared/service/cliente.service";
import {ItemService} from "../../../../shared/service/item.service";
import {LocacaoService} from "../../../../shared/service/locacao.service";
import {MensagensProntasEnumModel} from "../../../../shared/util/mensagensProntasEnum.model";
import {ItemModel} from "../../../../model/item.model";

@Component({
    selector: 'app-locacao',
    templateUrl: './locacao.component.html',
    styleUrls: ['./locacao.component.scss']
})
export class LocacaoComponent implements OnInit {

    public formLocacao: FormGroup;
    public novaLocacao: LocacaoModel;
    public itemLocacao: ItemModel;

    public dtLocacao: Date = new Date();
    public dtDevolucaoPrevista: Date = new Date();
    public dtDevolucaoEfetiva: Date = new Date();

    public clientesDropDown: SelectItem[];
    public itensDropdown: SelectItem[];
    public colunas: ColunaModel[] = [];

    public idItem: number;
    public prazoDevolucao: number;
    public valorTotalLocacao: number[];
    public depoisSalvar: boolean = false;
    public listarLocacoes: boolean = false;

    @Input() locacaoModel: LocacaoModel;
    @Output() resForm: EventEmitter<boolean> = new EventEmitter();


    constructor(
        private builder: FormBuilder,
        private locacaoService: LocacaoService,
        private clienteService: ClienteService,
        private itemService: ItemService,
        private message: MensagensUtil
    ) {
    }

    ngOnInit(): void {
        this.novoFormulario();
        this.dropDownCliente();
        this.dropDownItensDisponiveis();
        this.colunasTabelaElenco();
    }

    public dropDownCliente(): void {
        this.clienteService.fillDropDownLease().subscribe((data) => {
            this.clientesDropDown = data;
        });
    }

    public dropDownItensDisponiveis(): void {
        this.itemService.fillAvailableItensDropdown().subscribe((data) => {
            this.itensDropdown = data;
        });
    }

    public colunasTabelaElenco(): void {
        this.colunas = [
            new ColunaModel('label', 'Itens'),
            new ColunaModel('acoes', 'Ações', '132px')
        ]
    }

    public novoFormulario(): void {
        this.formLocacao = this.builder.group(({
            id: [null],
            dtLocacao: [null, [Validators.required]],
            dtDevolucaoPrevista: [null, [Validators.required]],
            valorCobrado: ['', [Validators.required]],
            dtDevolucaoEfetiva: [null],
            multaCobrada: [''],
            idCliente: [null, [Validators.required]],
            idItem: [null, [Validators.required]]
        }));
    }

    public salvarFormulario(): void {
        this.formLocacao.get('dtLocacao')?.setValue(this.converterLocalDate(this.dtLocacao));
        this.novaLocacao = this.formLocacao.getRawValue();
        this.locacaoService.insert(this.novaLocacao).subscribe({
            next: () => {
                if (this.novaLocacao.id) {
                    this.message.mensagemSucesso(MensagensProntasEnumModel.ATUALIZAR_LOCACAO.descricao);
                } else {
                    this.message.mensagemSucesso(MensagensProntasEnumModel.CADASTRO_LOCACAO.descricao);
                }
                this.fecharForm();
                this.listarLocacoes = true;
            },
            error: () => {
                this.message.mensagemSucesso(MensagensProntasEnumModel.FALHA_LOCACAO.descricao);
            }
        });
    }

    public visualizarLocacao(id: number): void {
        this.locacaoService.findById(id).subscribe({
            next: (response) => {
                this.depoisSalvar = true;
                this.formLocacao.patchValue(response);
                this.formLocacao.disable();
            }
        });
    }

    public novaDevolucao(id: number): void {
        this.depoisSalvar = true;
    }

    public editarForm(id: number): void {
        this.locacaoService.findById(id).subscribe({
                next: (response) => {
                    this.depoisSalvar = true;
                    this.formLocacao.patchValue(response);
                },
            }
        );
    }

    public setDataFormatoData(dtLocacao: Date): string {
        return dtLocacao.toLocaleDateString()
    }

    public fecharForm(): void {
        this.depoisSalvar = false;
        this.formLocacao.reset();
        this.resForm.emit();
    }

    setarValorDataPrevista() {
        this.idItem = this.formLocacao.get('idItem')?.value;
        this.setPriceItem(this.idItem);
        this.setDeadline(this.idItem);
    }

    private setPriceItem(id: number): void {
        this.itemService.valueOfItemLease(id).subscribe((valor)=> {
            this.formLocacao.get('valorCobrado')?.setValue(valor);
        });
    }

    private setDeadline(id: number): void {
        this.itemService.returnDeadlineItemLease(id).subscribe((prazo) => {
            this.dtDevolucaoPrevista = this.calcularDataDevolucaoPresvista(this.dtLocacao, prazo);
            this.setDataFormatoData(this.dtDevolucaoPrevista);
        })
    }

    private calcularDataDevolucaoPresvista(dtLocacao: Date, prazoDias: any): Date {
        const copiaDaData = new Date(dtLocacao);
        copiaDaData.setDate(copiaDaData.getDate() + prazoDias);
        this.formLocacao.get('dtDevolucaoPrevista')?.setValue(this.converterLocalDate(copiaDaData));
        return copiaDaData;
    }

    public converterLocalDate(date: Date | string | number): Date | null {
        if (date == null || date.toString().trim() === '') {
            return null;
        }
        return date instanceof Date ? new Date(date.getTime()) : new Date(`${ date }T00:00:00-03:00`);
    }
}
