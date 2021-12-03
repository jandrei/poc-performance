package com.poc.person.client;

import com.poc.person.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class PersonClientValidationService {

    @Autowired()
    private RestTemplate restTemplate;

    @Value("${person-validation-api.base-url}")
    private String validationApi;

    public Boolean isValid(Person person) {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));
        HttpEntity<Person> body = new HttpEntity<>(person, headers);
        return restTemplate
                .postForObject(validationApi.concat("/person-validate"),
                        body, Boolean.class);
    }

}
