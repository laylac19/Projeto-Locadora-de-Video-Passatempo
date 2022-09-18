package com.locadora.projeto.service.mapper;

import com.locadora.projeto.domain.Classe;
import com.locadora.projeto.service.dto.ClasseDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ClasseMapper extends EntityMapper<ClasseDTO, Classe> {
}