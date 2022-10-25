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
    public ResponseEntity<List<ClienteListDTO>> buscarTodos(){
        List<ClienteListDTO> dto = service.findAllActive();
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/dependentes/{situacao}")
    public ResponseEntity<List<ClienteListDTO>> buscarDependentesPorSituacao(@PathVariable("situacao") Boolean situacao){
        List<ClienteListDTO> dto = service.findAllDependents(situacao);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/socios/{situacao}")
    public ResponseEntity<List<ClienteSocioListDTO>> buscarSociosPorSituacao(@PathVariable("situacao") Boolean situacao){
        List<ClienteSocioListDTO> dto = service.findAllPartners(situacao);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClienteDTO> buscarClientePorID(@PathVariable("id") Integer id){
        ClienteDTO dto = service.find(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/clientes/dropdown")
    public ResponseEntity<List<DropdownDTO>> buscarClientesNaoSocios(){
        List<DropdownDTO> dto = service.NonPartnersCustomersDropdown();
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

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