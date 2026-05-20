
package com.biblioteca.service;

import com.biblioteca.model.Livro;
import com.biblioteca.repository.LivroRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LivroService {

    @Autowired
    private LivroRepository repository;

    public Livro salvar(Livro livro) {
        return repository.save(livro);
    }

    public List<Livro> listar() {
        return repository.findAll();
    }

    public Livro atualizar(String id, Livro livroAtualizado) {

        Livro livro = repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Livro não encontrado"));

        livro.setTitulo(livroAtualizado.getTitulo());
        livro.setAutor(livroAtualizado.getAutor());
        livro.setGenero(livroAtualizado.getGenero());
        livro.setAno(livroAtualizado.getAno());

        return repository.save(livro);
    }

    public void deletar(String id) {
        repository.deleteById(id);
    }

    public List<Livro> buscarPorTitulo(String titulo) {
        return repository.findByTituloContainingIgnoreCase(titulo);
    }

    public List<Livro> buscarPorAutor(String autor) {
        return repository.findByAutorContainingIgnoreCase(autor);
    }

    public List<Livro> buscarPorGenero(String genero) {
        return repository.findByGeneroContainingIgnoreCase(genero);
    }
}
