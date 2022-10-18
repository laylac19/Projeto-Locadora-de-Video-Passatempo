package com.locadora.projeto.service;

import com.locadora.projeto.service.dto.DropdownDTO;
import com.locadora.projeto.service.dto.TituloDTO;
import com.locadora.projeto.service.dto.TituloListDTO;
import com.locadora.projeto.service.dto.VinculoEntidadeDTO;

import java.util.List;

public interface TituloService {

    List<TituloListDTO> findAll();

    TituloDTO find(Integer id);

    TituloDTO save(TituloDTO dto);

    void delete(Integer id);

    List<DropdownDTO> searchDropdown();

    void  saveActorWithTitle(VinculoEntidadeDTO dto);
}
