import { Component } from '@angular/core';
import { SidemenuModel } from 'src/app/shared/models/sidemenu.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public configuracaoMenuLateral: SidemenuModel = new SidemenuModel();
}
