package com.locadora.projeto.repository;

import com.locadora.projeto.domain.TituloItem;
import com.locadora.projeto.domain.TituloItemID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TituloItemRepository extends JpaRepository<TituloItem, TituloItemID> {

}
