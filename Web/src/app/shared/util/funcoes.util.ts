export class FuncoesUtil {

    public static editarFormatoData(data: Date): string {
        return data.toLocaleDateString();
    }

    public static converterLocalDate(date: Date | string | number): Date | null {
        if (date == null || date.toString().trim() === '') {
            return null;
        }
        return date instanceof Date ? new Date(date.getTime()) : new Date(`${ date }T00:00:00-03:00`);
    }

    public static calcularDataDevolucaoPresvista(dataLocacao: Date, prazoDiasClasse: any): Date {
        const copiaDaData = new Date(dataLocacao);
        copiaDaData.setDate(copiaDaData.getDate() + prazoDiasClasse);
        return copiaDaData;
    }

    public static diferencaDatas(date1: Date, date2: Date): number {
        return (date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);
    }
}
