package com.locadora.projeto.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SocioClientePK implements Serializable {

    @Column(name = "socio_id")
    private Integer idSocio;

    @Column(name = "cliente_id")
    private Integer idCliente;
}
