package com.poc.person.block;

import com.poc.person.Person;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class PersonBlockController {

    private final PersonBlockService personBlockService;

//    @GetMapping("/person-block/{id}")
//    public Person get(@PathVariable("id") String id) {
//        return personBlockService.get(id);
//    }

    @PostMapping("/person-block")
    public Person post(@Validated @RequestBody Person person) {
        return personBlockService.validateAndSave(person);
    }

//    @DeleteMapping("/person-block/{id}")
//    public void delete(@PathVariable("id") String id) {
//        personBlockService.delete(id);
//    }
}
