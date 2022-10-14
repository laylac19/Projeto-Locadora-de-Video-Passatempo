import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TituloModel} from "../../../../model/titulo.model";
import {TituloService} from "../../../../shared/service/titulo.service";
import {ColunaModel} from "../../../../model/util/coluna.model";
import {SelectItem} from "primeng/api";
import {ClasseService} from "../../../../shared/service/classe.service";
import {DiretorService} from "../../../../shared/service/diretor.service";
import {AtorService} from "../../../../shared/service/ator.service";

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


    @Input() tituloFilmeModel: TituloModel;
    @Output() resForm: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private builder: FormBuilder,
        private tituloService: TituloService,
        private classeService: ClasseService,
        private diretorService: DiretorService,
        private atorService: AtorService
    ) {
    }

    ngOnInit(): void {
        this.novoFormulario();
        this.colunasTabelaElenco();
        this.preencherDropdowns();
    }

    public colunasTabelaElenco(): void {
        this.colunas = [
            new ColunaModel('elenco', 'Elenco'),
            new ColunaModel('acoes', 'Ações', '132px')
        ]
    }

    public preencherDropdowns(): void {
        this.dropdownClasses();
        this.dropdownDiretores();
        this.dropdownAtores();
    }

    public dropdownClasses(): void {
        this.classeService.fillDropdown().subscribe((data)=>{
            this.classesDropDown = data;
        });
    }

    public dropdownDiretores(): void {
        this.diretorService.fillDropdown().subscribe((data)=>{
            this.diretoresDropDown = data;
        });
    }

    public dropdownAtores(): void {
        this.atorService.fillDropdown().subscribe((data)=>{
            this.atoresDropDown = data;
        });
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
            idAtor: ['', [Validators.required]]
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
