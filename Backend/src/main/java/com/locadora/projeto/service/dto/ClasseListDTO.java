package com.locadora.projeto.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
public class ClasseListDTO implements Serializable {

    private Integer id;
    private String nomeClasse;
    private Double valor;
    private Date prazoDevolucao;
}