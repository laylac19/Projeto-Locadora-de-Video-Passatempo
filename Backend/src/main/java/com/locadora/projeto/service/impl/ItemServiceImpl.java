package com.locadora.projeto.service.impl;

import com.locadora.projeto.domain.Item;
import com.locadora.projeto.domain.TituloItem;
import com.locadora.projeto.domain.TituloItemID;
import com.locadora.projeto.repository.ItemRepository;
import com.locadora.projeto.repository.TituloItemRepository;
import com.locadora.projeto.service.ItemService;
import com.locadora.projeto.service.TituloService;
import com.locadora.projeto.service.dto.ItemDTO;
import com.locadora.projeto.service.dto.TituloItemDTO;
import com.locadora.projeto.service.mapper.ItemMapper;
import com.locadora.projeto.service.mapper.TituloMapper;
import com.locadora.projeto.service.util.MensagemDiretorUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
@Transactional
public class ItemServiceImpl implements ItemService {

    private final ItemRepository repository;
    private final ItemMapper mapper;
    private final TituloItemRepository tituloItemRepository;
    private final TituloMapper tituloMapper;
    private final TituloService tituloService;


    public ItemDTO find(Integer id) {
        return mapper.toDto(findById(id));
    }

    private Item findById(Integer id){
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        MensagemDiretorUtil.DIRETOR_NAO_ENCOTRADO));
    }

    public ItemDTO save(ItemDTO dto) {
        return mapper.toDto(repository.save(mapper.toEntity(dto)));
    }

    public void delete(Integer id) {
        Item item = findById(id);
        item.setAtivo(false);
        repository.save(item);
    }

    public void salvarItemTitulo(TituloItemDTO dto) {
        TituloItemID tituloItemID = new TituloItemID(dto.getIdTitulo(), dto.getIdItem());
        TituloItem tituloItem = new TituloItem();
        tituloItem.setId(tituloItemID);
        tituloItem.setItem(findById(dto.getIdItem()));
        tituloItem.setTitulo(tituloMapper.toEntity(tituloService.find(dto.getIdTitulo())));
        tituloItemRepository.save(tituloItem);
    }
}