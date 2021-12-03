package com.example.webfluxvalidationapipoc.person;

import com.example.webfluxvalidationapipoc.person.dto.Person;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.Random;

@RequiredArgsConstructor
@Service
@Slf4j
public class PersonValidationService {

    public Mono<Boolean> validatePerson(Person person) {
        return Mono.just(new Random().nextBoolean())
                .flatMap(booleans -> {
                            try {
                                Thread.sleep(200);
                            } catch (InterruptedException e) {
                            }
                            return Mono.just(booleans);
                        }
                );
    }

//    private Mono<ValidationHistory> processValidation(Person person) {
//        log.info("registration running for name {}", person.getName());
//        return Mono.justOrEmpty(personValidationRepository.existsByDateTime(LocalDate.now()))
//                .flatMap(exists -> {
//                    if (exists) {
//                        return Mono.just(personValidationRepository
//                                .incrementQtdValidation(LocalDate.now()));
//                    }
//                    return Mono.just(personValidationRepository.save(ValidationHistory.builder()
//                            .date(LocalDate.now())
//                            .qtdValidationsExecuted(1)
//                            .build()));
//                });
//    }


}
