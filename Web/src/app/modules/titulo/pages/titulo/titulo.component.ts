import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TituloModel} from "../../../../model/titulo.model";
import {AtorModel} from "../../../../model/ator.model";
import {ClasseModel} from "../../../../model/classe.model";
import {DiretorModel} from "../../../../model/diretor.model";

@Component({
    selector: 'app-titulo',
    templateUrl: './titulo.component.html',
    styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {

    formTitulo: FormGroup;
    novoTitulo: TituloModel;

    listaAtores: AtorModel[];
    listaClasses: ClasseModel[];
    listaDiretores: DiretorModel[];

    atoresSelecionados: AtorModel[];
    classeTitulo: ClasseModel;
    diretorTitulo: DiretorModel;

    listarTitulos: boolean = false;

    @Input() tituloModel: TituloModel;
    @Output() resForm: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private builder: FormBuilder,
    ) {
    }

    ngOnInit(): void {
        this.novoFormulario();
    }

    public novoFormulario(): void {
        this.formTitulo = this.builder.group({
            id: [null],
            nomeTitulo: ['', [Validators.required], [Validators.minLength(5)]],
            ano: ['', [Validators.required]],
            sinopse: ['', [Validators.required], [Validators.minLength(10)], [Validators.maxLength(400)]],
            categoria: ['', [Validators.required], [Validators.minLength(5)], [Validators.maxLength(30)]],
            idAtor: ['', [Validators.required]],
            idDiretor: ['', [Validators.required]],
            idClasse: ['', [Validators.required]]
        });
    }

    /*
    public salvarFormulario(): void {
        this.novoAtor = this.formAtor.getRawValue();
        this.service.insert(this.novoAtor).subscribe({
            next: () => {
                this.fecharForm();
                this.listarAtores = true;
            },
            error: (error) => {
                console.log(error);
            }
        });
    }

    public editarAtor(id: number): void {
        this.service.findById(id).subscribe({
                next: (response) => {
                    this.formAtor.patchValue(response);
                },
                error: (error) => {
                    console.log(error);
                },
            }
        );
    }

    public fecharForm(): void {
        this.formAtor.reset();
        this.resForm.emit();
    }
     */
}
