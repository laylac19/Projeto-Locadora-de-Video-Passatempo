package com.locadora.projeto.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "classe")
public class Classe implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_classe")
    @SequenceGenerator(name = "seq_classe", sequenceName = "seq_classe", allocationSize = 1)
    @Column(name = "id_classe", nullable = false)
    private Integer id;

    @Column(name = "nome_classe", nullable = false)
    private String nomeClasse;

    @Column(name = "valor", nullable = false)
    private Double valor;

    @Column(name = "prado_devolucao", nullable = false)
    private Date prazoDevolucao;

    @Column(name = "ativo")
    private Boolean ativo;
}
