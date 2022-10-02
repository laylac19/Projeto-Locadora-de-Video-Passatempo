package com.locadora.projeto.web;

import com.locadora.projeto.service.ItemService;
import com.locadora.projeto.service.dto.ItemDTO;
import com.locadora.projeto.service.dto.ItemListDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/itens")
@RequiredArgsConstructor
public class ItemResorce {

    private final ItemService service;

    @GetMapping
    public ResponseEntity<List<ItemListDTO>> buscarTodosItens(){
        List<ItemListDTO> dto = service.findAll();
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ItemDTO> buscarItemPorID(@PathVariable("id") Integer id){
        ItemDTO dto = service.find(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<ItemDTO> editarItem(@RequestBody ItemDTO itemDTO){
        ItemDTO dto = service.save(itemDTO);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @PostMapping
    public ResponseEntity<ItemDTO> salvarItem(@RequestBody ItemDTO itemDTO){
        ItemDTO dto = service.save(itemDTO);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarItem(@PathVariable("id") Integer id){
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
