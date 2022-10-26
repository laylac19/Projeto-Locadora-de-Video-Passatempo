package com.locadora.projeto.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SocioDTO {

    private Integer id;
    private String cpf;
    private String endereco;
    private String telefone;
}
