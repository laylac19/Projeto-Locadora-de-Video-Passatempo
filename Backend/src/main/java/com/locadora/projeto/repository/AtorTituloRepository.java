package com.locadora.projeto.repository;

import com.locadora.projeto.domain.AtorTitulo;
import com.locadora.projeto.domain.AtorTituloPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AtorTituloRepository extends JpaRepository<AtorTitulo, AtorTituloPK> {

    Boolean existsByAtorId(Integer id);
    void deleteAtorTituloByAtorIdAndTituloId(Integer idAtor, Integer idTitulo);
}
