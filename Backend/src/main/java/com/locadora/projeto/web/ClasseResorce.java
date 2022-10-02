package com.locadora.projeto.web;

import com.locadora.projeto.service.ClasseService;
import com.locadora.projeto.service.dto.ClasseDTO;
import com.locadora.projeto.service.dto.ClasseListDTO;
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
@RequestMapping("api/classes")
@RequiredArgsConstructor
public class ClasseResorce {

    private final ClasseService service;

    @GetMapping
    public ResponseEntity<List<ClasseListDTO>> buscarTodasClasses(){
        List<ClasseListDTO> dto = service.findAll();
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClasseDTO> buscarClassePorID(@PathVariable("id") Integer id){
        ClasseDTO dto = service.find(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<ClasseDTO> editarClasse(@RequestBody ClasseDTO classeDto){
        ClasseDTO dto = service.save(classeDto);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @PostMapping
    public ResponseEntity<ClasseDTO> salvarClasse(@RequestBody ClasseDTO classeDto){
        ClasseDTO dto = service.save(classeDto);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarClasse(@PathVariable("id") Integer id){
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}