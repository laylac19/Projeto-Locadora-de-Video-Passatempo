package com.locadora.projeto.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;


@Getter
@Setter
@Entity
@Table(name = "ator")
public class Ator implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_ator")
    @SequenceGenerator(name = "seq_ator", sequenceName = "seq_ator", allocationSize = 1)
    @Column(name = "id_ator", nullable = false)
    private Integer id;

    @Column(name = "nome_ator", nullable = false)
    private String nomeAtor;

    @Column(name = "ativo")
    private Boolean ativo;
}