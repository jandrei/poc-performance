package com.poc.person.nonblock;

import com.poc.person.Person;
import com.poc.person.client.PersonClientValidationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Schedulers;

@RequiredArgsConstructor
@Service
public class PersonNonBlockService {

//    private final PersonRepository personRepository;
    private final PersonClientValidationService personClientValidationService;

    public Mono<Person> validateAndSave(Person person) {
        return personClientValidationService.isValid(person)
                .subscribeOn(Schedulers.parallel())
                .flatMap(t -> {
                    person.setIsValid(t);
                    return Mono.just(person);
                })
                .flatMap(r -> Mono.just(person));
    }

//    public Mono<Person> get(String id) {
//        return Mono.just(personRepository.findById(id)
//                .orElseThrow(() -> new EntityNotFoundException("Person not found")));
//    }
//
//    public Mono<Void> delete(String id) {
//        return Mono.just(personRepository.findById(id)
//                .orElseThrow(() -> new EntityNotFoundException("Person not found")))
//                .flatMap(person -> {
//                    personRepository.delete(person);
//                    return Mono.empty();
//                });
//    }

}
