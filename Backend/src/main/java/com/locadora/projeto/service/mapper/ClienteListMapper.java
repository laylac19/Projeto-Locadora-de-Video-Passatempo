package com.locadora.projeto.service.mapper;

import com.locadora.projeto.domain.Cliente;
import com.locadora.projeto.service.dto.ClienteListDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ClienteListMapper extends EntityMapper<ClienteListDTO, Cliente> {

}
