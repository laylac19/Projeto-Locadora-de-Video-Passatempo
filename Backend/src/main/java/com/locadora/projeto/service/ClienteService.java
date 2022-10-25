package com.locadora.projeto.service;

import com.locadora.projeto.service.dto.*;

import java.util.List;

public interface ClienteService {

    List<ClienteListDTO> findAllActive();
    List<ClienteSocioListDTO> findAllDependents(Boolean situacao);

    List<ClienteSocioListDTO> findAllPartners(Boolean situacao);

    List<DropdownDTO> NonPartnersCustomersDropdown();

    ClienteDTO find(Integer id);

    ClienteDTO save(ClienteDTO dto);

    void delete(Integer id);
}