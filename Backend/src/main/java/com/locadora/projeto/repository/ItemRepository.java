package com.locadora.projeto.repository;

import com.locadora.projeto.domain.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {
    List<Item> findAllByAtivoIsTrue();

    Boolean existsByTituloId(Integer idTitulo);
}
