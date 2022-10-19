package com.locadora.projeto.service.mapper;

import com.locadora.projeto.domain.Cliente;
import com.locadora.projeto.service.dto.ClienteDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ClienteMapper extends EntityMapper<ClienteDTO, Cliente>{
}
