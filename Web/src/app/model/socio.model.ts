import {ClienteModel} from "./cliente.model";

export class SocioModel extends ClienteModel{
    public cpf: string;
    public endereco: string;
    public telefone: string;
}
