package com.locadora.projeto.web;

import com.locadora.projeto.service.AtorService;
import com.locadora.projeto.service.dto.AtorDTO;
import com.locadora.projeto.service.dto.AtorListDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/atores")
@RequiredArgsConstructor
public class AtorResource {

    private final AtorService service;

    @GetMapping
    public ResponseEntity<List<AtorListDTO>> buscarTodosAtores(){
        List<AtorListDTO> dto = service.findAll();
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AtorDTO> buscarAtoresPorID(@PathVariable("id") Integer id){
        AtorDTO dto = service.find(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<AtorDTO> salvarAtor(@RequestBody AtorDTO atorDTO){
        AtorDTO dto = service.save(atorDTO);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<AtorDTO> editarAtor(@RequestBody AtorDTO atorDto){
        AtorDTO dto = service.save(atorDto);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarAtor(@PathVariable("id") Integer id){
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
