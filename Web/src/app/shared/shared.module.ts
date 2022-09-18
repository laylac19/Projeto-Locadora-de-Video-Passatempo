import { NgModule } from '@angular/core';
import { PRIMENG_IMPORTS } from './imports/primeng.imports';
import { ANGULAR_IMPORTS } from './imports/angular.imports';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [],
    imports: [
        PRIMENG_IMPORTS,
        ANGULAR_IMPORTS,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [
        PRIMENG_IMPORTS,
        ANGULAR_IMPORTS,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
