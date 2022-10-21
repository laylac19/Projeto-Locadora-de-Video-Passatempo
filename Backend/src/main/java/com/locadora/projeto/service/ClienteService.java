package com.locadora.projeto.service;

import com.locadora.projeto.service.dto.*;

import java.util.List;

public interface ClienteService {

    List<ClienteListDTO> findAllDependentes(Boolean situacao);
    List<ClienteListDTO> findAllSocios(Boolean situacao);
    List<DropdownDTO> clientesNaoSociosDropdown();

    ClienteDTO find(Integer id);

    ClienteDTO save(ClienteDTO dto);

    void delete(Integer id);
}
