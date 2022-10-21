package com.locadora.projeto.repository;

import com.locadora.projeto.domain.Cliente;
import com.locadora.projeto.service.dto.ClienteListDTO;
import com.locadora.projeto.service.dto.DropdownDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

    @Query("select new com.locadora.projeto.service.dto.ClienteListDTO(s.id, c.numeroInscricao, c.nome, s.cpf, s.telefone, c.dataNascimento) " +
            "from Socio s join Cliente c on c.id = s.id where c.ativo = :situacao and s.id in (select d.idDependente from Dependente d)")
    List<ClienteListDTO> clientesDependente(@Param("situacao") Boolean situacao);

    @Query("select new com.locadora.projeto.service.dto.ClienteListDTO(s.id, c.numeroInscricao, c.nome, s.cpf, s.telefone, c.dataNascimento) " +
            "from Socio s join Cliente c on c.id = s.id where c.ativo = :situacao")
    List<ClienteListDTO> clienteSocios(@Param("situacao") Boolean situacao);

    @Query("select new com.locadora.projeto.service.dto.DropdownDTO(c.id, c.nome) from Cliente c " +
            "where c.id not in (select s.id from Socio s) and c.id not in (select d.idDependente from Dependente d)")
    List<DropdownDTO> buscarClientesNaoSocios();

}
