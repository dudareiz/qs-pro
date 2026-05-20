import { useState } from 'react'
import { useAutenticacao } from '../hooks/useAutenticacao'

export function TelaAutenticacao({ aoAutenticar }: any) {
  const [cadastro, setCadastro] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const { login, cadastrar, carregando, mensagem } = useAutenticacao()

  async function enviarFormulario(evento: any) {
    evento.preventDefault()

    if (cadastro) {
      const sucesso = await cadastrar(nome, email, senha)
      if (sucesso) setCadastro(false)
    } else {
      const sucesso = await login(email, senha)
      if (sucesso) aoAutenticar()
    }
  }

  return (
    <main className="container">
      <section className="cartao">
        <h1>Gerenciador de Biblioteca</h1>

        <form onSubmit={enviarFormulario}>
          {cadastro && (
            <input
              data-testid="campo-cadastro-nome"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          )}

          <input
            data-testid="campo-cadastro-email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            data-testid="campo-cadastro-senha"
            placeholder="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button data-testid="botao-autenticacao" type="submit">
            {carregando ? 'Carregando...' : cadastro ? 'Cadastrar' : 'Entrar'}
          </button>
        </form>

        <button
          data-testid="botao-alternar-autenticacao"
          onClick={() => setCadastro(!cadastro)}
        >
          {cadastro ? 'Já possui conta? Entrar' : 'Criar nova conta'}
        </button>

        {mensagem && (
          <p data-testid="alerta-erro" className="mensagem">
            {mensagem}
          </p>
        )}
      </section>
    </main>
  )
}