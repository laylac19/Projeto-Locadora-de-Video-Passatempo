package com.locadora.projeto.service;

import com.locadora.projeto.service.dto.ItemDTO;

public interface ItemService {

    ItemDTO find(Integer id);

    ItemDTO save(ItemDTO dto);

    void delete(Integer id);
}
