import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AtorModel} from "../../../../model/ator.model";
import {AtorService} from "../../../../shared/service/ator.service";

@Component({
    selector: 'app-ator',
    templateUrl: './ator.component.html',
    styleUrls: ['./ator.component.scss']
})
export class AtorComponent implements OnInit {

    formAtor: FormGroup;
    novoAtor: AtorModel;

    listarAtores: boolean = false;

    @Input() atorModel: AtorModel;
    @Output() resForm: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private builder: FormBuilder,
        private service: AtorService,
    ) {
    }

    ngOnInit(): void {
        this.novoFormulario();
    }

    public novoFormulario(): void {
        this.formAtor = this.builder.group({
            id: [null],
            nomeAtor: ['', [Validators.required], [Validators.minLength(2)]]
        });
    }

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
}
