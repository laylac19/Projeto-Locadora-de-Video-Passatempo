package com.locadora.projeto.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class ClienteDTO implements Serializable {

    private Integer id;
    private String numeroInscricao;
    private String nome;
    private LocalDate dataNascimento;
    private Integer sexo;
    private Boolean ativo;

}
