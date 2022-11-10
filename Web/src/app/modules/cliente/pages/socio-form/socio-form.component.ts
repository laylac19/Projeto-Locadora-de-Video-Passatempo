import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SelectItem} from "primeng/api";
import {SocioModel} from "../../../../model/socio.model";
import {ClienteService} from "../../../../shared/service/cliente.service";
import {VinculoEntidades} from "../../../../model/vinculo-entidade.model";
import {MensagensUtil} from "../../../../shared/util/mensagens-util";
import {MensagensProntasEnumModel} from "../../../../shared/util/mensagensProntasEnum.model";

@Component({
    selector: 'app-socio-form',
    templateUrl: './socio-form.component.html',
    styleUrls: ['./socio-form.component.scss']
})
export class SocioFormComponent implements OnInit {

    public formSocio: FormGroup;
    public novoSocio: SocioModel;
    public vinculo: VinculoEntidades;

    public listarSocios: boolean = false;
    private listarDependentes: boolean  = false;
    public idSocio: number;
    public idDependente: number;

    public clientesDropDown: SelectItem[];

    @Input() socioModel: SocioModel;
    @Output() resForm: EventEmitter<boolean> = new EventEmitter();


    constructor(
        private builder: FormBuilder,
        private clienteService: ClienteService,
        private message: MensagensUtil
    ) {
    }

    ngOnInit(): void {
        this.novoFormulario();
        this.preencherDropdown();
    }

    public preencherDropdown() {
        this.clienteService.fillNonPartnersCustomersDropdown().subscribe((data) => {
            this.clientesDropDown = data;
        })
    }

    public novoFormulario(): void {
        this.formSocio = this.builder.group({
            id: [null, [Validators.required]],
            cpf: ['', [Validators.required, Validators.minLength(11)]],
            endereco: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(100)]],
            telefone: ['', [Validators.required, Validators.minLength(11)]],
            idDependente: [null, [Validators.required]],
        });
    }

    public salvarFormulario(): void {
        this.novoSocio = this.formSocio.getRawValue();
        this.clienteService.savePartners(this.novoSocio).subscribe({
            next: () => {
                if (this.novoSocio.id) {
                    this.message.mensagemSucesso(MensagensProntasEnumModel.ATUALIZAR_SOCIO.descricao);
                } else {
                    this.message.mensagemSucesso(MensagensProntasEnumModel.CADASTRO_SOCIO.descricao);}
                this.fecharForm();
                this.listarSocios = true;
            },
            error: () => {
                this.message.mensagemErro(MensagensProntasEnumModel.FALHA_SOCIO.descricao);
            }
        })
    }

    public editarForm(id: number): void {
        this.clienteService.findById(id).subscribe({
                next: (response) => {
                    this.formSocio.patchValue(response);
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

    public adicionarDependente(idSocio?: number): void {
        this.idSocio = this.formSocio.get('id')?.value;
        this.idDependente = this.formSocio.get('idDependente')?.value;
        this.vinculo = new VinculoEntidades(this.idSocio, this.idDependente);
        this.clienteService.saveDependent(this.vinculo).subscribe({
            next: () => {
                this.listarDependentes = true;
                this.listarDependentesDeSocio(this.idSocio);
            }
        })
    }

    private listarDependentesDeSocio(idSocio: number) {
        console.log('falta função')
    }
}
