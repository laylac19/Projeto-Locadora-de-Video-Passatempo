package com.locadora.projeto.service.mapper;

import com.locadora.projeto.domain.Socio;
import com.locadora.projeto.service.dto.SocioDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface SocioMapper extends EntityMapper<SocioDTO, Socio>{
}
