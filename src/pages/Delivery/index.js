import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { signOut } from '~/store/modules/auth/actions';

import DeliveryItem from '~/components/DeliveryItem';

import { Container, Header, Avatar, UserInfo, Welcome, UserName,
  ActionContainer, DeliveryText, ActionOption, ContentList } from './styles';

export default function Delivery() {
  const user =  useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const [pendingSelected, setPendingSelected] = useState(true);
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`/deliverymen/${user.id}/deliveries`, {
        params: {
          finished: !pendingSelected
        }
      });
      setDeliveries(data);
    }

    fetchData();
  }, [user.id, pendingSelected]);


  return (<Container>
    <Header>
      <Avatar source={{uri:
        user.avatar ? user.avatar.url :
        'http://api.adorable.io/avatar/50/userName.png'
        }}></Avatar>
      <UserInfo>
        <Welcome>Bem vindo de volta,</Welcome>
        <UserName>Gaspar Antunes</UserName>
      </UserInfo>
      <TouchableOpacity onPress={() => dispatch(signOut())} >
        <Icon name="exit-to-app" size={18} color="#E74040"></Icon>
      </TouchableOpacity>
    </Header>

    <ActionContainer>

      <DeliveryText>Entregas</DeliveryText>

      <TouchableOpacity onPress={() => setPendingSelected(true)}>
        <ActionOption show={pendingSelected}>Pendentes</ActionOption>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setPendingSelected(false)}>
        <ActionOption show={!pendingSelected}>Entregues</ActionOption>
      </TouchableOpacity>

    </ActionContainer>

    <ContentList
      data={deliveries}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (<DeliveryItem data={item}/>) }
    />
  </Container>);
}
