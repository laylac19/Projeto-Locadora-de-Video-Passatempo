package com.locadora.projeto.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "cliente")
@Inheritance(strategy = InheritanceType.JOINED)
public class Cliente implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cliente_gen")
    @SequenceGenerator(name = "cliente_gen", sequenceName = "cliente_seq")
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "numero-inscricao")
    private String numeroInscricao;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "data-nascimento", nullable = false)
    private LocalDate dataNascimento;

    @Column(name = "sexo", nullable = false)
    private Integer sexo;

    @Column(name = "ativo", nullable = false)
    private Boolean ativo;

}