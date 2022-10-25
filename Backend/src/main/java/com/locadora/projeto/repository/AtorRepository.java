package com.locadora.projeto.repository;

import com.locadora.projeto.domain.Ator;
import com.locadora.projeto.service.dto.DropdownDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AtorRepository extends JpaRepository<Ator, Integer> {

    List<Ator> findAllByAtivoIsTrue();

    Optional<Ator> findAtorByNomeAtor(String nome);

    @Query("select new com.locadora.projeto.service.dto.DropdownDTO(a.id, a.nomeAtor) from Ator a where a.ativo = true")
    List<DropdownDTO> buscarDropdown();

    @Query("select a.nomeAtor from Ator a join AtorTitulo at on a.id = at.idAtor where at.idTitulo = :idFilme")
    List<String> buscarAtoresFilme(@Param("idFilme") Integer idFilme);





}