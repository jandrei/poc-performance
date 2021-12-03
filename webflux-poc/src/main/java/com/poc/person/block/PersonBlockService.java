package com.poc.person.block;

import com.poc.person.Person;
import com.poc.person.client.PersonClientValidationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class PersonBlockService {

    //    private final PersonRepository personRepository;
    private final PersonClientValidationService personClientValidationService;

    public Person validateAndSave(Person person) {
        Boolean isValid =
                personClientValidationService.isValid(person).block();
        person.setIsValid(isValid);
        return person;
    }
//
//    public Person get(String id) {
//        return personRepository.findById(id)
//                .orElseThrow(() -> new EntityNotFoundException("Person not found"));
//    }
//
//    public void delete(String id) {
//        personRepository.findById(id)
//                .ifPresentOrElse(personRepository::delete,
//                        () -> {
//                            throw new EntityNotFoundException("Person not found");
//                        });
//    }

}
