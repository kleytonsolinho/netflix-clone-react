import { FaSearch, FaBell } from 'react-icons/fa';

import imgLogo from '../../../assets/images/logo.svg';

import { Container, NavMenu, NavBar } from './styles';

export default function Header() {
  return (
    <Container>
      <NavMenu>
        <img src={imgLogo} alt="Logo Netflix" />
        <ul>
          <li>Início</li>
          <li>Séries</li>
          <li>Filmes</li>
          <li>Bombando</li>
          <li>Minha lista</li>
        </ul>
      </NavMenu>
      <NavBar>
        <button type="button">
          <FaSearch />
        </button>
        <button type="button">
          <FaBell />
        </button>
        <button type="button">T</button>
      </NavBar>
    </Container>
  );
}
