package com.locadora.projeto.service.mapper;

import com.locadora.projeto.domain.Titulo;
import com.locadora.projeto.service.dto.TituloDTO;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TituloMapper extends EntityMapper<TituloDTO, Titulo> {

    @Override
    @Mapping(target = "classe.id", source = "idClasse")
    @Mapping(target = "categoria.id", source = "idCategoria")
    Titulo toEntity (TituloDTO dto);

    @Override
    @InheritInverseConfiguration
    TituloDTO toDto(Titulo entity);

}
