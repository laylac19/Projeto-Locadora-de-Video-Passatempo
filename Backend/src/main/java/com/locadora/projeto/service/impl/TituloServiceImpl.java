package com.locadora.projeto.service.impl;

import com.locadora.projeto.domain.AtorTitulo;
import com.locadora.projeto.domain.Titulo;
import com.locadora.projeto.repository.AtorTituloRepository;
import com.locadora.projeto.repository.ItemRepository;
import com.locadora.projeto.repository.TituloRepository;
import com.locadora.projeto.service.AtorService;
import com.locadora.projeto.service.TituloService;
import com.locadora.projeto.service.dto.DropdownDTO;
import com.locadora.projeto.service.dto.TituloDTO;
import com.locadora.projeto.service.dto.TituloListDTO;
import com.locadora.projeto.service.dto.VinculoEntidadeDTO;
import com.locadora.projeto.service.mapper.TituloMapper;
import com.locadora.projeto.service.util.MensagemTituloUtil;
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
public class TituloServiceImpl implements TituloService {

    private final TituloMapper mapper;
    private final TituloRepository repository;
    private final AtorService atorService;
    private final AtorTituloRepository atorTituloRepository;

    private final ItemRepository itemRepository;

    public List<TituloListDTO> findAll() {
        return repository.buscarTitulos();
    }

    public TituloDTO find(Integer id) {
        return mapper.toDto(findById(id));
    }

    public List<DropdownDTO> searchDropdown(){
        return repository.buscarDropdown();
    }

    private Titulo findById(Integer id){
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        MensagemTituloUtil.TITULO_NAO_ENCOTRADO));
    }

    public TituloDTO save(TituloDTO dto) {
        verificarNomeDuplicado(dto);
        return mapper.toDto(repository.save(mapper.toEntity(dto)));
    }

    public void delete(Integer id) {
        verificarVinculoTituloItem(id);
        Titulo titulo = findById(id);
        titulo.setAtivo(false);
        repository.save(titulo);
    }

    public void saveActorWithTitle(VinculoEntidadeDTO dto){
        AtorTitulo entity = new AtorTitulo();
        entity.setAtor(atorService.findByIdEntity(dto.getId2()));
        entity.setTitulo(findById(dto.getId1()));
        entity.setIdTitulo(dto.getId1());
        entity.setIdAtor(dto.getId2());
        atorTituloRepository.save(entity);
    }

    private void verificarNomeDuplicado(TituloDTO dto){
        Optional<Titulo> titulo = repository.findTituloByNome(dto.getNome());
        if(nomeDuplicado(dto, titulo)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, MensagemTituloUtil.TITULO_NAO_ENCOTRADO);
        }
    }

    private boolean nomeDuplicado(TituloDTO dto, Optional<Titulo> optional) {
        return optional.isPresent() && optional.get().getId().equals(dto.getId());
    }

    private void verificarVinculoTituloItem(Integer id) {
        if(Boolean.TRUE.equals(itemRepository.existsByTituloId(id))){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, MensagemTituloUtil.TITULO_VINCULADO_ITEM);
        }
    }
}
