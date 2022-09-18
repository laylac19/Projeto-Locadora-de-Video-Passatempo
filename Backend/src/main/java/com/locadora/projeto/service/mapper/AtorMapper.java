package com.locadora.projeto.service.mapper;

import com.locadora.projeto.domain.Ator;
import com.locadora.projeto.service.dto.AtorDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AtorMapper extends EntityMapper<AtorDTO, Ator>{
}
