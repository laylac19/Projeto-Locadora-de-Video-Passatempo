package com.locadora.projeto.service.mapper;

import com.locadora.projeto.domain.Item;
import com.locadora.projeto.service.dto.ItemDTO;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ItemMapper extends EntityMapper<ItemDTO, Item> {

    @Override
    @Mapping(target = "titulo.id", source = "idTitulo")
    Item toEntity (ItemDTO dto);

    @Override
    @InheritInverseConfiguration
    ItemDTO toDto(Item entity);
}
