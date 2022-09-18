import { Component, Input } from '@angular/core';
import { SidemenuModel } from 'src/app/shared/models/sidemenu.model';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
    @Input() public configuracaoMenuLateral?: SidemenuModel;

    public alternarVisibilidadeMenuLateral(): void {
        if(this.configuracaoMenuLateral) {
            this.configuracaoMenuLateral.visivel = !this.configuracaoMenuLateral.visivel;
        }
    }
}
