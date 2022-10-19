package com.locadora.projeto.service.impl;

import com.locadora.projeto.domain.Ator;
import com.locadora.projeto.repository.AtorRepository;
import com.locadora.projeto.service.AtorService;
import com.locadora.projeto.service.dto.AtorDTO;
import com.locadora.projeto.service.dto.AtorListDTO;
import com.locadora.projeto.service.dto.DropdownDTO;
import com.locadora.projeto.service.mapper.AtorListMapper;
import com.locadora.projeto.service.mapper.AtorMapper;
import com.locadora.projeto.service.util.MensagemAtorUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class AtorServiceImpl implements AtorService {

    private final AtorMapper mapper;
    private final AtorListMapper listMapper;
    private final AtorRepository repository;


    public List<AtorListDTO> findAll() {
        return listMapper.toDto(repository.findAllByAtivoIsTrue());
    }

    public AtorDTO find(Integer id) {
        return mapper.toDto(findByIdEntity(id));
    }

    public Ator findByIdEntity(Integer id){
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        MensagemAtorUtil.ATOR_NAO_ENCOTRADO));
    }

    public AtorDTO save(AtorDTO dto) {
        return mapper.toDto(repository.save(mapper.toEntity(dto)));
    }

    public void delete(Integer id) {
        Ator ator = findByIdEntity(id);
        ator.setAtivo(false);
        repository.save(ator);
    }

    public List<DropdownDTO> searchDropdown(){
        return repository.buscarDropdown();
    }

    public List<String> buscarAtoresFilme(Integer idFilme) {
        return repository.buscarAtoresFilme(idFilme);
    }
}
