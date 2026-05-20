import { useState } from 'react'
import { api } from '../servicos/api'

export function useAutenticacao() {
  const [carregando, setCarregando] = useState(false)
  const [mensagem, setMensagem] = useState('')

  async function login(email: string, senha: string) {
    try {
      setCarregando(true)

      if (!email || !senha) {
        throw new Error('Preencha todos os campos.')
      }

      const resposta = await api.post('/usuarios/login', {
        email,
        senha
      })

      localStorage.setItem('usuario', JSON.stringify(resposta.data))
      setMensagem('Login realizado com sucesso.')
      return true
    } catch (erro: any) {
      setMensagem(erro?.response?.data?.message || erro.message)
      return false
    } finally {
      setCarregando(false)
    }
  }

  async function cadastrar(nome: string, email: string, senha: string) {
    try {
      setCarregando(true)

      if (!nome || !email || !senha) {
        throw new Error('Preencha todos os campos.')
      }

      await api.post('/usuarios/cadastro', {
        nome,
        email,
        senha
      })

      setMensagem('Cadastro realizado com sucesso.')
      return true
    } catch (erro: any) {
      setMensagem(erro?.response?.data?.message || erro.message)
      return false
    } finally {
      setCarregando(false)
    }
  }

  return {
    carregando,
    mensagem,
    login,
    cadastrar
  }
}