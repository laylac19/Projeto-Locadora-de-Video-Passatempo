package com.locadora.projeto.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "titulo_item")
public class TituloItem {

    @EmbeddedId
    private TituloItemID id;

    @MapsId("idTitulo")
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "id_titulo", referencedColumnName = "id")
    private Titulo titulo;

    @MapsId("idItem")
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "id_item", referencedColumnName = "id")
    private Item item;
}
