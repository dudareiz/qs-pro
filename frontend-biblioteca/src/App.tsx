import { useState } from 'react'
import { TelaAutenticacao } from './paginas/TelaAutenticacao'
import { DashboardLivros } from './paginas/DashboardLivros'

export default function App() {
  const [usuario, setUsuario] = useState(localStorage.getItem('usuario'))

  return usuario ? (
    <DashboardLivros sair={() => {
      localStorage.clear()
      setUsuario(null)
    }} />
  ) : (
    <TelaAutenticacao aoAutenticar={() => setUsuario('ativo')} />
  )
}