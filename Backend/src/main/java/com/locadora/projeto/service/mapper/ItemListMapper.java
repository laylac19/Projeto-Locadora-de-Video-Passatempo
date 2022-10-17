package com.locadora.projeto.service.mapper;

import com.locadora.projeto.domain.Item;
import com.locadora.projeto.service.dto.ItemListDTO;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface ItemListMapper extends EntityMapper<ItemListDTO, Item> {
    @Override
    @Mapping(target = "titulo.nome", source = "titulo")
    Item toEntity (ItemListDTO dto);

    @Override
    @InheritInverseConfiguration
    ItemListDTO toDto(Item entity);

    @AfterMapping
    default void setNomeTipoItem(Item entity, @MappingTarget ItemListDTO dto){
        dto.setNomeTipoItem(entity.buscarNomeTipoItem());
    }
}
