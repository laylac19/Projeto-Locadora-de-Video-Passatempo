package com.locadora.projeto.service;

import com.locadora.projeto.service.dto.AtorDTO;
import com.locadora.projeto.service.dto.AtorListDTO;

import java.util.List;

public interface AtorService {

    List<AtorListDTO> findAll();

    AtorDTO find(Integer id);

    AtorDTO save(AtorDTO dto);

    void delete(Integer id);
}