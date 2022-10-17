package com.locadora.projeto.domain.enuns;

import com.locadora.projeto.service.dto.DropdownDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Getter
public enum CategoriaEnum {

    ACAO(1, "AÇÃO"),
    AVENTURA(2, "AVENTURA"),
    ANIMACAO(3, "ANIMAÇÃO"),
    ANIME(4, "ANIME"),
    BIOGRAFIA(5, "BIOGRAFIA"),
    COMEDIA(6, "COMÉDIA"),
    COMEDIA_ROMANTICA(7, "COMÉDIA_ROMÂNTICA"),
    CRIME(8, "CRIME"),
    CRIANCAS_E_FAMILIA(9, "CRIANÇAS_E_FAMÍLIA"),
    CURTA(10, "CURTA"),
    DOCUMENTARIO(11, "DOCUMENTÁRIO"),
    DRAMA(12, "DRAMA"),
    ESTRANGEIRO(13, "ESTRANGEIRO"),
    FANTASIA(14, "FANTASIA"),
    FE_E_ESPIRITUALIDADE(15, "FÉ_E_ESPIRITUALIDADE"),
    FICCAO(16, "FICÇÃO"),
    FICCAO_CIENTIFICA(17, "FICÇÃO_CIENTÍFICA"),
    GUERRA(18, "GUERRA"),
    HISTORIA(19, "HISTÓRIA"),
    LGBTQ(20, "LGBTQ"),
    MUSICA(21, "MÚSICA"),
    MUSICAL(22, "MUSICAL"),
    MISTERIO(23, "MISTÉRIO"),
    OUTRO(24, "OUTRO"),
    ROMANCE(25, "ROMANCE"),
    SUSPENSE(26, "SUSPENSE"),
    NATUREZA(27, "NATUREZA"),
    TERROR(28, "TERROR"),
    VIAGEM(29, "VIAGEM");

    private final Integer id;
    private final String nomeCategoria;

    public static List<DropdownDTO> dropdown(){
        List<DropdownDTO> lista = new ArrayList<>();
        for (CategoriaEnum categoriaEnum : CategoriaEnum.values()){
            lista.add(new DropdownDTO(categoriaEnum.getId(), categoriaEnum.getNomeCategoria()));
        }
        return lista;
    }
}
