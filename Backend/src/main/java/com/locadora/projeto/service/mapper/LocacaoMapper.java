package com.locadora.projeto.service.mapper;

import com.locadora.projeto.domain.Locacao;
import com.locadora.projeto.service.dto.LocacaoDTO;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface LocacaoMapper extends EntityMapper<LocacaoDTO, Locacao> {

    @Override
    @Mapping(target = "item.id", source = "idItem")
    @Mapping(target = "cliente.id", source = "idCliente")
    Locacao toEntity(LocacaoDTO dto);

    @Override
    @InheritInverseConfiguration
    LocacaoDTO toDto(Locacao entity);

}
