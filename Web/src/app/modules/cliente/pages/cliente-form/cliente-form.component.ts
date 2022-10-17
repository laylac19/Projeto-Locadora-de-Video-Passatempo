import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClienteModel} from "../../../../model/cliente.model";

@Component({
    selector: 'app-cliente-form',
    templateUrl: './cliente-form.component.html',
    styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

    public formCliente: FormGroup;
    public novoCliente: ClienteModel;

    public listarClientes: boolean = false;

    @Input() clienteModel: ClienteModel;
    @Output() resForm: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private builder: FormBuilder,
    ) {
    }

    ngOnInit(): void {
        this.novoFormulario();
    }

    public novoFormulario(): void {
        this.formCliente = this.builder.group({
            id: [null],
            numInscricao: ['', [Validators.required]],
            nomeCliente: ['', [Validators.required], [Validators.minLength(2)]],
            dtNascimento: ['', [Validators.required]],
            sexo: ['', [Validators.required]],
            idTipoCliente: ['', [Validators.required]],
            cpf: ['', [Validators.required], [Validators.maxLength(11)]],
            endereco: ['', [Validators.required], [Validators.minLength(20)]],
            telefone: ['', [Validators.required], [Validators.minLength(2)], [Validators.maxLength(11)]],
        });
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
        this.formCliente.reset();
        this.resForm.emit();
    }
}
