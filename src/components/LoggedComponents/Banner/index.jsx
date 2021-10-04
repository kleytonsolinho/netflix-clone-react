import { FaPlay, FaInfoCircle } from 'react-icons/fa';

import logoFilm from '../../../assets/images/logo-filme.webp';

import { Container, Content, Classify } from './styles';

export default function Banner() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoFilm} alt="" />
          <p>
            Depois de deixar para trás um relacionamento abusivo e encontrar um
            emprego como faxineira, uma mulher luta para sustentar a filha e
            construir um futuro melhor.
          </p>
          <div className="btns">
            <button type="button">
              <FaPlay className="icon" />
              Assistir
            </button>
            <button type="button">
              <FaInfoCircle className="icon" />
              Mais informações
            </button>
          </div>
        </div>
      </Content>
      <Classify>
        <span>16</span>
      </Classify>
    </Container>
  );
}
