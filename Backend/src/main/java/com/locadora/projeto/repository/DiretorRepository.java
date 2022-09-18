package com.locadora.projeto.repository;

import com.locadora.projeto.domain.Ator;
import com.locadora.projeto.domain.Diretor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiretorRepository extends JpaRepository<Diretor, Integer> {

    List<Diretor> findAllByAtivoIsTrue();
}
