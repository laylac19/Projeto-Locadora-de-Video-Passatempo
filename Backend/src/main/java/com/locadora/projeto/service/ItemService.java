package com.locadora.projeto.service;

import com.locadora.projeto.service.dto.ItemDTO;
import com.locadora.projeto.service.dto.TituloItemDTO;

public interface ItemService {

    ItemDTO find(Integer id);

    ItemDTO save(ItemDTO dto);

    void delete(Integer id);

    void salvarItemTitulo(TituloItemDTO dto);
}
