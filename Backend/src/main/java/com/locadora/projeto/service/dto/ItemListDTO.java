package com.locadora.projeto.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
public class ItemListDTO implements Serializable {
    private Integer id;
    private String numeroSerie;
    private Date dtAquisicao;
    private String tipoItem;
}