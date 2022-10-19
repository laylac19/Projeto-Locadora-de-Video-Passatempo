package com.locadora.projeto.service.impl;

import com.locadora.projeto.domain.Cliente;
import com.locadora.projeto.repository.ClienteRepository;
import com.locadora.projeto.service.ClienteService;
import com.locadora.projeto.service.dto.ClienteDTO;
import com.locadora.projeto.service.dto.ClienteListDTO;
import com.locadora.projeto.service.mapper.ClienteListMapper;
import com.locadora.projeto.service.mapper.ClienteMapper;
import com.locadora.projeto.service.util.MensagemClasseUtil;
import com.locadora.projeto.service.util.MensagemClienteUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class ClienteServiceImpl implements ClienteService {

    private final ClienteListMapper listMapper;
    private final ClienteMapper mapper;
    private final ClienteRepository repository;


    public List<ClienteListDTO> findAll() {
        return listMapper.toDto(repository.findAll());
    }

    public ClienteDTO find(Integer id) {
        return mapper.toDto(findbyId(id));
    }

    private Cliente findbyId(Integer id){
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        MensagemClienteUtil.CLIENTE_NAO_ENCOTRADO));
    }

    public ClienteDTO save(ClienteDTO dto) {
        Cliente cliente = repository.save(mapper.toEntity(dto));
        cliente.setNumeroInscricao(gerarNumeroInscricao(cliente.getId()));
        return mapper.toDto(repository.save(cliente));
    }

    private String gerarNumeroInscricao(Integer id){
        return "LOCAD-" + id.toString();
    }

    public void delete(Integer id) {
        Cliente cliente = findbyId(id);
        cliente.setAtivo(false);
        repository.save(cliente);
    }

//    public List<DropdownDTO> searchDropdown(){
//        return repository.buscarDropdown();
//    }

}
