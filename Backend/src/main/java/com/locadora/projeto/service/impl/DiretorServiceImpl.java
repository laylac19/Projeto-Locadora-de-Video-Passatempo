package com.locadora.projeto.service.impl;

import com.locadora.projeto.domain.Diretor;
import com.locadora.projeto.repository.DiretorRepository;
import com.locadora.projeto.repository.TituloRepository;
import com.locadora.projeto.service.DiretorService;
import com.locadora.projeto.service.dto.DiretorDTO;
import com.locadora.projeto.service.dto.DiretorListDTO;
import com.locadora.projeto.service.dto.DropdownDTO;
import com.locadora.projeto.service.mapper.DiretorListMapper;
import com.locadora.projeto.service.mapper.DiretorMapper;
import com.locadora.projeto.service.util.MensagemClasseUtil;
import com.locadora.projeto.service.util.MensagemDiretorUtil;
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
public class DiretorServiceImpl implements DiretorService {

    private final DiretorListMapper listMapper;
    private final DiretorMapper mapper;
    private final DiretorRepository repository;
    private final TituloRepository tituloRepository;


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
        checkNameDuplicate(dto);
        return mapper.toDto(repository.save(mapper.toEntity(dto)));
    }

    public void delete(Integer id) {
        checkLinkDirectorTitle(id);
        Diretor diretor = findById(id);
        diretor.setAtivo(false);
        repository.save(diretor);
    }

    public List<DropdownDTO> searchDropdown(){
        return repository.dropdownDiretor();
    }

    private void checkNameDuplicate(DiretorDTO dto){
        Optional<Diretor> diretor = repository.findDiretorByNomeDiretor(dto.getNomeDiretor());
        if(nameDuplicate(dto, diretor)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, MensagemDiretorUtil.DIRETOR_NAO_ENCOTRADO);
        }
    }

    private boolean nameDuplicate(DiretorDTO dto, Optional<Diretor> optional) {
        return optional.isPresent() && optional.get().getId().equals(dto.getId());
    }

    private void checkLinkDirectorTitle(Integer id){
        if(Boolean.TRUE.equals(tituloRepository.existsByDiretorId(id))){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, MensagemClasseUtil.CLASSE_VINCULADA_TITULO);
        }
    }
}
