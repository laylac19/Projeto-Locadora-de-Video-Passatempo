package com.locadora.projeto.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class AtorListDTO implements Serializable {
    private Integer id;
    private String nomeAtor;
}