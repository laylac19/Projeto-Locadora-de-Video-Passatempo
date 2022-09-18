export class EntidadeUtil {

    static readonly ATOR = new EntidadeUtil(1, 'Ator');
    static readonly CLASSE = new EntidadeUtil(2, 'Classe');
    static readonly DIRETOR = new EntidadeUtil(3, 'Diretor');


    static values = [
        EntidadeUtil.ATOR,
        EntidadeUtil.CLASSE,
        EntidadeUtil.DIRETOR
    ];

    constructor(
        public id: number,
        public descricao: string
    ) {
    }
}
