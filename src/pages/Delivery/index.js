import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { signOut } from '~/store/modules/auth/actions';

import DeliveryItem from '~/components/DeliveryItem';

import { Container, Header, Avatar, UserInfo, Welcome, UserName,
  ActionContainer, DeliveryText, ActionOption, ContentList, Loading } from './styles';

export default function Delivery({ navigation }) {
  const user =  useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const [shouldRun, setShouldRun] = useState(true);
  const [pendingSelected, setPendingSelected] = useState(true);
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function fetchData(pageNumber = page, shouldReset = false) {
    console.tron.log({
      shouldRun,
      shouldReset,
      finished: !pendingSelected,
      page: pageNumber,
      limit: 5,
    });
    if (!shouldRun) return;
    setLoading(true);

    const { data } = await api.get(`/deliverymen/${user.id}/deliveries`, {
      params: {
        finished: !pendingSelected,
        page: pageNumber,
        limit: 20,
      }
    });

    setLoading(false);
    if (data.length > 0)
    {
      setDeliveries(shouldReset ? data : [...deliveries, ...data]);
      setPage(pageNumber + 1);
    }
    else
    {
      setShouldRun(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    async function refresh() {
      await fetchData(1, true);
    }

    refresh();
  }, [pendingSelected]);

  async function handleStatus(bool) {
    if (pendingSelected !== bool)
    {
      setShouldRun(true);
      setPendingSelected(bool);
    }
  }

  return (<Container>
    <Header>
      <Avatar source={{uri:
        user.avatar ? user.avatar.url :
        `http://api.adorable.io/avatar/50/${user.name}.png`
        }}></Avatar>
      <UserInfo>
        <Welcome>Bem vindo de volta,</Welcome>
        <UserName>{user.name}</UserName>
      </UserInfo>
      <TouchableOpacity onPress={() => dispatch(signOut())} >
        <Icon name="exit-to-app" size={18} color="#E74040"></Icon>
      </TouchableOpacity>
    </Header>

    <ActionContainer>

      <DeliveryText>Entregas</DeliveryText>

      <TouchableOpacity onPress={() => handleStatus(true)}>
        <ActionOption show={pendingSelected}>Pendentes</ActionOption>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleStatus(false)}>
        <ActionOption show={!pendingSelected}>Entregues</ActionOption>
      </TouchableOpacity>

    </ActionContainer>

    <ContentList
      data={deliveries}
      keyExtractor={item => String(item.id)}
      ListFooterComponent={loading && <Loading />}
      renderItem={({ item }) => (<DeliveryItem data={item} onClick={() => {}}/>) }
      onEndReached={() => fetchData()}
      onEndReachedThreshold={0.1}
    />
  </Container>);
}
