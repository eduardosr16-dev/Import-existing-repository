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
      alert('Erro ao salvar')
      console.log(error)
    } else {
      alert('Relatório salvo com sucesso')
    }
  }
  return (
    <div className="container">
      <h1>RDS - Polícia Militar</h1>

      <section className="bloco">
        <h2>Informações do Turno</h2>

        <div className="grid">
          <div>
            <label>Tipo de Turno</label>
            <select>
              <option>1º Turno</option>
              <option>2º Turno</option>
            </select>
          </div>

          <div>
            <label>Data Inicial</label>
            <input type="date" />
          </div>

          <div>
            <label>Data Final</label>
            <input type="date" />
          </div>

          <div>
            <label>Hora Inicial</label>
            <input type="time" />
          </div>

          <div>
            <label>Hora Final</label>
            <input type="time" />
          </div>

          <div>
            <label>Comandante</label>
            <input type="text" />
          </div>

          <div>
            <label>Motorista</label>
            <input type="text" />
          </div>

          <div>
            <label>Patrulheiro</label>
            <input type="text" />
          </div>

          <div>
            <label>Viatura</label>
            <input type="text" />
          </div>

          <div>
            <label>Setor</label>
            <input type="text" />
          </div>
        </div>
      </section>

      <section className="bloco">
        <h2>Produtividade</h2>

        <div className="grid">
          <div>
            <label>Pessoas abordadas</label>
            <input type="number" />
          </div>

          <div>
            <label>Carros checados</label>
            <input type="number" />
          </div>

          <div>
            <label>Motos checadas</label>
            <input type="number" />
          </div>

          <div>
            <label>AIT confeccionados</label>
            <input type="number" />
          </div>

          <div>
            <label>TCO registrados</label>
            <input type="number" />
          </div>

          <div>
            <label>Prisões em flagrante</label>
            <input type="number" />
          </div>

          <div>
            <label>Pessoas conduzidas</label>
            <input type="number" />
          </div>
        </div>
      </section>

      <section className="bloco">
        <h2>Apreensões</h2>

        <div className="grid">
          <div>
            <label>Veículos apreendidos</label>
            <input type="number" />
          </div>

          <div>
            <label>Armas apreendidas</label>
            <input type="number" />
          </div>

          <div>
            <label>Munições</label>
            <input type="number" />
          </div>

          <div>
            <label>Drogas</label>
            <input type="number" />
          </div>

          <div>
            <label>Valores</label>
            <input type="number" />
          </div>

          <div>
            <label>Diversos</label>
            <input type="number" />
          </div>
        </div>
      </section>

      <section className="bloco">
        <h2>Ocorrências do Turno</h2>

        <textarea
          placeholder="Descreva as ocorrências do turno..."
          rows={8}
        ></textarea>
      </section>
      <button
  className="botao"
  onClick={salvarRelatorio}
>
  Salvar Relatório

 </button>
 
    </div>
  )
}
export default App 