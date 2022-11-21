package com.locadora.projeto.repository;

import com.locadora.projeto.domain.Locacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocacaoRepository extends JpaRepository<Locacao, Integer> {

    Boolean existsLocacaosByClienteIdAndAndStatusFalse(Integer id);

    List<Locacao> findAllByAtivoIsTrue();
}
