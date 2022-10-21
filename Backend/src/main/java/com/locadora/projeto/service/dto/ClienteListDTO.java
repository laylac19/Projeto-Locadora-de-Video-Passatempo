package com.locadora.projeto.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
public class ClienteListDTO implements Serializable {

    private Integer id;
    private String numeroInscricao;
    private String nome;
    private String cpf;
    private String telefone;
    private LocalDate dataNascimento;
}
