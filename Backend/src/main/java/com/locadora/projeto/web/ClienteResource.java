package com.locadora.projeto.web;

import com.locadora.projeto.service.ClienteService;
import com.locadora.projeto.service.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/cliente")
@RequiredArgsConstructor
public class ClienteResource {

    private final ClienteService service;

    @GetMapping
    public ResponseEntity<List<ClienteListDTO>> buscarTodasCliente(){
        List<ClienteListDTO> dto = service.findAll();
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClienteDTO> buscarClientePorID(@PathVariable("id") Integer id){
        ClienteDTO dto = service.find(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

//    @GetMapping("/dropdown")
//    public ResponseEntity<List<DropdownDTO>> preencherDropdwon(){
//        List<DropdownDTO> dto = service.searchDropdown();
//        return new ResponseEntity<>(dto, HttpStatus.OK);
//    }

    @PostMapping
    public ResponseEntity<ClienteDTO> salvarCliente(@RequestBody ClienteDTO clienteDTO){
        ClienteDTO dto = service.save(clienteDTO);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<ClienteDTO> editarCliente(@RequestBody ClienteDTO clienteDTO){
        ClienteDTO dto = service.save(clienteDTO);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarCliente(@PathVariable("id") Integer id){
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}