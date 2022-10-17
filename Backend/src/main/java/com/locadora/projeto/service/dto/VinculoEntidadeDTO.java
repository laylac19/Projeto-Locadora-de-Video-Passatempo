package com.locadora.projeto.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
public class VinculoEntidadeDTO implements Serializable{
     private Integer id1;
     private Integer id2;
}
