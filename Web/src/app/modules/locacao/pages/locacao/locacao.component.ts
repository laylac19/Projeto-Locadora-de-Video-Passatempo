import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocacaoModel} from "../../../../model/locacao.model";
import {SelectItem} from "primeng/api";
import {MensagensUtil} from "../../../../shared/util/mensagens.util";
import {ColunaUtil} from "../../../../shared/util/coluna.util";
import {ClienteService} from "../../../../shared/service/cliente.service";
import {ItemService} from "../../../../shared/service/item.service";
import {LocacaoService} from "../../../../shared/service/locacao.service";
import {MensagensProntasEnumModel} from "../../../../shared/util/enum/mensagensProntasEnum.model";
import {ItemModel} from "../../../../model/item.model";
import {FuncoesUtil} from "../../../../shared/util/funcoes.util";

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
    public colunas: ColunaUtil[] = [];

    public idItem: number;
    public prazoDevolucao: number;
    public valorTotalLocacao: number;
    public depoisSalvar: boolean = false;
    public listarLocacoes: boolean = false;
    public habilitarCampo: boolean = false;
    public holderDtLocacao: string;

    @Input() locacaoModel: LocacaoModel;
    @Input() novoDado: boolean;
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
            new ColunaUtil('label', 'Itens'),
            new ColunaUtil('acoes', 'Ações', '132px')
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
            idItem: [null, [Validators.required]],
            valorTotal: ['']
        }));
    }

    public salvarFormulario(): void {
        this.formLocacao.get('dtLocacao')?.setValue(FuncoesUtil.converterLocalDate(this.dtLocacao));
        this.formLocacao.get('dtDevolucaoPrevista')?.setValue(FuncoesUtil.converterLocalDate(this.dtDevolucaoPrevista));
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
                if (!this.novoDado) {
                    response.dtLocacao = new Date(response.dtLocacao);
                    response.dtDevolucaoPrevista = new Date(response.dtDevolucaoPrevista);
                    response.dtDevolucaoEfetiva ? new Date(response.dtDevolucaoEfetiva) : '__/__/____';
                    this.formLocacao.get('valorTotal')?.setValue(response.valorCobrado);
                }
                this.formLocacao.patchValue(response);
                this.formLocacao.disable();
            }
        });
    }

    public novaDevolucao(id: number): void {
        this.formLocacao.disable();
        this.locacaoService.findById(id).subscribe({
            next: (response) => {
                this.depoisSalvar = true;
                const multa: number = this.calcularMulta();
                if (!this.novoDado) {
                    response.dtLocacao = new Date(response.dtLocacao);
                    response.dtDevolucaoPrevista = new Date(response.dtDevolucaoPrevista);
                    response.dtDevolucaoEfetiva = new Date(response.dtDevolucaoEfetiva);
                    response.multaCobrada = multa;
                }
                const valorTotal: number = response.multaCobrada + response.valorCobrado;
                console.log(valorTotal)
                this.formLocacao.get('valorTotal')?.setValue(valorTotal);
                this.formLocacao.get('multaCobrada')?.setValue(multa);
                this.formLocacao.patchValue(response);
                response.valorCobrado = valorTotal;
            }
        });
        console.log('****************')
        console.log(this.formLocacao.get('valorTotal')?.value);
        console.log(this.formLocacao.get('multaCobrada')?.value);
        console.log(this.formLocacao.get('valorTotal')?.value);
    }

    public editarForm(id: number): void {
        this.locacaoService.findById(id).subscribe({
                next: (response) => {
                    this.habilitarCampo = false;
                    this.depoisSalvar = true;
                    if (!this.novoDado) {
                        response.dtLocacao = new Date(response.dtLocacao);
                        response.dtDevolucaoPrevista = new Date(response.dtDevolucaoPrevista);
                        response.dtDevolucaoEfetiva = new Date(response.dtDevolucaoEfetiva);
                    }
                    this.formLocacao.patchValue(response);
                },
            }
        );
    }

    public setDataFormatoData(dtLocacao: Date): string {
        return dtLocacao ? dtLocacao.toLocaleDateString() : '__/__/____';
    }

    public fecharForm(): void {
        this.depoisSalvar = false;
        this.formLocacao.reset();
        this.formLocacao.enable();
        this.resForm.emit();
    }

    public setarValorDataPrevista(): void {
        this.idItem = this.formLocacao.get('idItem')?.value;
        this.setPriceItem(this.idItem);
        this.setDeadline(this.idItem);
    }

    private setPriceItem(id: number): void {
        this.itemService.valueOfItemLease(id).subscribe((valor)=> {
            this.formLocacao.get('valorCobrado')?.setValue(valor);
            this.formLocacao.get('valorTotal')?.setValue(valor);
        });
    }

    private setDeadline(id: number): void {
        this.itemService.returnDeadlineItemLease(id).subscribe((prazo) => {
            this.dtDevolucaoPrevista = this.setarDataDevolucaoPresvista(this.dtLocacao, prazo);
            FuncoesUtil.editarFormatoData(this.dtDevolucaoPrevista);
        });
    }

    private setarDataDevolucaoPresvista(dtLocacao: Date, prazoDias?: any): Date {
        const dataDevolucaoPrevista: Date = FuncoesUtil.calcularDataDevolucaoPresvista(dtLocacao, prazoDias);
        this.formLocacao.get('dtDevolucaoPrevista')?.setValue(dataDevolucaoPrevista);
        return dataDevolucaoPrevista;
    }

    calcularMulta(): number {
        const dataAtual: Date = new Date();
        this.dtDevolucaoPrevista = this.formLocacao.get('dtDevolucaoPrevista')?.value;
        const status = this.formLocacao.get('status')?.value;
        const diasPassados: number = FuncoesUtil.diferencaDatas(dataAtual, this.dtDevolucaoPrevista);

        console.log(dataAtual);
        console.log(this.dtDevolucaoPrevista);
        console.log(status);
        console.log(diasPassados);
        if (diasPassados > 0 && status.equals(true)) {
            return (this.valorTotalLocacao * (diasPassados * 0.5)) + this.valorTotalLocacao;
        } else {
            return 0.0;
        }
    }
}
