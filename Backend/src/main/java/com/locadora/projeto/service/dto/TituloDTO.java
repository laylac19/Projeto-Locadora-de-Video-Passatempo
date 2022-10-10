package com.locadora.projeto.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
public class TituloDTO implements Serializable {

    private Integer id;
    private String nome;
    private Integer ano;
    private String sinopse;
    private Integer idCategoria;
    private Integer idClasse;

}
