package com.locadora.projeto.domain.enuns;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.HashMap;
import java.util.Map;

@Getter
@AllArgsConstructor
public enum TipoItemEnum {

    FITA(1, "FITA"),
    DVD(2, "DVD"),
    BLUE_RAY(3, "BLUERAY");

    private final Integer id;
    private final String nome;

    private static final Map<Integer, TipoItemEnum> buscarNomeTipo = new HashMap<>();

    static {
        for (TipoItemEnum tipoItemEnum : TipoItemEnum.values()){
            buscarNomeTipo.put(tipoItemEnum.getId(), tipoItemEnum);
        }
    }

    public static String buscarNomeEnum(Integer valor){
        return buscarNomeTipo.get(valor).getNome();
    }

}
