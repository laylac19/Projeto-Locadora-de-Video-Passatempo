package com.locadora.projeto.service.impl;

import com.locadora.projeto.domain.Diretor;
import com.locadora.projeto.repository.DiretorRepository;
import com.locadora.projeto.service.DiretorService;
import com.locadora.projeto.service.dto.DiretorDTO;
import com.locadora.projeto.service.dto.DiretorListDTO;
import com.locadora.projeto.service.mapper.DiretorListMapper;
import com.locadora.projeto.service.mapper.DiretorMapper;
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
public class DiretorServiceImpl implements DiretorService {

    private final DiretorListMapper listMapper;
    private final DiretorMapper mapper;
    private final DiretorRepository repository;


    public List<DiretorListDTO> findAll() {
        return listMapper.toDto(repository.findAllByAtivoIsTrue());
    }

    public DiretorDTO find(Integer id) {
        return mapper.toDto(findById(id));
    }

    private Diretor findById(Integer id){
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        MensagemDiretorUtil.DIRETOR_NAO_ENCOTRADO));
    }

    public DiretorDTO save(DiretorDTO dto) {
        return mapper.toDto(repository.save(mapper.toEntity(dto)));
    }

    public void delete(Integer id) {
        Diretor diretor = findById(id);
        diretor.setAtivo(false);
        repository.save(diretor);
    }
}
