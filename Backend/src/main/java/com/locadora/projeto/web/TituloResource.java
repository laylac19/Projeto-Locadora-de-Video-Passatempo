package com.locadora.projeto.web;

import com.locadora.projeto.service.TituloService;
import com.locadora.projeto.service.dto.DropdownDTO;
import com.locadora.projeto.service.dto.TituloDTO;
import com.locadora.projeto.service.dto.TituloListDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/titulos")
@RequiredArgsConstructor
public class TituloResource {

    private final TituloService service;

    @GetMapping
    public ResponseEntity<List<TituloListDTO>> findTitulo(){
        List<TituloListDTO> dto = service.findAll();
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TituloDTO> findTituloById(@PathVariable("id") Integer id){
        TituloDTO dto = service.find(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }
    @GetMapping("/dropdown")
    public ResponseEntity<List<DropdownDTO>> buscarDropdwon(){
        List<DropdownDTO> dto = service.buscarDropdown();
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<TituloDTO> editTitulo(@RequestBody TituloDTO tituloDTO){
        TituloDTO dto = service.save(tituloDTO);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @PostMapping
    public ResponseEntity<TituloDTO> saveTitulo(@RequestBody TituloDTO diretorDTO){
        TituloDTO dto = service.save(diretorDTO);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTitulo(@PathVariable("id") Integer id){
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
