import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={1} />
        <FiltroCard legenda="concluídas" contador={2} />
        <FiltroCard legenda="urgentes" contador={5} />
        <FiltroCard legenda="importantes" contador={3} />
        <FiltroCard legenda="normal" contador={6} />
        <FiltroCard legenda="todas" contador={17} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)
export default BarraLateral
