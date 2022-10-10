package com.locadora.projeto.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class TituloItemID implements Serializable {

    @Column(name = "id_titulo", nullable = false)
    private Integer idTitulo;

    @Column(name = "id_item", nullable = false)
    private Integer idItem;
}
