import './App.css'
import { supabase } from './supabase'

function App() {

  const salvarRelatorio = async () => {

    const { error } = await supabase
      .from('relatórios')
      .insert([
        {
          turno: '1º Turno'
        }
      ])

    if (error) {
      alert(JSON.stringify(error))
    } else {
      alert('Relatório salvo com sucesso')
    }
  }

  return (
    <div className="container">

      <button
        onClick={salvarRelatorio}
      >
        Salvar Relatório
      </button>

    </div>
  )
}

export default App