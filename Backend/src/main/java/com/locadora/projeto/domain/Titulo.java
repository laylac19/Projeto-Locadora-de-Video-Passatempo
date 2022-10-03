package com.locadora.projeto.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@Entity
@Table(name = "titulo")
public class Titulo implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_titulo")
    @SequenceGenerator(name = "seq_titulo", sequenceName = "seq_titulo", allocationSize = 1)
    @Column(name = "id_titulo", nullable = false)
    private Integer id;

    @Column(name = "nome_titulo", nullable = false)
    private String nomeTitulo;

    @Column(name = "ano", nullable = false)
    private String ano;

    @Column(name = "sinopse", nullable = false)
    private String sinopse;

    @Column(name = "categoria", nullable = false)
    private String categoria;
}
