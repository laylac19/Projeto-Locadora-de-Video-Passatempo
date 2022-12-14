import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {SidemenuModel} from "../../shared/models/sidemenu.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginModel} from "../../model/login.model";
import {MensagensConfirmacao} from "../../shared/util/msgConfirmacaoDialog.util";
import {MensagensUtil} from "../../shared/util/mensagens.util";
import {MensagensProntasEnumModel} from "../../shared/util/enum/mensagensProntasEnum.model";

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
    public formLogin: FormGroup;
    public login: LoginModel;

    public tituloModal: string = 'Realizar Login';
    public email: string;
    public senha: string;

    public logRealizado: boolean;

    @Input() public configuracaoMenuLateral?: SidemenuModel;
    @Input() display = false;
    @Output() resForm: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private confirmMessage: MensagensConfirmacao,
        private builder: FormBuilder,
        private message: MensagensUtil,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.novoFormulario();
    }

    public alternarVisibilidadeMenuLateral(): void {
        if (this.configuracaoMenuLateral) {
            this.configuracaoMenuLateral.visivel = !this.configuracaoMenuLateral.visivel;
            this.router.navigateByUrl('/Locacao');
        }
    }

    public fecharMenuLateral(): void {
        if (this.configuracaoMenuLateral) {
            this.configuracaoMenuLateral.visivel = !this.configuracaoMenuLateral.visivel;
        }
    }

    public novoFormulario(): void {
        this.fecharMenuLateral();
        this.formLogin = this.builder.group({
            email: ['', [Validators.required]],
            senha: ['', [Validators.required, Validators.minLength(3)]]
        });
    }

    public novoLogin(): void {
        this.formLogin.reset();
        this.display = true;
    }

    public fecharForm(): void {
        this.formLogin.reset();
        this.resForm.emit();
        this.display = false;
    }

    public realizarLogin() {
        this.email = this.formLogin.get('email')?.value;
        this.senha = this.formLogin.get('senha')?.value;
        // if (this.email === "admin@admin.com" && this.senha === 'admin') {
        if (this.email === "admin" && this.senha === 'admin') {
            this.logRealizado = true;
            this.fecharForm();
            this.message.mensagemSucesso(MensagensProntasEnumModel.LOGIN_SUCESSO.descricao);
            this.router.navigate(['/Locacao']);
            this.alternarVisibilidadeMenuLateral();
        } else {
            alert('Usuário Inválido');
        }
    }

    public confirmarAcao(): void {
        this.confirmMessage.confirmarDialogEncerrarSessao(() => this.encerrarSessaoFuncionario());
    }

    public encerrarSessaoFuncionario() {
        this.fecharForm();
        this.fecharMenuLateral();
        this.message.mensagemSucesso(MensagensProntasEnumModel.DESLOGAR_SUCESSO.descricao);
        this.router.navigate(['/']);
        this.logRealizado = false;
    }
}
