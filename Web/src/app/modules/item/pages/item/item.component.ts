import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ItemModel} from "../../../../model/item.model";
import {ItemService} from "../../../../shared/service/item.service";
import {SelectItem} from "primeng/api";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

    public formItem: FormGroup;
    public novoItem: ItemModel;

    public listarItens: boolean = false;

    public titulosDropDown: SelectItem[];
    public tipoItemDropDown: SelectItem[];

    @Input() itemModel: ItemModel;
    @Output() resForm: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private builder: FormBuilder,
        private itemService: ItemService
    ) {
    }

    ngOnInit(): void {
        this.novoFormulario();
        this.preencherDropdowns();
    }

    public preencherDropdowns(): void {
        this.dropDownItem();
    }

    public dropDownTItulo(): void {

    }

    public dropDownItem(): void {
        this.itemService.fillItenDropdown().subscribe((data)=> {
            this.tipoItemDropDown = data;
        })
    }

    public novoFormulario(): void {
        this.formItem = this.builder.group({
            id: [null],
            numeroSerie: ['', [Validators.required], [Validators.minLength(6)], [Validators.maxLength(6)]],
            data: [null, [Validators.required]],
            tipoItem: ['', [Validators.required]],
        });
    }

    public salvarFormulario(): void {
        this.novoItem = this.formItem.getRawValue();
        this.itemService.insert(this.novoItem).subscribe({
            next: () => {
                this.fecharForm();
                this.listarItens = true;
            },
            error: (error) => {
                console.log(error);
            }
        });
    }

    public editarItem(id: number): void {
        this.itemService.findById(id).subscribe({
                next: (response) => {
                    this.formItem.patchValue(response);
                },
                error: (error) => {
                    console.log(error);
                },
            }
        );
    }

    public fecharForm(): void {
        this.formItem.reset();
        this.resForm.emit();
    }
}
