# RTM - Matriz de Rastreabilidade

| Requisito Funcional | Hook / Caixa Branca | Teste Caixa Preta |
|---|---|---|
| Login de Usuário | useAutenticacao.ts -> login() | data-testid="campo-cadastro-email" e "botao-autenticacao" |
| Cadastro de Usuário | useAutenticacao.ts -> cadastrar() | data-testid="campo-cadastro-nome" |
| Listar Livros | useLivros.ts -> listarLivros() | data-testid="tabela-livros" |
| Adicionar Livro | useLivros.ts -> salvarLivro() | data-testid="botao-salvar-livro" |
| Editar Livro | useLivros.ts -> salvarLivro() | data-testid="botao-editar-id" |
| Remover Livro | useLivros.ts -> removerLivro() | data-testid="botao-remover-id" |
| Feedback Visual | Hooks e estados de mensagem | data-testid="alerta-sucesso" e "alerta-erro" |
| Buscar Livros | useLivros.ts -> pesquisarLivros() | data-testid="campo-pesquisa-livro" |
