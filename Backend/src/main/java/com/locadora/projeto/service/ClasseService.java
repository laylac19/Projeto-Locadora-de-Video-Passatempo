package com.locadora.projeto.service;

import com.locadora.projeto.service.dto.ClasseDTO;
import com.locadora.projeto.service.dto.ClasseListDTO;

import java.util.List;

public interface ClasseService {

    List<ClasseListDTO> findAll();

    ClasseDTO find(Integer id);

    ClasseDTO save(ClasseDTO dto);

    void delete(Integer id);
}