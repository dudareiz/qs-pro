package service;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.*;

public class LivroParametrizadoTest {

    @ParameterizedTest
    @ValueSource(strings = {
            "Harry Potter",
            "1984",
            "Clean Code",
            "Dom Casmurro"
    })

    void naoDeveAceitarTituloVazio(String titulo) {

        assertFalse(titulo.isEmpty());
    }
}
