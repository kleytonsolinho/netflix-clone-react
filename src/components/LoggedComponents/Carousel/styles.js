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
    span, .icon {
      left: 0px;
      opacity: 1;
    }
  }

  h1 {
    font-size: 2rem;
    color: #e5e5e5;
    margin-bottom: 0.8rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  }

  span {
    margin-left: 1rem;
    font-size: 1.5rem;
    font-weight: bold;

    position: relative;
    left: -110px;

    opacity: 0;

    transition: 1s all;
  }

  .icon {
    font-size: 1.5rem;
    position: relative;
    left: -110px;

    opacity: 0;

    transition:
      1s opacity,
      0.2s left;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    button {
      opacity: 1;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    top: 0;
    z-index: 2;

    width: 70px;
    height: 100%;
    background: transparent;
    border: none;
    opacity: 0;

    color: #ffffff;
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
  position: relative;
  z-index: 1;

  overflow-y: scroll;
  overflow-x: hidden;
  white-space: nowrap;

  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.a`
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

  &:hover {
    background: gray;
  }
`;
