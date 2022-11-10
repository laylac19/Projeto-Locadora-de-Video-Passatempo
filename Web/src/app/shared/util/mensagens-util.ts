import {Injectable} from '@angular/core';
import {MessageService} from "primeng/api";

@Injectable()
export class MensagensUtil {

    constructor(private messageService: MessageService) {
    }

    mensagemErro(message: string, header: string, accept?: () => void, acceptLabel?: string, rejectLabel?: string, key?: string): void {
        this.messageService.add({
            severity: "error",
            summary: header,
            detail: message,
            closable: true,
        });
    }

    mensagemSucesso(message: string, header: string, accept?: () => void, acceptLabel?: string, rejectLabel?: string, key?: string): void {
        this.messageService.add({
            severity: "success",
            summary: header,
            detail: message
        });
    }
}
