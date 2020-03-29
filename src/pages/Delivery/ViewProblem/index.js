import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Scroll,
  Container,
  BackgroundHeader,
  WindowTitle,
  Block,
  Title,
  Date,
} from './styles';

export default function ViewProblem({ navigation, route }) {
  navigation.setOptions({
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={32} color="#fff" />
      </TouchableOpacity>
    ),
  });

  const { deliveryId } = route.params;
  return (
    <Scroll>
      <Container>

        <BackgroundHeader />

        <WindowTitle>Encomenda {deliveryId}</WindowTitle>

        <Block>
          <Title>Destinataŕio Ausente</Title>
          <Date>14/01/2020</Date>
        </Block>

        <Block>
          <Title>Destinataŕio Ausente</Title>
          <Date>14/01/2020</Date>
        </Block>

        <Block>
          <Title>Destinataŕio Ausente</Title>
          <Date>14/01/2020</Date>
        </Block>

      </Container>
    </Scroll>
  );
}
