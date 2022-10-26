package com.locadora.projeto.repository;

import com.locadora.projeto.domain.Titulo;
import com.locadora.projeto.service.dto.DropdownDTO;
import com.locadora.projeto.service.dto.TituloListDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TituloRepository extends JpaRepository<Titulo, Integer> {

    Optional<Titulo> findTituloByNome(String nome);

    @Query("select new com.locadora.projeto.service.dto.TituloListDTO(t.id, t.nome, t.ano, t.categoria.nomeCategoria, t.classe.nomeClasse) " +
            "from Titulo t where t.ativo = true")
    List<TituloListDTO> buscarTitulos();

    Boolean existsByClasseId(Integer idClasse);

    Boolean existsByDiretorId(Integer idDiretor);

    @Query("select new com.locadora.projeto.service.dto.DropdownDTO(t.id, t.nome) From Titulo t where t.ativo = true")
    List<DropdownDTO> buscarDropdown();

}
