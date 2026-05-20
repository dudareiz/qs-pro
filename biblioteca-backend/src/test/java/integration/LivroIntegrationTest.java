package com.biblioteca.integration;

import com.biblioteca.model.Livro;
import com.biblioteca.repository.LivroRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class LivroIntegrationTest {

    @Autowired
    private LivroRepository repository;

    @Test
    void deveSalvarLivro() {

        Livro livro = new Livro();

        livro.setTitulo("Clean Code");
        livro.setAutor("Robert Martin");
        livro.setGenero("Tecnologia");
        livro.setAno(2008);

        Livro salvo = repository.save(livro);

        assertNotNull(salvo.getId());
    }
}