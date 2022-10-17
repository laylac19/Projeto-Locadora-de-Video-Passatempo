package com.locadora.projeto.repository;

import com.locadora.projeto.domain.Classe;
import com.locadora.projeto.service.dto.DropdownDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClasseRepository extends JpaRepository<Classe, Integer> {

    List<Classe> findAllByAtivoIsTrue();

    @Query("select new com.locadora.projeto.service.dto.DropdownDTO(c.id, c.nomeClasse) from Classe c where c.ativo = true")
    List<DropdownDTO> buscarDropdown();
}