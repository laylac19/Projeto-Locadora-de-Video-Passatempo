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
