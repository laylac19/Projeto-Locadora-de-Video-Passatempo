import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DiretorModel} from "../../../../model/diretor.model";
import {DiretorService} from "../../../../shared/service/diretor.service";

@Component({
    selector: 'app-diretor',
    templateUrl: './diretor.component.html',
    styleUrls: ['./diretor.component.scss']
})
export class DiretorComponent implements OnInit {

    formDiretor: FormGroup;
    novoDiretor: DiretorModel;

    listarDiretores: boolean = true;

    @Input() diretorModel: DiretorModel;
    @Output() resForm: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private builder: FormBuilder,
        private service: DiretorService,
    ) {
    }

    ngOnInit(): void {
        this.novoFormulario();
    }

    public novoFormulario(): void {
        this.formDiretor = this.builder.group({
            id: [null],
            nomeDiretor: ['', [Validators.required]]
        });
    }

    public salvarFormulario(): void {
        this.novoDiretor = this.formDiretor.getRawValue();
        this.service.insert(this.novoDiretor).subscribe({
            next: () => {
                this.fecharForm();
                this.listarDiretores = true;
            },
            error: (error) => {
                console.log(error);
            }
        });
    }

    public editarDiretor(id: number): void {
        this.service.findById(id).subscribe({
                next: (response) => {
                    this.formDiretor.patchValue(response);
                },
                error: (error) => {
                    console.log(error);
                },
            }
        );
    }

    public fecharForm(): void {
        this.formDiretor.reset();
        this.resForm.emit();
    }
}
