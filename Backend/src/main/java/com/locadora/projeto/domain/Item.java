package com.locadora.projeto.domain;

import com.locadora.projeto.domain.enuns.TipoItemEnum;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "item")
public class Item implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_item")
    @SequenceGenerator(name = "seq_item", sequenceName = "seq_item", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "numero_serie", nullable = false)
    private String numeroSerie;

    @Column(name = "data", nullable = false)
    private LocalDate data;

    @Column(name = "tipo_item", nullable = false)
    private Integer tipoItem;

    @Column(name = "ativo")
    private Boolean ativo;

    @ManyToOne
    @JoinColumn(name = "titulo_id")
    private Titulo titulo;

    public String buscarNomeTipoItem(){
        return TipoItemEnum.buscarNomeEnum(this.tipoItem);
    }
}
