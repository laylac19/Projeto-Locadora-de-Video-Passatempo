package com.locadora.projeto.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AtorTituloPK implements Serializable {

    @Column(name = "ator_id")
    private Integer idAtor;

    @Column(name = "titulo_id")
    private Integer idTitulo;
}
