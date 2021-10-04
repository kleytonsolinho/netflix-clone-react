import Header from '../../components/LoggedComponents/Header';
import Banner from '../../components/LoggedComponents/Banner';
import Carousel from '../../components/LoggedComponents/Carousel';

import { Container } from './styles';

export default function Browse() {
  return (
    <Container>
      <Header />
      <Banner />
      <Carousel />
    </Container>
  );
}
