package com.locadora.projeto.service.impl;

import com.locadora.projeto.domain.Cliente;
import com.locadora.projeto.domain.Dependente;
import com.locadora.projeto.domain.Socio;
import com.locadora.projeto.repository.ClienteRepository;
import com.locadora.projeto.repository.DependenteRepository;
import com.locadora.projeto.repository.SocioRepository;
import com.locadora.projeto.service.ClienteService;
import com.locadora.projeto.service.dto.*;
import com.locadora.projeto.service.mapper.ClienteMapper;
import com.locadora.projeto.service.util.MensagemAtorUtil;
import com.locadora.projeto.service.util.MensagemClasseUtil;
import com.locadora.projeto.service.util.MensagemSocioUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class ClienteServiceImpl implements ClienteService {

    private final ClienteMapper mapper;
    private final ClienteRepository repository;
    private final DependenteRepository dependenteRepository;
    private final SocioRepository socioRepository;


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

    private Socio findByIdSocio(Integer id){
        return socioRepository.findById(id).
                orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                    MensagemSocioUtil.SOCIO_NAO_ENCONTRADO));
    }



    public ClienteDTO save(ClienteDTO dto) {
        verificarNomeDuplicado(dto);
        Cliente cliente = repository.save(mapper.toEntity(dto));
        cliente.setNumeroInscricao(gerarNumeroInscricao(cliente.getId()));
        return mapper.toDto(repository.save(cliente));
    }


    private String gerarNumeroInscricao(Integer id){
        return "LOCAD-" + id.toString();
    }

    public void delete(Integer id) {
        desativarDependentes(id);
        Cliente cliente = findbyId(id);
        cliente.setAtivo(false);
        repository.save(cliente);
    }

    private void verificarNomeDuplicado(ClienteDTO dto){
        Optional<Cliente> cliente = repository.findClienteByNome(dto.getNome());
        if(nomeDuplicado(dto, cliente)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, MensagemAtorUtil.ATOR_DUPLICADO);
        }
    }

    private boolean nomeDuplicado(ClienteDTO dto, Optional<Cliente> optional) {
        return optional.isPresent() && optional.get().getId().equals(dto.getId());
    }

    private void verificarLimiteDependente(Integer id){
        if(Boolean.TRUE.equals(dependenteRepository.verificarLimiteDependenteSocio(id))){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, MensagemSocioUtil.SOCIO_JA_POSSUI_DEPENDENTES);
        }
    }

    public void salvarDependente(VinculoEntidadeDTO dto){
        verificarLimiteDependente(dto.getId1());
        Dependente entity = new Dependente();
        entity.setCliente(findbyId(dto.getId2()));
        entity.setSocio(findByIdSocio(dto.getId1()));
        entity.setIdDependente(dto.getId2());
        entity.setIdSocio(dto.getId1());
        dependenteRepository.save(entity);
    }

    private Boolean isSocio(Integer idSocio){
        return socioRepository.existsSocioById(idSocio);
    }

    private void desativarDependentes(Integer idSocio){
        if(Boolean.TRUE.equals(isSocio(idSocio))){
            repository.desativarDependentes(dependenteRepository.buscarDependentes(idSocio));
        }
    }

}
