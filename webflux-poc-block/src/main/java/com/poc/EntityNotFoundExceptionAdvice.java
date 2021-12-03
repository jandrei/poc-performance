package com.poc;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Map;

@RestControllerAdvice
public class EntityNotFoundExceptionAdvice {

    @ExceptionHandler(value = {EntityNotFoundException.class})
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public Map<String, Object> resourceNotFoundException(EntityNotFoundException ex, WebRequest request) {
        return Map.of("dateTime", LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME),
                "message", ex.getMessage());
    }

    @ExceptionHandler(value = {NullPointerException.class})
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    public Map<String, Object> nullPointerException(NullPointerException ex, WebRequest request) {
        return Map.of("dateTime", LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME),
                "message", "nullpointer");
    }
}
