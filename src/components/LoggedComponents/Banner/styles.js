import styled from 'styled-components';
import bgImg from '../../../assets/images/bg-banner.webp';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.section`
  width: 100%;
  height: 100%;
  padding: 0 3rem;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 100%;
  }

  div {
    max-width: 40%;
    height: auto;
  }

  p {
    max-width: 500px;
    font-size: 1.5rem;
    margin: 1rem 0 2rem 0;
    //font-weight: bold;
  }

  .btns {
    display: flex;
    align-items: center;
  }

  .icon {
    margin-right: 10px;
    font-size: 1.5rem;
  }

  .btns button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 56px;
    padding: 1rem;
    border: none;
    border-radius: 5px;

    font-size: 1.2rem;
    font-weight: bold;

    &:hover {
      filter: brightness(0.8);
    }
  }

  .btns button:nth-of-type(1) {
    background: #ffffff;
    width: 190px;
  }

  .btns button:nth-of-type(2) {
    background: rgba(109, 109, 110, 0.4);
    width: 300px;
    color: #ffffff;
    margin-left: 1.5rem;
  }
`;

export const Classify = styled.div`
  position: absolute;
  right: 0;
  bottom: 100px;
  width: 150px;
  height: 50px;

  display: flex;
  align-items: center;

  background: rgba(51, 51, 51, 0.6);
  border-left: 3px solid #dcdcdc;


  span {
    background: red;
    font-size: 1.5rem;
    padding: 8px;
    font-weight: bold;
    border-radius: 5px;
    margin-left: 1rem;
  }
`;
