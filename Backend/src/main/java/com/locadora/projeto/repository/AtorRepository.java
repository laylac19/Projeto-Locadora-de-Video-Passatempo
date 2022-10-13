package com.locadora.projeto.repository;

import com.locadora.projeto.domain.Ator;
import com.locadora.projeto.service.dto.DropdownDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AtorRepository extends JpaRepository<Ator, Integer> {

    List<Ator> findAllByAtivoIsTrue();

    @Query("select new com.locadora.projeto.service.dto.DropdownDTO(a.id, a.nomeAtor) from Ator a where a.ativo = true")
    List<DropdownDTO> buscarDropdown();
}