package com.locadora.projeto.repository;

import com.locadora.projeto.domain.Ator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AtorRepository extends JpaRepository<Ator, Integer> {

    List<Ator> findAllByAtivoIsTrue();
}