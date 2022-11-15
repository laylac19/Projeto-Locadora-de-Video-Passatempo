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

@Component({
    selector: 'app-locacao',
    templateUrl: './locacao.component.html',
    styleUrls: ['./locacao.component.scss']
})
export class LocacaoComponent implements OnInit {

    public formLocacao: FormGroup;
    public novaClasse: LocacaoModel;
    public vinculo: VinculoEntidades;

    public listarLocacoes: boolean = false;

    public dtLocacao: Date = new Date();
    public dtDevolucaoPrevista: Date = new Date();
    public dtDevolucaoEfetiva: Date = new Date();

    public clientesDropDown: SelectItem[];
    public itensDropdown: SelectItem[];
    public listaIntensLocados: ItemListModel[];
    public colunas: ColunaModel[] = [];

    public idLocacao: number;
    public idItem: number;

    @Input() locacaoModel: LocacaoModel;
    @Output() resForm: EventEmitter<boolean> = new EventEmitter();
    depoisSalvar: any;

    constructor(
        private builder: FormBuilder,
        private locacaoService: ClasseService,
        private clienteService: ClienteService,
        private message: MensagensUtil
    ) {
    }

    ngOnInit(): void {
        this.novoFormulario();
        this.dropDownCliente();
    }

    public dropDownCliente(): void {
        this.clienteService.fillClientsDropDown().subscribe((data) => {
            this.clientesDropDown = data;
        })
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
        }))
    }

    public salvarFormulario(): void {
        this.novaClasse = this.formLocacao.getRawValue();
        // this.locacaoService.insert(this.novaClasse).subscribe({
        //     next: () => {
        //         this.idlocacao = responde.id;
        //         if (this.novaClasse.id) {
        //             this.message.mensagemSucesso(MensagensProntasEnumModel.ATUALIZAR_LOCACAO.descricao);
        //         } else {
        //             this.message.mensagemSucesso(MensagensProntasEnumModel.CADASTRO_LOCACAO.descricao);
        //         }
        //         this.fecharForm();
        //         this.listarLocacoes = true;
        //     },
        //     error: () => {
        //         this.message.mensagemSucesso(MensagensProntasEnumModel.FALHA_LOCACAO.descricao);
        //     }
        // })
    }

    public editarForm(id: number): void {
        this.locacaoService.findById(id).subscribe({
                next: (response) => {
                    this.formLocacao.patchValue(response);
                },
            }
        );
    }

    public setDataAtual(dtLocacao: Date): string {
        return (dtLocacao.getDate() + '/' + dtLocacao.getMonth() + '/' + dtLocacao.getFullYear()).toString();
    }

    public fecharForm(): void {
        this.formLocacao.reset();
        this.resForm.emit();
    }

    adicionarItemNaLocacao() {
        this.idItem = this.formLocacao.get('idItem')?.value;
        this.vinculo = new VinculoEntidades(this.idLocacao, this.idItem);
        // this.locacaoService.insertCastMovie(this.vinculo).subscribe({
        //     next: () => {
        //         this.listarLocacoes = true;
        //         this.listarAtoresElenco(this.idTitulo);
        //     }
        // });
    }

    setDataDevoluvaoPrevista(dtLocacao: Date) {
        return undefined;
    }

    retirarItemLocacao(rowData: any) {
        this.listaIntensLocados = this.listaIntensLocados.slice(rowData.value);
    }
}
