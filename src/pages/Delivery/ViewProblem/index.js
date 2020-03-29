import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import { format, parseISO } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import {
  Scroll,
  Container,
  BackgroundHeader,
  WindowTitle,
  Block,
  Title,
  Date,
  ContentList,
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
  const [problems, setProblems] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`/deliveries/${deliveryId}/problems`);
      if (data)
        setProblems(data.map(d => ({
          ...d,
          date: format(parseISO(d.createdAt), 'dd/MM/yyyy' )
        })));
    }

    if (deliveryId) fetchData();
  }, [deliveryId]);

  return (
    <Container>

      <BackgroundHeader />

      <WindowTitle>Encomenda {deliveryId}</WindowTitle>

      <ContentList
        data={problems}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Block>
            <Title>{item.description}</Title>
            <Date>{item.date}</Date>
          </Block>
        )}
      />

    </Container>
  );
}
