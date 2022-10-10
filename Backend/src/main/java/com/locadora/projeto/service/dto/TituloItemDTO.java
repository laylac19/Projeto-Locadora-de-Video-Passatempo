package com.locadora.projeto.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class TituloItemDTO implements Serializable {

    private Integer idTitulo;
    private Integer idItem;
}
