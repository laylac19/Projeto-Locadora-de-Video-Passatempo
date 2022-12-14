package com.locadora.projeto.service.impl;

import com.locadora.projeto.domain.Ator;
import com.locadora.projeto.repository.AtorRepository;
import com.locadora.projeto.repository.AtorTituloRepository;
import com.locadora.projeto.service.AtorService;
import com.locadora.projeto.service.dto.AtorDTO;
import com.locadora.projeto.service.dto.AtorListDTO;
import com.locadora.projeto.service.dto.DropdownDTO;
import com.locadora.projeto.service.dto.VinculoEntidadeDTO;
import com.locadora.projeto.service.mapper.AtorListMapper;
import com.locadora.projeto.service.mapper.AtorMapper;
import com.locadora.projeto.service.util.MensagemAtorUtil;
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
public class AtorServiceImpl implements AtorService {

    private final AtorMapper mapper;
    private final AtorListMapper listMapper;
    private final AtorRepository repository;
    private final AtorTituloRepository atorTituloRepository;

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
        checkDuplicateName(dto);
        return mapper.toDto(repository.save(mapper.toEntity(dto)));
    }

    public void delete(Integer id) {
        checkTitleLink(id);
        Ator ator = findByIdEntity(id);
        ator.setAtivo(false);
        repository.save(ator);
    }

    public List<DropdownDTO> searchDropdown(){
        return repository.buscarDropdown();
    }

    public List<DropdownDTO> searchCastMovie(Integer idFilme) {
        return repository.buscarAtoresFilme(idFilme);
    }

    private void checkDuplicateName(AtorDTO dto){
        Optional<Ator> ator = repository.findAtorByNomeAtor(dto.getNomeAtor());
        if(duplicateName(dto, ator)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, MensagemAtorUtil.ATOR_DUPLICADO);
        }
    }

    private boolean duplicateName(AtorDTO dto, Optional<Ator> optionalAtor) {
        return optionalAtor.isPresent() && optionalAtor.get().getId().equals(dto.getId());
    }

    private void checkTitleLink(Integer id){
        if(Boolean.TRUE.equals(atorTituloRepository.existsByAtorId(id))){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, MensagemAtorUtil.ATOR_VINCULADO_TITULO);
        }
    }

    public void withdrawActorFromCast(Integer idAtor, Integer idTitulo) {
        atorTituloRepository.deleteAtorTituloByAtorIdAndTituloId(idAtor, idTitulo);
    }

}
