package com.poc.person.client;

import com.poc.person.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class PersonClientValidationService {

    @Autowired()
    @Qualifier("personValidation")
    private WebClient webClient;

    public Mono<Boolean> isValid(Person person) {
        return webClient
                .post()
                .uri("person-validate")
                .bodyValue(person)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(Boolean.class);
    }

}
