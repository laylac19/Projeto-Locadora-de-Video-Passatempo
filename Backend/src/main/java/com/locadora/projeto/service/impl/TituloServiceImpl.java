package com.locadora.projeto.service.impl;

import com.locadora.projeto.domain.Titulo;
import com.locadora.projeto.repository.TituloRepository;
import com.locadora.projeto.service.TituloService;
import com.locadora.projeto.service.dto.DropdownDTO;
import com.locadora.projeto.service.dto.TituloDTO;
import com.locadora.projeto.service.dto.TituloListDTO;
import com.locadora.projeto.service.mapper.TituloMapper;
import com.locadora.projeto.service.util.MensagemDiretorUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class TituloServiceImpl implements TituloService {

    private final TituloMapper mapper;
    private final TituloRepository repository;


    public List<TituloListDTO> findAll() {
        return repository.buscarTitulos();
    }

    public TituloDTO find(Integer id) {
        return mapper.toDto(findById(id));
    }

    public List<DropdownDTO> buscarDropdown(){
        return repository.buscarDropdown();
    }

    private Titulo findById(Integer id){
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        MensagemDiretorUtil.DIRETOR_NAO_ENCOTRADO));
    }

    public TituloDTO save(TituloDTO dto) {
        return mapper.toDto(repository.save(mapper.toEntity(dto)));
    }

    public void delete(Integer id) {
        Titulo titulo = findById(id);
        titulo.setAtivo(false);
        repository.save(titulo);
    }
}
