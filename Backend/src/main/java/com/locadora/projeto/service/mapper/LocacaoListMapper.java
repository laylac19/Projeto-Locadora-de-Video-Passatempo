package com.locadora.projeto.service.mapper;

import com.locadora.projeto.domain.Locacao;
import com.locadora.projeto.service.dto.LocacaoListDTO;
import org.mapstruct.AfterMapping;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.TargetType;

@Mapper(componentModel = "spring")
public interface LocacaoListMapper extends EntityMapper<LocacaoListDTO, Locacao> {

    @Override
    @Mapping(target = "cliente.nome", source = "nomeCliente")
    @Mapping(target = "item.numeroSerie", source = "numeroItem")
    Locacao toEntity (LocacaoListDTO dto);

    @Override
    @InheritInverseConfiguration
    LocacaoListDTO toDto(Locacao entity);

    @AfterMapping
    default void calcularValorMulta(Locacao entity, @MappingTarget LocacaoListDTO dto){
        dto.setMultaCobrada(entity.calcularMulta());
    }

}
