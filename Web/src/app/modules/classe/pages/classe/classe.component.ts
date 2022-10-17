import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClasseModel} from "../../../../model/classe.model";
import {ClasseService} from "../../../../shared/service/classe.service";

@Component({
    selector: 'app-classe',
    templateUrl: './classe.component.html',
    styleUrls: ['./classe.component.scss']
})
export class ClasseComponent implements OnInit {

    public formClasse: FormGroup;
    public novaClasse: ClasseModel;

    public listarClasses: boolean = false;

    @Input() classeModel: ClasseModel;
    @Output() resForm: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private builder: FormBuilder,
        private service: ClasseService,
    ) {
    }

    ngOnInit(): void {
        this.novoFormulario();
    }

    public novoFormulario(): void {
        this.formClasse = this.builder.group({
            id: [null],
            nomeClasse: ['', [Validators.required], [Validators.minLength(2)]],
            valor: [0, [Validators.required]],
            prazoDevolucao: ['', [Validators.required]]
        });
    }

    public salvarFormulario(): void {
        this.novaClasse = this.formClasse.getRawValue();
        this.service.insert(this.novaClasse).subscribe({
            next: () => {
                this.fecharForm();
                this.listarClasses = true;
            },
            error: (error) => {
                console.log(error);
            }
        })
    }

    public editarForm(id: number): void {
        this.service.findById(id).subscribe({
                next: (response) => {
                    this.formClasse.patchValue(response);
                },
                error: (error) => {
                    console.log(error);
                },
            }
        );
    }

    public fecharForm(): void {
        this.formClasse.reset();
        this.resForm.emit();
    }
}
