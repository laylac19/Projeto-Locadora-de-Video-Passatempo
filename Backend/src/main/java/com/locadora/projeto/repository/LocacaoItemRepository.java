package com.locadora.projeto.repository;

import com.locadora.projeto.domain.LocacaoItem;
import com.locadora.projeto.domain.LocacaoItemPK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocacaoItemRepository extends JpaRepository<LocacaoItem, LocacaoItemPK> {
}
