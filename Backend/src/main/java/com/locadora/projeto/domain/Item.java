package com.locadora.projeto.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "item")
public class Item implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_item")
    @SequenceGenerator(name = "seq_item", sequenceName = "seq_item", allocationSize = 1)
    @Column(name = "id_item", nullable = false)
    private Integer id;

    @Column(name = "num_serie", nullable = false)
    private String numeroSerie;

    @Column(name = "data_aquisicao", nullable = false)
    private Date dtAquisicao;

    @Column(name = "tipo_item", nullable = false)
    private String tipoItem; //fazer enum

    @Column(name = "ativo")
    private Boolean ativo;
}
