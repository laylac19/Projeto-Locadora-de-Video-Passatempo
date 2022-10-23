import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClienteModel} from "../../../../model/cliente.model";
import {ClienteService} from "../../../../shared/service/cliente.service";

@Component({
    selector: 'app-cliente-form',
    templateUrl: './cliente-form.component.html',
    styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

    public formCliente: FormGroup;
    public novoCliente: ClienteModel;

    public listarClientes: boolean = false;

    public dataNascimento: Date = new Date();

    @Input() clienteModel: ClienteModel;
    @Output() resForm: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private builder: FormBuilder,
        private clienteService: ClienteService
    ) {
    }

    ngOnInit(): void {
        this.novoFormulario();
        this.preencherDropdown();
    }

    public preencherDropdown() {
        // SexoModel.values.map((data) => {
        //     console.log(data);
        // });
    }

    public novoFormulario(): void {
        this.formCliente = this.builder.group({
            id: [null],
            numInscricao: [null],
            nome: ['', [Validators.required, Validators.minLength(2)]],
            dataNascimento: ['', [Validators.required]],
            sexo: ['', [Validators.required]],
        });
    }

    public salvarFormulario(): void {
        this.novoCliente = this.formCliente.getRawValue();
        this.clienteService.insert(this.novoCliente).subscribe({
            next: () => {
                this.fecharForm();
                this.listarClientes = true;
            },
            error: (error) => {
                console.log(error);
            }
        })
    }

    public editarForm(id: number): void {
        this.clienteService.findById(id).subscribe({
                next: (response) => {
                    this.formCliente.patchValue(response);
                },
                error: (error) => {
                    console.log(error);
                },
            }
        );
    }

    public fecharForm(): void {
        this.formCliente.reset();
        this.resForm.emit();
    }

    public adicionarDependente(id?: number): void {
        console.log(id);
    }
}
