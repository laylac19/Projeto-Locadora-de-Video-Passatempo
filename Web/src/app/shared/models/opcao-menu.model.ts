export class OpcaoMenuModel {
    constructor(
        public icone: string,
        public label: string,
        public tooltip: string,
        public aoClicar: () => void,
    ) {}
}
