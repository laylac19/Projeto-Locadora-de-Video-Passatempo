package com.locadora.projeto.service;

import com.locadora.projeto.domain.Ator;
import com.locadora.projeto.service.dto.AtorDTO;
import com.locadora.projeto.service.dto.AtorListDTO;
import com.locadora.projeto.service.dto.DropdownDTO;

import java.util.List;

public interface AtorService {

    List<AtorListDTO> findAll();

    AtorDTO find(Integer id);

    AtorDTO save(AtorDTO dto);

    void delete(Integer id);

    Ator findByIdEntity(Integer id);

    List<DropdownDTO> searchDropdown();

    List<String> searchCastMovie(Integer idFilme);
}