package com.locadora.projeto.service.mapper;

import com.locadora.projeto.domain.Ator;
import com.locadora.projeto.service.dto.AtorListDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AtorListMapper extends EntityMapper<AtorListDTO, Ator>{
}
