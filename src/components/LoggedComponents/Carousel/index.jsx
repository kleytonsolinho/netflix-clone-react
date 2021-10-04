import { useRef } from 'react';

import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

import {
  Container, Header, Content, SlideGalery, Card,
} from './styles';

export default function Carousel() {
  const carousel = useRef(null);

  function handleLeftClick() {
    carousel.current.scrollLeft -= 250;
  }

  function handleRightClick() {
    carousel.current.scrollLeft += 250;
  }

  return (
    <Container>
      <Header>
        <h1>Carousel</h1>
        <div>
          <span>
            Ver tudo
          </span>
          <FaAngleRight className="icon" />
        </div>
      </Header>
      <Content>
        <button type="button" onClick={handleLeftClick}>
          <FaAngleLeft />
        </button>
        <button type="button" onClick={handleRightClick}>
          <FaAngleRight />
        </button>
        <SlideGalery ref={carousel}>
          <Card>1</Card>
          <Card>2</Card>
          <Card>3</Card>
          <Card>4</Card>
          <Card>5</Card>
          <Card>6</Card>
          <Card>7</Card>
          <Card>8</Card>
          <Card>9</Card>
        </SlideGalery>
      </Content>
    </Container>
  );
}
