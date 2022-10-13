package com.locadora.projeto.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "ator_titulo")
@IdClass(AtorTituloPK.class)
@Embeddable
@Getter
@Setter
public class AtorTitulo implements Serializable {

    @Id
    @Column(name = "ator_id")
    private Integer idAtor;

    @Id
    @Column(name = "titulo_id")
    private Integer idTitulo;

    @ManyToOne
    @JoinColumn(name = "ator_id", referencedColumnName = "id_ator", insertable = false, updatable = false)
    private Ator ator;

    @ManyToOne
    @JoinColumn(name = "titulo_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Titulo titulo;

}
