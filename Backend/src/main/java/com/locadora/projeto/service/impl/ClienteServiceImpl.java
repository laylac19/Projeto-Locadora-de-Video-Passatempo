package com.locadora.projeto.service.impl;

import com.locadora.projeto.domain.Cliente;
import com.locadora.projeto.repository.ClienteRepository;
import com.locadora.projeto.service.ClienteService;
import com.locadora.projeto.service.dto.ClienteDTO;
import com.locadora.projeto.service.dto.ClienteListDTO;
import com.locadora.projeto.service.dto.ClienteSocioListDTO;
import com.locadora.projeto.service.dto.DropdownDTO;
import com.locadora.projeto.service.mapper.ClienteMapper;
import com.locadora.projeto.service.util.MensagemClasseUtil;
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

    private final ClienteMapper mapper;
    private final ClienteRepository repository;


    public List<ClienteListDTO> findAllAtivos(){
        return repository.buscarTodos();
    }

    public List<ClienteSocioListDTO> findAllDependentes(Boolean situacao) {
        return repository.clientesDependente(situacao);
    }

    public List<ClienteSocioListDTO> findAllSocios(Boolean situacao) {
        return repository.clienteSocios(situacao);
    }

    public List<DropdownDTO> clientesNaoSociosDropdown(){
        return repository.buscarClientesNaoSocios();
    }


    public ClienteDTO find(Integer id) {
        return mapper.toDto(findbyId(id));
    }

    private Cliente findbyId(Integer id){
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        MensagemClasseUtil.CLASSE_NAO_ENCOTRADA));
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

}
