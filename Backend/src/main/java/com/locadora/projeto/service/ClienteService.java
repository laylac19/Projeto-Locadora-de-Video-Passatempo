package com.locadora.projeto.service;

import com.locadora.projeto.service.dto.*;

import java.util.List;

public interface ClienteService {

    List<ClienteListDTO> findAllAtivos();
    List<ClienteSocioListDTO> findAllDependentes(Boolean situacao);
    List<ClienteSocioListDTO> findAllSocios(Boolean situacao);
    List<DropdownDTO> clientesNaoSociosDropdown();

    ClienteDTO find(Integer id);

    ClienteDTO save(ClienteDTO dto);

    void delete(Integer id);
}
