package service;

import com.biblioteca.model.Livro;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class LivroServiceTest {

    @Test
    void deveCriarLivroComDadosValidos() {

        Livro livro = new Livro();

        livro.setTitulo("1984");
        livro.setAutor("George Orwell");
        livro.setGenero("Ficção");
        livro.setAno(1949);

        assertEquals("1984", livro.getTitulo());
        assertEquals("George Orwell", livro.getAutor());
        assertEquals("Ficção", livro.getGenero());
        assertEquals(1949, livro.getAno());
    }
}
