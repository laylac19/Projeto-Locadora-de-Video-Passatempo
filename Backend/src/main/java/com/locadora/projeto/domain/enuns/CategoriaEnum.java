package com.locadora.projeto.domain.enuns;

import com.locadora.projeto.service.dto.DropdownDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Getter
public enum CategoriaEnum {

    ACAO(1, "Ação"),
    AVENTURA(2, "Aventura"),
    ANIMACAO(3, "Animação"),
    ANIME(4, "Anime"),
    BIOGRAFIA(5, "Biografia"),
    COMEDIA(6, "Comédia"),
    COMEDIA_ROMANTICA(7, "Comédia Romântica"),
    CRIME(8, "Crime"),
    CRIANCAS_E_FAMILIA(9, "Crianças e Família"),
    CURTA(10, "Curta"),
    DOCUMENTARIO(11, "Documentário"),
    DRAMA(12, "Drama"),
    ESTRANGEIRO(13, "Estrangeiro"),
    FANTASIA(14, "Fantasia"),
    FE_E_ESPIRITUALIDADE(15, "Fé e Espiritualidade"),
    FICCAO(16, "Ficção"),
    FICCAO_CIENTIFICA(17, "Ficção Científica"),
    GUERRA(18, "Guerra"),
    HISTORIA(19, "História"),
    LGBTQ(20, "LGBTQ"),
    MUSICA(21, "Documentário de Música"),
    MUSICAL(22, "Musical"),
    MISTERIO(23, "Mistério"),
    OUTRO(24, "Outros"),
    ROMANCE(25, "Romance"),
    SUSPENSE(26, "Suspense"),
    NATUREZA(27, "Natureza"),
    TERROR(28, "Terror"),
    VIAGEM(29, "Viagem");

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
