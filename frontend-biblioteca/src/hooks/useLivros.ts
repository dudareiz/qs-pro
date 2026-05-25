import { useEffect, useState } from 'react'
import { api } from '../servicos/api'
import { Livro } from '../tipos'

export function useLivros() {
  const [livros, setLivros] = useState<Livro[]>([])
  const [carregando, setCarregando] = useState(false)
  const [mensagem, setMensagem] = useState('')
  const [termoPesquisa, setTermoPesquisa] = useState('')

  async function listarLivros() {
    try {
      setCarregando(true)

      const resposta = await api.get('/livros')

      setLivros(resposta.data)

    } catch {
      setMensagem('Erro ao carregar livros.')

    } finally {
      setCarregando(false)
    }
  }

  async function pesquisarLivros(termo: string) {
    try {
      setTermoPesquisa(termo)
      setCarregando(true)

      if (!termo.trim()) {
        listarLivros()
        return
      }

      const respostaTitulo = await api.get(
        `/livros/buscar/titulo?titulo=${termo}`
)

const respostaAutor = await api.get(
`/livros/buscar/autor?autor=${termo}`
)

const livrosUnicos = [
...respostaTitulo.data,

...respostaAutor.data.filter(
          (livroAutor: Livro) =>
            !respostaTitulo.data.some(
              (livroTitulo: Livro) =>
                livroTitulo.id === livroAutor.id
)
)
]

setLivros(livrosUnicos)

    } catch {
      setMensagem('Erro ao pesquisar livros.')

    } finally {
      setCarregando(false)
    }
  }

  async function salvarLivro(livro: Livro) {
    try {
      setCarregando(true)

      if (!livro.titulo || !livro.autor || !livro.genero) {
        throw new Error('Todos os campos são obrigatórios.')
      }

      if (livro.ano > new Date().getFullYear()) {
        throw new Error('Ano inválido.')
      }

      if (livro.id) {
        await api.put(`/livros/${livro.id}`, livro)
        setMensagem('Livro atualizado com sucesso.')
      } else {
        await api.post('/livros', livro)
        setMensagem('Livro adicionado com sucesso.')
      }

      listarLivros()

      return true

    } catch (erro: any) {
      setMensagem(erro.message)
      return false

    } finally {
      setCarregando(false)
    }
  }

  async function removerLivro(id: string) {
    try {
      setCarregando(true)

      await api.delete(`/livros/${id}`)

      setMensagem('Livro removido com sucesso.')

      listarLivros()

    } catch {
      setMensagem('Erro ao remover livro.')

    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    listarLivros()
  }, [])

  return {
    livros,
    carregando,
    mensagem,
    salvarLivro,
    removerLivro,
    termoPesquisa,
    pesquisarLivros
  }
}