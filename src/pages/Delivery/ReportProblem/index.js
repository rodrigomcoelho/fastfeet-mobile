import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import {
  Container,
  BackgroundHeader,
  InputContainer,
  ProblemInput,
  Button
} from './styles';

export default function ReportProblem({ navigation, route }) {
  navigation.setOptions({
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={32} color="#fff" />
      </TouchableOpacity>
    ),
  });

  const { deliveryId } = route.params;
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handlerSubmit() {
    setLoading(true);

    await api.post(`/deliveries/${deliveryId}/problems`, {
      description: problem
    });

    setLoading(false);
    navigation.goBack();
  }

  return (
    <Container>
      <BackgroundHeader />

      <InputContainer>
        <ProblemInput
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          value={problem}
          onChangeText={setProblem}
          returnKeyType="send"
          onSubmitEditing={handlerSubmit}
          editable={!loading}
        />
      </InputContainer>

      <Button loading={loading} onPress={handlerSubmit}>
        Enviar
      </Button>

    </Container>);
}
