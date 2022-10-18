package com.locadora.projeto.domain.enuns;

import com.locadora.projeto.service.dto.DropdownDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Getter
@AllArgsConstructor
public enum TipoItemEnum {

    FITA(1, "Fita"),
    DVD(2, "DVD"),
    BLUE_RAY(3, "BlueRay");

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

    public static List<DropdownDTO> dropdown(){
        List<DropdownDTO> lista = new ArrayList<>();
        for (TipoItemEnum tipoItemEnum : TipoItemEnum.values()){
            lista.add(new DropdownDTO(tipoItemEnum.getId(), tipoItemEnum.getNome()));
        }
        return lista;
    }

}
