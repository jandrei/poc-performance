package com.poc.person;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@Builder
//@Document
public class Person {
//    @Id
    private String id;

    @NotNull(message = "name is required")
    private String name;

    private String age;

    private Boolean isValid;
}
