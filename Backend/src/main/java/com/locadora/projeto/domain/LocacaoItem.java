package com.locadora.projeto.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "locacao_item")
@IdClass(LocacaoItemPK.class)
@Embeddable
@Getter
@Setter
public class LocacaoItem implements Serializable {
    @Id
    @Column(name = "item_id", nullable = false)
    private Long idItem;

    @Id
    @Column(name = "locacao_id", nullable = false)
    private Long idLocacao;

    @ManyToOne
    @JoinColumn(name = "item_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Item item;
}
