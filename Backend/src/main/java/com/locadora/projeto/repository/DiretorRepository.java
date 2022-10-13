package com.locadora.projeto.repository;

import com.locadora.projeto.domain.Ator;
import com.locadora.projeto.domain.Diretor;
import com.locadora.projeto.service.dto.DropdownDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiretorRepository extends JpaRepository<Diretor, Integer> {

    List<Diretor> findAllByAtivoIsTrue();

    @Query("select new com.locadora.projeto.service.dto.DropdownDTO(d.id, d.nomeDiretor) from Diretor d where d.ativo = true")
    List<DropdownDTO> dropdownDiretor();
}
