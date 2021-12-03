package com.example.webfluxvalidationapipoc.person.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@Builder
public class Person {
    @NotNull(message = "name is required")
    private String name;
    private Integer age;
    private Boolean isValid;
}
