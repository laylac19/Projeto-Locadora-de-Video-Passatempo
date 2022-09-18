package com.locadora.projeto.service.mapper;

import com.locadora.projeto.domain.Diretor;
import com.locadora.projeto.service.dto.DiretorDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DiretorMapper extends EntityMapper<DiretorDTO, Diretor>{
}
