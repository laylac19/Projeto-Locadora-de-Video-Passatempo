package com.locadora.projeto.repository;

import com.locadora.projeto.domain.Categoria;
import com.locadora.projeto.service.dto.DropdownDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {

    @Query("select new com.locadora.projeto.service.dto.DropdownDTO(c.id, c.nomeCategoria) from Categoria c")
    List<DropdownDTO> dropdownCategoria();
}
