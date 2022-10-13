package com.locadora.projeto.service.impl;

import com.locadora.projeto.domain.Classe;
import com.locadora.projeto.repository.ClasseRepository;
import com.locadora.projeto.service.ClasseService;
import com.locadora.projeto.service.dto.ClasseDTO;
import com.locadora.projeto.service.dto.ClasseListDTO;
import com.locadora.projeto.service.dto.DropdownDTO;
import com.locadora.projeto.service.mapper.ClasseListMapper;
import com.locadora.projeto.service.mapper.ClasseMapper;
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
public class ClasseServiceImpl implements ClasseService {

    private final ClasseListMapper listMapper;
    private final ClasseMapper mapper;
    private final ClasseRepository repository;


    public List<ClasseListDTO> findAll() {
        return listMapper.toDto(repository.findAllByAtivoIsTrue());
    }

    public ClasseDTO find(Integer id) {
        return mapper.toDto(findbyId(id));
    }

    private Classe findbyId(Integer id){
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        MensagemClasseUtil.CLASSE_NAO_ENCOTRADA));
    }

    public ClasseDTO save(ClasseDTO dto) {
        return mapper.toDto(repository.save(mapper.toEntity(dto)));
    }

    public void delete(Integer id) {
        Classe classe = findbyId(id);
        classe.setAtivo(false);
        repository.save(classe);
    }

    public List<DropdownDTO> searchDropdown(){
        return repository.buscarDropdown();
    }

}