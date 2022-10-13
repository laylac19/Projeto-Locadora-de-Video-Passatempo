package com.locadora.projeto.web;

import com.locadora.projeto.service.ItemService;
import com.locadora.projeto.service.dto.ItemDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/itens")
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

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable("id") Integer id){
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
