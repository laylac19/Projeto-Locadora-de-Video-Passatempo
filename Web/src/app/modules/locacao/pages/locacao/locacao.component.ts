import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocacaoModel} from "../../../../model/locacao.model";
import {ClasseService} from "../../../../shared/service/classe.service";
import {SelectItem} from "primeng/api";

@Component({
    selector: 'app-locacao',
    templateUrl: './locacao.component.html',
    styleUrls: ['./locacao.component.scss']
})
export class LocacaoComponent implements OnInit {

    public formClasse: FormGroup;
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
    ) {
    }

    ngOnInit(): void {
        this.novoFormulario();
    }

    public novoFormulario(): void {
        this.formClasse = this.builder.group(({
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

    // public salvarFormulario(): void {
    //     this.novaClasse = this.formClasse.getRawValue();
    //     this.service.insert(this.novaClasse).subscribe({
    //         next: () => {
    //             this.fecharForm();
    //             this.listarClasses = true;
    //         },
    //         error: (error) => {
    //             console.log(error);
    //         }
    //     })
    // }
    //
    // public editarForm(id: number): void {
    //     this.service.findById(id).subscribe({
    //             next: (response) => {
    //                 this.formClasse.patchValue(response);
    //             },
    //             error: (error) => {
    //                 console.log(error);
    //             },
    //         }
    //     );
    // }

    public fecharForm(): void {
        this.formClasse.reset();
        this.resForm.emit();
    }
}
