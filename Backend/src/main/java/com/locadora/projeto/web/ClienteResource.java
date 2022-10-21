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

    @GetMapping("/dependentes/{situacao}")
    public ResponseEntity<List<ClienteListDTO>> buscarAtivos(@PathVariable("situacao") Boolean situacao){
        List<ClienteListDTO> dto = service.findAllDependentes(situacao);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/socios/{situacao}")
    public ResponseEntity<List<ClienteListDTO>> buscarInativos(@PathVariable("situacao") Boolean situacao){
        List<ClienteListDTO> dto = service.findAllSocios(situacao);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClienteDTO> buscarClientePorID(@PathVariable("id") Integer id){
        ClienteDTO dto = service.find(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/socios/dropdown")
    public ResponseEntity<List<DropdownDTO>> buscarClientesNaoSocios(){
        List<DropdownDTO> dto = service.clientesNaoSociosDropdown();
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ClienteDTO> salvarClasse(@RequestBody ClienteDTO clienteDTO){
        ClienteDTO dto = service.save(clienteDTO);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<ClienteDTO> editarClasse(@RequestBody ClienteDTO clienteDTO){
        ClienteDTO dto = service.save(clienteDTO);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarClasse(@PathVariable("id") Integer id){
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
