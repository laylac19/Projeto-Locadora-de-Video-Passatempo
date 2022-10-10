import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ItemModel} from "../../../../model/item.model";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

    formItem: FormGroup;
    novoItem: ItemModel;

    listarItens: boolean = false;

    @Input() itemModel: ItemModel;
    @Output() resForm: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private builder: FormBuilder,
    ) {
    }

    ngOnInit(): void {
        this.novoFormulario();
    }

    public novoFormulario(): void {
        this.formItem = this.builder.group({
            id: [null],
            numeroSerie: ['', [Validators.required], [Validators.minLength(6)], [Validators.maxLength(6)]],
            dtAquisicao: [null, [Validators.required]],
            tipoItem: ['', [Validators.required]],
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
