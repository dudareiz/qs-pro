# 📚 Biblioteca Pessoal

Sistema completo para cadastro e gerenciamento de livros de uma biblioteca pessoal, desenvolvido com foco em Qualidade de Software, testes automatizados e boas práticas de desenvolvimento.

---

# 🚀 Objetivo do Projeto

O objetivo deste projeto é desenvolver uma aplicação full stack para gerenciamento de livros e autenticação de usuários, utilizando Spring Boot no backend, MongoDB como banco de dados e uma interface web responsiva no frontend.

O sistema foi desenvolvido priorizando:

- Arquitetura organizada
- Alta testabilidade
- Integração contínua (CI)
- Cobertura de testes
- Qualidade automatizada
- Experiência do usuário

---

# 🛠️ Tecnologias Utilizadas

## Backend
- Java 17
- Spring Boot
- MongoDB
- Maven
- Arquitetura MVC
- JWT Authentication

## Frontend
- React
- Vite
- Bootstrap / CSS
- Gerenciamento de Sessão

## Qualidade de Software
- JUnit 5
- Testcontainers
- VCR
- GitHub Actions
- SonarQube
- JaCoCo

---

# ✨ Funcionalidades

## Usuários
- Cadastro de usuários
- Login
- Autenticação

## Livros
- Cadastro de livros
- Listagem de livros
- Atualização de livros
- Exclusão de livros

---

# 🧪 Estratégia de Testes

O projeto segue uma estratégia completa de testes automatizados.

## Tipos de testes implementados
- Testes Unitários
- Testes de Integração
- Testes Parametrizados
- Testes Caixa Branca
- Testes Caixa Preta

## Regras do Projeto
- ❌ Uso de mocks proibido
- ✅ Uso de Testcontainers
- ✅ Persistência real com MongoDB
- ✅ Cobertura mínima de 80%

---

# 🔄 Integração Contínua

O projeto possui pipeline automatizado com GitHub Actions para:

- Build da aplicação
- Execução automática dos testes
- Verificação de qualidade
- Integração contínua

---

# 📊 Cobertura de Testes

A cobertura de testes é monitorada utilizando:

- JaCoCo
- SonarQube

Objetivo mínimo:
- ✅ 80% de cobertura

---

# 📁 Estrutura do Projeto

```bash
src/
 ├── controller
 ├── service
 ├── repository
 ├── model
 └── test