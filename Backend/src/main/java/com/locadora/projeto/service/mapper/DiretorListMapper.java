package com.locadora.projeto.service.mapper;

import com.locadora.projeto.domain.Diretor;
import com.locadora.projeto.service.dto.DiretorListDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DiretorListMapper extends EntityMapper<DiretorListDTO, Diretor>{
}
