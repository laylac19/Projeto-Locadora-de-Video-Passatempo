package com.locadora.projeto.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class AtorDTO implements Serializable {
    private Integer id;
    private String nomeAtor;
    private Boolean ativo = true;
}