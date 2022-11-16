package com.locadora.projeto.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "locacao_item")
@IdClass(LocacaoItemPK.class)
@Embeddable
@Getter
@Setter
public class LocacaoItem {

    @Id
    @Column(name = "locacao_id")
    private Integer idLocacao;

    @Id
    @Column(name = "item_id")
    private Integer idItem;

    @ManyToOne
    @JoinColumn(name = "locacao_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Locacao locacao;

    @ManyToOne
    @JoinColumn(name = "item_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Item item;
}
