import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SelectItem} from "primeng/api";
import {SocioModel} from "../../../../model/socio.model";
import {ClienteService} from "../../../../shared/service/cliente.service";

@Component({
    selector: 'app-socio-form',
    templateUrl: './socio-form.component.html',
    styleUrls: ['./socio-form.component.scss']
})
export class SocioFormComponent implements OnInit {

    public formSocio: FormGroup;
    public novoSocio: SocioModel;

    public listarSocios: boolean = false;

    public clientesDropDown: SelectItem[];

    @Input() socioModel: SocioModel;
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
        this.clienteService.fillNonPartnersCustomersDropdown().subscribe(data => {
            this.clientesDropDown = data;
        })
    }

    public novoFormulario(): void {
        this.formSocio = this.builder.group({
            idCliente: [null],
            cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
            endereco: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(100)]],
            telefone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
        });
    }

    public salvarFormulario(): void {
        this.novoSocio = this.formSocio.getRawValue();
        console.log(this.novoSocio);
        this.clienteService.insert(this.novoSocio).subscribe({
            next: () => {
                this.fecharForm();
                this.listarSocios = true;
            },
            error: (error) => {
                console.log(error);
            }
        })
    }

    public editarForm(id: number): void {
        this.clienteService.findById(id).subscribe({
                next: (response) => {
                    this.formSocio.patchValue(response);
                },
                error: (error) => {
                    console.log(error);
                },
            }
        );
    }

    public visualizarDadosSocio(id: number) {
        this.clienteService.findById(id).subscribe({
            next: (response) => {
                this.formSocio.disabled;
                this.formSocio.patchValue(response);
            },
        })
    }

    public fecharForm(): void {
        this.formSocio.reset();
        this.resForm.emit();
    }

    public adicionarDependente(id?: number): void {
        console.log(id);
    }

}
