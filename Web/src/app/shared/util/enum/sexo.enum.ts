export class SexoEnum {
    static readonly FEMININO = new SexoEnum(1, 'Feminino');
    static readonly MASCULINO = new SexoEnum(2, 'Masculino');
    static readonly NAO_INFORMAR = new SexoEnum(3, 'Prefiro não informar');
    static readonly OUTROS = new SexoEnum(4, 'Outros');

    static values = [
        SexoEnum.FEMININO,
        SexoEnum.MASCULINO,
        SexoEnum.NAO_INFORMAR,
        SexoEnum.OUTROS
    ]

    constructor(
        public index: number,
        public descricao: string
    ) {
    }

    static obterPorIndex(index: number): SexoEnum | any {
        return SexoEnum.values.find(sexo => sexo.index === index);
    }

    static setClasse(id: number): SexoEnum {
        return SexoEnum.obterPorIndex(id);
    }
}
