package com.poc.person.nonblock;

import com.poc.person.Person;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RequiredArgsConstructor
@RestController
public class PersonNonBlockController {

    private final PersonNonBlockService personNonBlockService;

//    @GetMapping("/person/{id}")
//    public Mono<Person> get(@PathVariable("id") String id) {
//        return personNonBlockService.get(id);
//    }

    @PostMapping("/person")
    public Mono<Person> post(@Validated @RequestBody Person person) {
        return personNonBlockService.validateAndSave(person);
    }

//    @DeleteMapping("/person/{id}")
//    public Mono<Void> delete(@PathVariable("id") String id) {
//        return personNonBlockService.delete(id);
//    }
}
