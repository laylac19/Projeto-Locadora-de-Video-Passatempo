package com.locadora.projeto.repository;

import com.locadora.projeto.domain.Dependente;
import com.locadora.projeto.domain.DependentePK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DependenteRepository extends JpaRepository<Dependente, DependentePK> {
}
