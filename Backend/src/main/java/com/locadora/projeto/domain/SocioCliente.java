package com.locadora.projeto.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "dependente")
@IdClass(SocioClientePK.class)
@Embeddable
@Getter
@Setter
public class SocioCliente {

    @Id
    @Column(name = "socio_id")
    private Integer idSocio;

    @Id
    @Column(name = "cliente_id")
    private Integer idCliente;

    @ManyToOne
    @JoinColumn(name = "socio_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Socio socio;

    @ManyToOne
    @JoinColumn(name = "cliente_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Cliente cliente;
}