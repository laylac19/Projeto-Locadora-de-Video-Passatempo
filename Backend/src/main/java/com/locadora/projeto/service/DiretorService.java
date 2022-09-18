package com.locadora.projeto.service;

import com.locadora.projeto.service.dto.DiretorDTO;
import com.locadora.projeto.service.dto.DiretorListDTO;

import java.util.List;

public interface DiretorService {

    List<DiretorListDTO> findAll();

    DiretorDTO find(Integer id);

    DiretorDTO save(DiretorDTO dto);

    void delete(Integer id);
}