import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClienteModel} from "../../../../model/cliente.model";
import {AtorService} from "../../../../shared/service/ator.service";

@Component({
    selector: 'app-cliente',
    templateUrl: './cliente.component.html',
    styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

    public formCliente: FormGroup;
    public novoCliente: ClienteModel;

    public listarCLientes: boolean = false

    @Input() clienteModel: ClienteModel;
    @Output() resForm: EventEmitter<boolean> = new EventEmitter();


    constructor(
        private builder: FormBuilder,
        private service: AtorService,
    ) {
    }

    ngOnInit(): void {
    }

    public novoFormulario(): void {
        this.formCliente = this.builder.group({
            id: [null],
            numInscricao: [0, [Validators.required]],
            nomeCliente: ['', [Validators.required], [Validators.minLength(3)]],
            dtNascimento: ['', [Validators.required]],
            sexo: ['', [Validators.required]],
            idTipoCliente: ['', [Validators.required]],
            cpf: ['', [Validators.required], [Validators.minLength(11)], Validators.maxLength(11)],
            endereco: ['', [Validators.required]],
            telefone: ['', [Validators.required], [Validators.maxLength(11)]],
        });
    }

    // public salvarFormulario(): void {
    //     this.novoAtor = this.formAtor.getRawValue();
    //     this.service.insert(this.novoAtor).subscribe({
    //         next: () => {
    //             this.fecharForm();
    //             this.listarAtores = true;
    //         },
    //         error: (error) => {
    //             console.log(error);
    //         }
    //     });
    // }
    //
    // public editarAtor(id: number): void {
    //     this.service.findById(id).subscribe({
    //             next: (response) => {
    //                 this.formAtor.patchValue(response);
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
