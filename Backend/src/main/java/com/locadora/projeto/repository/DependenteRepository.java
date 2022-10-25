package com.locadora.projeto.repository;

import com.locadora.projeto.domain.Dependente;
import com.locadora.projeto.domain.DependentePK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DependenteRepository extends JpaRepository<Dependente, DependentePK> {

    @Query("select case when count(d.idSocio) >= 3 then true else false end from Dependente d where d.idSocio = :idSocio")
    Boolean verificarLimiteDependenteSocio(@Param("idSocio") Integer idSocio);

    @Query("select (d.idDependente) from Dependente d where d.idSocio = :idSocio")
    List<Integer> buscarDependentes(@Param("idSocio") Integer idSocio);
}
