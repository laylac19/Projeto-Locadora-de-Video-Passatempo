import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClienteModel} from "../../../../model/cliente.model";
import {ClienteService} from "../../../../shared/service/cliente.service";
import {SelectItem} from "primeng/api";

@Component({
    selector: 'app-cliente-form',
    templateUrl: './cliente-form.component.html',
    styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

    public formCliente: FormGroup;
    public novoCliente: ClienteModel;
    public sexo: SelectItem[];

    public listarClientes: boolean = false;
    public abilitarBotao: boolean = true;
    public novoDado: boolean;
    public numInsc: string;

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
        this.sexo = [
            {label: 'Feminino', value: 1},
            {label: 'Masculino', value: 2},
            {label: 'Prefiro não informar', value: 3},
            {label: 'Outros', value: 4}
        ]
    }

    public novoFormulario(): void {
        this.formCliente = this.builder.group({
            id: [null],
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

    public editarCliente(id: number): void {
        this.clienteService.findById(id).subscribe({
                next: (response) => {
                    !this.novoDado;
                    this.numInsc = response.numeroInscricao;
                    this.formCliente.patchValue(response);
                },
                error: (error) => {
                    console.log(error);
                },
            }
        );
    }

    public visualizarCliente(id: number): void {
        this.clienteService.findById(id).subscribe({
                next: (response) => {
                    !this.novoDado;
                    this.numInsc = response.numeroInscricao;
                    this.formCliente.patchValue(response);
                    this.formCliente.disable();
                    this.abilitarBotao = true;
                },
                error: (error) => {
                    console.log(error);
                },
            }
        );
    }

    public fecharForm(): void {
        this.numInsc = '';
        this.formCliente.reset();
        this.resForm.emit();
    }
}
