package com.locadora.projeto.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class DiretorListDTO implements Serializable {

    private Integer id;
    private String nomeDiretor;
}