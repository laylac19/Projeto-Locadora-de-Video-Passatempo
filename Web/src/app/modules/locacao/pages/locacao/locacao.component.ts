import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocacaoModel} from "../../../../model/locacao.model";
import {ClasseService} from "../../../../shared/service/classe.service";
import {SelectItem} from "primeng/api";
import {MensagensUtil} from "../../../../shared/util/mensagens-util";

@Component({
    selector: 'app-locacao',
    templateUrl: './locacao.component.html',
    styleUrls: ['./locacao.component.scss']
})
export class LocacaoComponent implements OnInit {

    public formLocacao: FormGroup;
    public novaClasse: LocacaoModel;

    public listarLocacoes: boolean = false;

    public dtLocacao: Date = new Date();
    public dtDevolucaoPrevista: Date = new Date();
    public dtDevolucaoEfetiva: Date = new Date();

    public clientesDropDown: SelectItem[];

    @Input() locacaoModel: LocacaoModel;
    @Output() resForm: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private builder: FormBuilder,
        private locacaoService: ClasseService,
        private message: MensagensUtil
    ) {
    }

    ngOnInit(): void {
        this.novoFormulario();
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

    public fecharForm(): void {
        this.formLocacao.reset();
        this.resForm.emit();
    }
}
