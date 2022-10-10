package com.locadora.projeto.web;

import com.locadora.projeto.domain.TituloItem;
import com.locadora.projeto.service.ItemService;
import com.locadora.projeto.service.dto.ItemDTO;
import com.locadora.projeto.service.dto.TituloItemDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/item")
@RequiredArgsConstructor
public class ItemResource {

    private final ItemService service;

    @GetMapping("/{id}")
    public ResponseEntity<ItemDTO> findItemById(@PathVariable("id") Integer id){
        ItemDTO dto = service.find(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<ItemDTO> editItem(@RequestBody ItemDTO itemDTO){
        ItemDTO dto = service.save(itemDTO);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @PostMapping
    public ResponseEntity<ItemDTO> saveItem(@RequestBody ItemDTO itemDTO){
        ItemDTO dto = service.save(itemDTO);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @PostMapping("item-titulo")
    public ResponseEntity<TituloItem> saveItemTitulo(@RequestBody TituloItemDTO dto){
        service.salvarItemTitulo(dto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable("id") Integer id){
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
