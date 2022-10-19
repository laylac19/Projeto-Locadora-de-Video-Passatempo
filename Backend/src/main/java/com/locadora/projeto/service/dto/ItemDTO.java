package com.locadora.projeto.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
public class ItemDTO implements Serializable {

    private Integer id;
    private String numeroSerie;
    private LocalDate data;
    private Integer idTitulo;
    private Integer tipoItem;
    private Boolean ativo = true;
}
