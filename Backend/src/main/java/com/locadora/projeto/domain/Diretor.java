package com.locadora.projeto.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@Entity
@Table(name = "diretor")
public class Diretor implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_diretor")
    @SequenceGenerator(name = "seq_diretor", sequenceName = "seq_diretor", allocationSize = 1)
    @Column(name = "id_diretor", nullable = false)
    private Integer id;

    @Column(name = "nome_diretor", nullable = false)
    private String nomeDiretor;

    @Column(name = "ativo")
    private Boolean ativo;
}
