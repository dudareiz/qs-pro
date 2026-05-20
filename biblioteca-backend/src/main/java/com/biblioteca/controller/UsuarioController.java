package com.biblioteca.controller;

import com.biblioteca.model.Usuario;
import com.biblioteca.service.UsuarioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin("http://localhost:5173")
public class UsuarioController {

    @Autowired
    private UsuarioService service;

    @PostMapping("/cadastro")
    public ResponseEntity<Usuario> cadastrar(
            @RequestBody Usuario usuario
    ) {
        return ResponseEntity.ok(
                service.cadastrar(usuario)
        );
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> listar() {
        return ResponseEntity.ok(service.listar());
    }

    @PostMapping("/login")
    public ResponseEntity<Usuario> login(
            @RequestBody Usuario usuario
    ) {

        Usuario usuarioLogado = service.login(
                usuario.getEmail(),
                usuario.getSenha()
        );

        return ResponseEntity.ok(usuarioLogado);
    }
}