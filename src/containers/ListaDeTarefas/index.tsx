import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Lavar a louça',
    descricao: 'Lavar os pratos, talheres e panelas',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar as contas',
    descricao: 'Rastreador e Unimed',
    prioridade: 'urgente',
    status: 'concluida'
  },
  {
    titulo: 'Exercícios físicos',
    descricao: 'Agachamentos e barras',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot; &quot;termo&quot;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
