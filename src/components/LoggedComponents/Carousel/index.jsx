import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

import {
  Container, Header, Content, SlideGalery, Controls, Card,
} from './styles';

export default function Carousel() {
  return (
    <Container>
      <Header>
        <h1>Carousel</h1>
        <span>
          Ver tudo
          <FaAngleRight />
        </span>
      </Header>
      <Content>
        <Controls>
          <button type="button" onClick="">
            <FaAngleLeft />
          </button>
          <button type="button" onClick="">
            <FaAngleRight />
          </button>
        </Controls>
        <SlideGalery>
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
