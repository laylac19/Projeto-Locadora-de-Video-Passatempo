export class MensagensProntasEnumModel {
    static readonly CADASTRO_ATOR = new MensagensProntasEnumModel(0, 'Ator Cadastrado Com Sucesso.');
    static readonly CADASTRO_CLASSE = new MensagensProntasEnumModel(1, 'Classe Cadastrada Com Sucesso.');
    static readonly CADASTRO_CLIENTE = new MensagensProntasEnumModel(2, 'Cliente Cadastrado Com Sucesso.');
    static readonly CADASTRO_DIRETOR = new MensagensProntasEnumModel(3, 'Diretor Cadastrado Com Sucesso.');
    static readonly CADASTRO_ITEM = new MensagensProntasEnumModel(4, 'Item Cadastrado Com Sucesso.');
    static readonly CADASTRO_LOCACAO = new MensagensProntasEnumModel(5, 'Locação Realizada Com Sucesso.');
    static readonly CADASTRO_SOCIO = new MensagensProntasEnumModel(6, 'Sócio Cadastrado Com Sucesso.');

    static readonly ATUALIZAR_ATOR = new MensagensProntasEnumModel(7, 'Ator Atualizado Com Sucesso.');
    static readonly ATUALIZAR_CLASSE = new MensagensProntasEnumModel(8, 'Classe Atualizada Com Sucesso.');
    static readonly ATUALIZAR_CLIENTE = new MensagensProntasEnumModel(9, 'Cliente Atualizado Com Sucesso.');
    static readonly ATUALIZAR_DIRETOR = new MensagensProntasEnumModel(10, 'Diretor Atualizado Com Sucesso.');
    static readonly ATUALIZAR_ITEM = new MensagensProntasEnumModel(11, 'Item Atualizado Com Sucesso.');
    static readonly ATUALIZAR_LOCACAO = new MensagensProntasEnumModel(12, 'Locação Atualizada Com Sucesso.');
    static readonly ATUALIZAR_SOCIO = new MensagensProntasEnumModel(13, 'Sócio Atualizado Com Sucesso.');

    static readonly FALHA_ATOR = new MensagensProntasEnumModel(14, 'Falha ao Salvar Ator.');
    static readonly FALHA_CLASSE = new MensagensProntasEnumModel(15, 'Falha ao Salvar Classe.');
    static readonly FALHA_CLIENTE = new MensagensProntasEnumModel(16, 'Falha ao Salvar Cliente.');
    static readonly FALHA_DIRETOR = new MensagensProntasEnumModel(17, 'Falha ao Salvar Diretor.');
    static readonly FALHA_ITEM = new MensagensProntasEnumModel(18, 'Falha ao Salvar Item.');
    static readonly FALHA_LOCACAO = new MensagensProntasEnumModel(19, 'Falha ao Salvar Locação.');
    static readonly FALHA_SOCIO = new MensagensProntasEnumModel(20, 'Falha ao Salvar Sócio.');

    static values = []

    constructor(
        public index: number,
        public descricao: string
    ) {
    }
}
