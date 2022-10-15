export class TituloModalEnum {
    static readonly NOVO = new TituloModalEnum(0, 'Novo');
    static readonly VISUALIZAR = new TituloModalEnum(1, 'Visualizar');
    static readonly EDITAR = new TituloModalEnum(2, 'Editar');

    static readonly NOVO_ATOR = new TituloModalEnum(3, 'Novo Ator');
    static readonly EDITAR_ATOR = new TituloModalEnum(4, 'Editar Ator');

    static readonly NOVA_CLASSE = new TituloModalEnum(5, 'Nova Classe');
    static readonly EDITAR_CLASSE = new TituloModalEnum(6, 'Editar Classe');

    static readonly NOVO_DIRETOR = new TituloModalEnum(7, 'Novo Diretor');
    static readonly EDITAR_DIRETOR = new TituloModalEnum(8, 'Editar Diretor');

    static readonly NOVO_TITULO = new TituloModalEnum(9, 'Novo Filme');
    static readonly EDITAR_TITULO = new TituloModalEnum(10, 'Editar Filme');

    static readonly NOVO_ITEM = new TituloModalEnum(11, 'Novo Item');
    static readonly EDITAR_ITEM = new TituloModalEnum(12, 'Editar Item');

    static readonly NOVO_CLIENTE = new TituloModalEnum(12, 'Novo Cliente');
    static readonly EDITAR_CLIENTE = new TituloModalEnum(13, 'Editar Cliente');


    static values = [
        TituloModalEnum.NOVO,
        TituloModalEnum.VISUALIZAR,
        TituloModalEnum.EDITAR,
        TituloModalEnum.NOVO_ATOR,
        TituloModalEnum.EDITAR_ATOR,
        TituloModalEnum.NOVA_CLASSE,
        TituloModalEnum.EDITAR_CLASSE,
        TituloModalEnum.NOVO_DIRETOR,
        TituloModalEnum.EDITAR_DIRETOR,
        TituloModalEnum.NOVO_TITULO,
        TituloModalEnum.EDITAR_TITULO,
        TituloModalEnum.NOVO_ITEM,
        TituloModalEnum.EDITAR_ITEM,
        TituloModalEnum.NOVO_CLIENTE,
        TituloModalEnum.EDITAR_CLIENTE
    ];

    private constructor(
        public index: number,
        public header: string,
    ) {
    }

    static obterPorIndex(index: number): TituloModalEnum | any {
        return TituloModalEnum.values.find(titulo => titulo.index === index);
    }

    static setTitulo(id: number): TituloModalEnum {
        return TituloModalEnum.obterPorIndex(id);
    }
}
