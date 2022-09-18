package com.locadora.projeto.service.mapper;

import com.locadora.projeto.domain.Classe;
import com.locadora.projeto.service.dto.ClasseListDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ClasseListMapper extends EntityMapper<ClasseListDTO, Classe> {
}
