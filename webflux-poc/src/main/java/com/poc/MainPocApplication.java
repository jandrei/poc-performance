package com.poc;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;

@Slf4j
@SpringBootApplication
public class MainPocApplication {

	public static void main(String[] args) {
		SpringApplication.run(MainPocApplication.class, args);
	}
}
