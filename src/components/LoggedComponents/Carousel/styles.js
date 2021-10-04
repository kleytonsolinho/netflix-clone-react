import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-width: 100vw;
  height: 250px;
  padding: 0 0 0 3rem;
  margin: 3rem 0;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  cursor: pointer;

  &:hover {
    span {
      opacity: 1;
      left: 0;
    }
  }

  h1 {
    font-size: 2rem;
    color: #e5e5e5;
    margin-bottom: 0.8rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    position: relative;
    left: -150px;
    opacity: 0;

    transition: 1s all;

    margin-left: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  min-width: auto;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Controls = styled.nav`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 70px;
    height: 100%;
    background: transparent;
    border: none;

    color: yellow;
    font-size: 5rem;

    transition: 0.5s all;
  }

  button:nth-of-type(1) {
    &:hover {
      background-image: linear-gradient(to right, rgba(0,0,0,0.6), transparent);
    }
  }

  button:nth-of-type(2) {
    &:hover {
      background-image: linear-gradient(to left, rgba(0,0,0,0.6), transparent);
    }
  }
`;

export const SlideGalery = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  overflow-y: scroll;
  overflow-x: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
`;

export const Card = styled.div`
  width: 320px;
  height: 180px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  background: aquamarine;
  border-radius: 5px;

  margin-right: 3px;

  flex: none;

  font-size: 10rem;
  font-weight: bold;
  text-align: center;

  > div {
    margin: 2px;
  }
`;
