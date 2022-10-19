package com.locadora.projeto.repository;

import com.locadora.projeto.domain.Socio;
import com.locadora.projeto.service.dto.DropdownDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SocioRepository extends JpaRepository<Socio, Integer> {

    @Query("select new com.locadora.projeto.service.dto.DropdownDTO(c.id, c.nome) from Cliente c " +
            "where c.id not in (select s.id from Socio s)")
    List<DropdownDTO> buscarClientesNaoSocios();

}
