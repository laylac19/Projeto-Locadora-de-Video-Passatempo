package com.locadora.projeto.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class TituloListDTO {

    private Integer id;
    private String nome;
    private Integer ano;
    private String nomeCategoria;
    private String sinopse;
}
