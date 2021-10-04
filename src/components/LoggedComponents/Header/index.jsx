import { useEffect } from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';

import { useNavbarScroll } from '../../../hooks/useNavbarScroll';

import imgLogo from '../../../assets/images/logo.svg';

import { Container, NavMenu, NavBar } from './styles';

export default function Header() {
  const { isVisible, setisVisible } = useNavbarScroll();

  function handleScroll() {
    if (window.scrollY >= 150) {
      setisVisible(true);
      return;
    }
    setisVisible(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <Container isBlack={isVisible}>
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
