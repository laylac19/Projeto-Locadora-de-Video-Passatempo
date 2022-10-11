export class EntidadeUtil {

    static readonly ATOR = new EntidadeUtil(1, 'Ator');
    static readonly CLASSE = new EntidadeUtil(2, 'Classe');
    static readonly DIRETOR = new EntidadeUtil(3, 'Diretor');
    static readonly TITULO = new EntidadeUtil(3, 'Filme');
    static readonly ITEM_TIULO = new EntidadeUtil(3, 'Título Filme');


    static values = [
        EntidadeUtil.ATOR,
        EntidadeUtil.CLASSE,
        EntidadeUtil.DIRETOR,
        EntidadeUtil.TITULO,
        EntidadeUtil.ITEM_TIULO
    ];

    constructor(
        public id: number,
        public descricao: string
    ) {
    }
}
