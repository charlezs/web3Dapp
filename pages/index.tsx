import {
  Container
} from '@chakra-ui/react';
import IntroMe from '../components/Intro';

export default function SplitWithImage() {
  return (
    <Container maxW={'5xl'} py={12}>
      <IntroMe />
    </Container>
  );
}
