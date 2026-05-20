import { useState } from 'react'
import { useLivros } from '../hooks/useLivros'
import { Livro } from '../tipos'

export function DashboardLivros({ sair }: any) {
  const { livros, salvarLivro, removerLivro, carregando, mensagem, pesquisarLivros } = useLivros()

  const [livro, setLivro] = useState<Livro>({
    titulo: '',
    autor: '',
    genero: '',
    ano: new Date().getFullYear()
  })

  function editarLivro(item: Livro) {
    setLivro(item)
  }

  function cancelarEdicao() {
    setLivro({
      titulo: '',
      autor: '',
      genero: '',
      ano: new Date().getFullYear()
    })
  }

  async function enviar(evento: any) {
    evento.preventDefault()
    const sucesso = await salvarLivro(livro)

    if (sucesso) {
      cancelarEdicao()
    }
  }

  return (
    <main className="container">
      <section className="cartao">
        <div className="cabecalho">
          <h2>Acervo de Livros</h2>
          <button data-testid="botao-sair" onClick={sair}>Sair</button>
        </div>

        <form onSubmit={enviar} className="formulario">
          <input data-testid="campo-livro-titulo" placeholder="Título" value={livro.titulo} onChange={(e) => setLivro({ ...livro, titulo: e.target.value })} />
          <input data-testid="campo-livro-autor" placeholder="Autor" value={livro.autor} onChange={(e) => setLivro({ ...livro, autor: e.target.value })} />
          <input data-testid="campo-livro-genero" placeholder="Gênero" value={livro.genero} onChange={(e) => setLivro({ ...livro, genero: e.target.value })} />
          <input data-testid="campo-livro-ano" type="number" placeholder="Ano" value={livro.ano} onChange={(e) => setLivro({ ...livro, ano: Number(e.target.value) })} />

          <div className="acoes">
            <button data-testid="botao-salvar-livro" type="submit">
              {livro.id ? 'Atualizar Livro' : 'Adicionar Livro'}
            </button>

            {livro.id && (
              <button data-testid="botao-cancelar-edicao" type="button" onClick={cancelarEdicao}>
                Cancelar
              </button>
            )}
          </div>
        </form>

        {mensagem && <p data-testid="alerta-sucesso">{mensagem}</p>}


        <input
          data-testid="campo-pesquisa-livro"
          placeholder="Pesquise por título ou autor..."
          onChange={(e) => pesquisarLivros(e.target.value)}
        />



        {carregando ? (
          <p data-testid="loader-livros">Carregando...</p>
        ) : (
          <table data-testid="tabela-livros">
            <thead>
              <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Gênero</th>
                <th>Ano</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {livros.map((item) => (
                <tr key={item.id}>
                  <td>{item.titulo}</td>
                  <td>{item.autor}</td>
                  <td>{item.genero}</td>
                  <td>{item.ano}</td>
                  <td className="acoes">
                    <button data-testid={`botao-editar-${item.id}`} onClick={() => editarLivro(item)}>
                      Editar
                    </button>

                    <button data-testid={`botao-remover-${item.id}`} onClick={() => removerLivro(item.id!)}>
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  )
}