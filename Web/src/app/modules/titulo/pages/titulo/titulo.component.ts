import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TituloModel} from "../../../../model/titulo.model";
import {TituloService} from "../../../../shared/service/titulo.service";
import {ColunaModel} from "../../../../model/util/coluna.model";
import {SelectItem} from "primeng/api";

@Component({
    selector: 'app-titulo',
    templateUrl: './titulo.component.html',
    styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {

    public colunas: ColunaModel[] = [];
    public categoriasDropDown: SelectItem[];
    public classesDropDown: SelectItem[];
    public diretoresDropDown: SelectItem[];
    public atoresDropDown: SelectItem[];

    public formTituloFilme: FormGroup;
    public novoTituloFilme: TituloModel;

    public listarTitulos: boolean = false;
    public atorSelecionado: string;


    @Input() tituloFilmeModel: TituloModel;
    @Output() resForm: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private builder: FormBuilder,
        private tituloService: TituloService
    ) {
    }

    ngOnInit(): void {
        this.novoFormulario();
        this.colunasTabelaElenco();
    }

    public colunasTabelaElenco(): void {
        this.colunas = [
            new ColunaModel('elenco', 'Elenco'),
            new ColunaModel('acoes', 'Ações', '132px')
        ]
    }

    public novoFormulario(): void {
        this.formTituloFilme = this.builder.group({
            id: [null],
            nome: ['', [Validators.required], [Validators.minLength(5)]],
            ano: ['', [Validators.required]],
            sinopse: ['', [Validators.required], [Validators.minLength(10)], [Validators.maxLength(400)]],
            idCategoria: ['', [Validators.required]],
            idClasse: ['', [Validators.required]],
            idDiretor: ['', [Validators.required]],
            idAtores: ['', [Validators.required]]
        });
    }

    public salvarFormulario(): void {
        this.novoTituloFilme = this.formTituloFilme.getRawValue();
        this.tituloService.insert(this.novoTituloFilme).subscribe({
            next: () => {
                this.fecharForm();
                this.listarTitulos = true;
            },
            error: (error) => {
                console.log(error);
            }
        });
    }

    public editarTituloFilme(id: number): void {
        this.tituloService.findById(id).subscribe({
                next: (response) => {
                    this.formTituloFilme.patchValue(response);
                },
                error: (error) => {
                    console.log(error);
                },
            }
        );
    }

    public fecharForm(): void {
        this.formTituloFilme.reset();
        this.resForm.emit();
    }
}
