package com.poc.person.client;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.netty.http.client.HttpClient;
import reactor.netty.resources.ConnectionProvider;
import reactor.util.function.Tuple2;

import java.time.Duration;

@Slf4j
@Configuration
public class PersonClientValidationConfig {

    @Value("${person-validation-api.base-url}")
    private String validationApi;

    @Bean("personValidation")
    WebClient personValidation() {
        ReactorClientHttpConnector clientHttpConnector = new ReactorClientHttpConnector(HttpClient.create()
                .responseTimeout(Duration.ofSeconds(600)));

        return WebClient.builder()
                .baseUrl(validationApi)
                .clientConnector(clientHttpConnector)
                .filter((request, next) ->
                        next.exchange(request)
                                .elapsed()
                                .doOnNext(it -> log.info("METHOD {} StatusCode {} URL {} Called in {} MS"
                                        , request.method()
                                        , it.getT2().statusCode()
                                        , request.url()
                                        , it.getT1()))
                                .map(Tuple2::getT2))
                .build();
    }


}
