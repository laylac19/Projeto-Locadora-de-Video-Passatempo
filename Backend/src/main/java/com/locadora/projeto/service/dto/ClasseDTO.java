package com.locadora.projeto.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class ClasseDTO implements Serializable {

    private Integer id;
    private String nomeClasse;
    private Double valor;
    private Integer prazoDevolucao;
    private Boolean ativo = true;
}