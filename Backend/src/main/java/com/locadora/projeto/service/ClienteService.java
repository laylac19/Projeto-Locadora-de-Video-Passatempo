package com.locadora.projeto.service;

import com.locadora.projeto.service.dto.*;

import java.util.List;

public interface ClienteService {

    ClienteDTO find(Integer id);

    List<ClienteListDTO> findAllDependents(Boolean situacao);

    List<ClienteListDTO> findAllPartners(Boolean situacao);

    List<DropdownDTO> NonPartnersCustomersDropdown();

    ClienteDTO save(ClienteDTO dto);

    void delete(Integer id);

}