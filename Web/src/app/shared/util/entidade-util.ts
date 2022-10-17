export class EntidadeUtil {

    static readonly ATOR = new EntidadeUtil(1, 'Ator');
    static readonly CLASSE = new EntidadeUtil(2, 'Classe');
    static readonly DIRETOR = new EntidadeUtil(3, 'Diretor');
    static readonly TITULO = new EntidadeUtil(4, 'Filme');
    static readonly ITEM_TITULO = new EntidadeUtil(5, 'Item Filme');


    static values = [
        EntidadeUtil.ATOR,
        EntidadeUtil.CLASSE,
        EntidadeUtil.DIRETOR,
        EntidadeUtil.TITULO,
        EntidadeUtil.ITEM_TITULO
    ];

    constructor(
        public id: number,
        public descricao: string
    ) {
    }
}
