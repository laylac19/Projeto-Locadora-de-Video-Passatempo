package com.locadora.projeto.repository;

import com.locadora.projeto.domain.SocioCliente;
import com.locadora.projeto.domain.SocioClientePK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SocioClienteRepository extends JpaRepository<SocioCliente, SocioClientePK> {
}