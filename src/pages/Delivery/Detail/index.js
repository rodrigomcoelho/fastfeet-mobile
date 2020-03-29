import React, { useState, useEffect, useMemo } from 'react';
import { parseISO, format } from 'date-fns';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { Container,
  BackgroundHeader,
  Block,
  Title,
  TitleDescription,
  FieldName,
  FieldValue,
  Double,
  ButtonSection,
  Button,
  Text,
  LoadingCountainer,
  Loading
} from './styles';

export default function Detail({ navigation, route }) {
  navigation.setOptions({
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={32} color="#fff" />
      </TouchableOpacity>
    ),
  });

  const { deliveryId } = route.params;
  const [delivery, setDelivery] = useState({});

  useEffect(() => {
    async function fetchDate()
    {
      const { data } = await api.get(`/deliveries/${deliveryId}`);
      if (data) setDelivery(data);
    }

    fetchDate();
  }, [deliveryId]);

  const dateStarted = useMemo(() =>
    delivery.start_date ? format(parseISO(delivery.start_date), 'dd/MM/yyyy') : '--/--/--'
  ,[delivery.start_date]);

  const dateEnded = useMemo(() =>
    delivery.end_date ? format(parseISO(delivery.end_date), 'dd/MM/yyyy') : '--/--/--'
  ,[delivery.end_date]);

  const status = useMemo(() => {
    const statusArr = {
      pending: 'Aguardando retirada',
      ongoing: 'Pendente',
      complete: 'Entregue'
    };

    return statusArr[delivery.status];
  }, [delivery.status]);

  return (
    delivery.recipient ? (
      <Container>
        <BackgroundHeader />
        <Block up>
          <Title>
            <Icon name="local-shipping" size={20} color="#7D40E7" />
            <TitleDescription>Informações da entrega</TitleDescription>
          </Title>

          <FieldName first>Destinatário</FieldName>
          <FieldValue>{delivery.recipient.name}</FieldValue>

          <FieldName>Endereço de Entrega</FieldName>
          <FieldValue>{delivery.recipient.street}, {delivery.recipient.number}, {delivery.recipient.city} - {delivery.recipient.state}, {delivery.recipient.zipcode}</FieldValue>

          <FieldName>Produto</FieldName>
          <FieldValue>{delivery.product}</FieldValue>

        </Block>
        <Block>

          <Title>
            <Icon name="event" size={18} color="#7D40E7" />
            <TitleDescription>Situação da entrega</TitleDescription>
          </Title>

          <FieldName>Status</FieldName>
          <FieldValue>{status}</FieldValue>

          <Double>

            <View>
              <FieldName>Data de Retirada</FieldName>
              <FieldValue>{dateStarted}</FieldValue>
            </View>

            <View>
              <FieldName>Data de Entrega</FieldName>
              <FieldValue>{dateEnded}</FieldValue>
            </View>

          </Double>

        </Block>

        <ButtonSection>
          <Button onPress={() => navigation.navigate('ReportProblem', { deliveryId })}>
            <Icon name="highlight-off" size={20} color="#E74040" />
            <Text>Informar Problema</Text>
          </Button>
          <Button onPress={() => navigation.navigate('DeliViewProblemvery', { deliveryId })}>
            <Icon name="error-outline" size={20} color="#E7BA40" />
            <Text>Visualizar Problema</Text>
          </Button>
          <Button>
            <Icon name="alarm-on" size={20} color="#7D40E7" />
            <Text>Confirmar Entrega</Text>
          </Button>
        </ButtonSection>
        </Container>
    ) : (<LoadingCountainer>
        <Loading />
      </LoadingCountainer>)
  );
}
