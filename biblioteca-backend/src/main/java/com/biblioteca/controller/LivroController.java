package com.biblioteca.controller;

import com.biblioteca.model.Livro;
import com.biblioteca.service.LivroService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/livros")
@CrossOrigin("http://localhost:5173")
public class LivroController {

    @Autowired
    private LivroService service;

    @PostMapping
    public ResponseEntity<Livro> salvar(
            @RequestBody Livro livro
    ) {
        return ResponseEntity.ok(service.salvar(livro));
    }

    @GetMapping
    public ResponseEntity<List<Livro>> listar() {
        return ResponseEntity.ok(service.listar());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Livro> atualizar(
            @PathVariable String id,
            @RequestBody Livro livro
    ) {
        return ResponseEntity.ok(
                service.atualizar(id, livro)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(
            @PathVariable String id
    ) {
        service.deletar(id);

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/buscar/titulo")
    public ResponseEntity<List<Livro>> buscarPorTitulo(
            @RequestParam String titulo
    ) {
        return ResponseEntity.ok(
                service.buscarPorTitulo(titulo)
        );
    }

    @GetMapping("/buscar/autor")
    public ResponseEntity<List<Livro>> buscarPorAutor(
            @RequestParam String autor
    ) {
        return ResponseEntity.ok(
                service.buscarPorAutor(autor)
        );
    }

    @GetMapping("/buscar/genero")
    public ResponseEntity<List<Livro>> buscarPorGenero(
            @RequestParam String genero
    ) {
        return ResponseEntity.ok(
                service.buscarPorGenero(genero)
        );
    }
}