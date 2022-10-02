package com.locadora.projeto.service.mapper;

import com.locadora.projeto.domain.Item;
import com.locadora.projeto.service.dto.ItemDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ItemMapper extends EntityMapper<ItemDTO, Item> {
}
