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

	@PostConstruct
	public void init() {
		//System.setProperty("reactor.netty.ioWorkerCount", "2");

		log.info("CPU: {}", Runtime.getRuntime().availableProcessors());
	}

}
