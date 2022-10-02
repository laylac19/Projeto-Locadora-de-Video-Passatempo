package com.locadora.projeto.service.mapper;

import com.locadora.projeto.domain.Item;
import com.locadora.projeto.service.dto.ItemListDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ItemListMapper extends EntityMapper<ItemListDTO, Item> {
}
