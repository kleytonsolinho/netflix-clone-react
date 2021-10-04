import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 68px;
  padding: 0 3rem;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-image: linear-gradient(to bottom, #000000, transparent);
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 90px;
    height: 25px;
    margin-right: 2rem;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    list-style: none;
  }

  ul > li {
    margin-right: 1rem;
    cursor: pointer;
  }

  ul li:nth-of-type(1) {
    font-weight: bold;
  }
`;

export const NavBar = styled.div`
  width: 100px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: none;
    background: none;
    color: #ffffff;
    font-size: 1.5rem;
  }
`;
