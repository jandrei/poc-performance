package com.example.webfluxvalidationapipoc.person;

import com.example.webfluxvalidationapipoc.person.dto.Person;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RequiredArgsConstructor
@RestController
public class PersonValidationController {

    private final PersonValidationService personValidationService;

    @PostMapping(value = "/person-validate",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Mono<Boolean> isPersonValid(@Validated @RequestBody Person person) {
        return personValidationService.validatePerson(person);
    }
}
