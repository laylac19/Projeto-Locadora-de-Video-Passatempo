package com.locadora.projeto.web;

import com.locadora.projeto.service.DiretorService;
import com.locadora.projeto.service.dto.DiretorDTO;
import com.locadora.projeto.service.dto.DiretorListDTO;
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
@RequestMapping("api/diretores")
@RequiredArgsConstructor
public class DiretorResorce {

    private final DiretorService service;

    @GetMapping
    public ResponseEntity<List<DiretorListDTO>> buscarTodosDiretores(){
        List<DiretorListDTO> dto = service.findAll();
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DiretorDTO> buscarDiretorPorID(@PathVariable("id") Integer id){
        DiretorDTO dto = service.find(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<DiretorDTO> editarDiretor(@RequestBody DiretorDTO diretorDTO){
        DiretorDTO dto = service.save(diretorDTO);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @PostMapping
    public ResponseEntity<DiretorDTO> salvarDiretor(@RequestBody DiretorDTO diretorDTO){
        DiretorDTO dto = service.save(diretorDTO);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarDiretor(@PathVariable("id") Integer id){
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}