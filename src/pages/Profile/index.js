import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Preview, Avatar, Body, FieldName, FieldValue, LogoutButton } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const dateFormmated = useMemo(() =>
    format(parseISO(user.createdAt), 'dd/MM/yyyy', { locale: ptBR }),
  [user.createdAt]);

  function signOff() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <Preview>
        <Avatar source={{uri:
          user.avatar ? user.avatar.url :
        `http://api.adorable.io/avatar/50/${user.name}.png`
        }}></Avatar>
        </Preview>
        <Body>
          <FieldName>Nome Completo</FieldName>
          <FieldValue>{user.name}</FieldValue>
          <FieldName>Email</FieldName>
          <FieldValue>{user.email}</FieldValue>
          <FieldName>Data de Cadastro</FieldName>
          <FieldValue>{dateFormmated}</FieldValue>
          <LogoutButton onPress={signOff}>Logout</LogoutButton>
        </Body>
      </Content>
    </Container>
  );
}
