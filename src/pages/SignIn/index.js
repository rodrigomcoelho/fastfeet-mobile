import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';
import logo from '~/assets/fast-feet.svg';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Input, Button } from './styles';

export default function SignIn() {

  const dispatch = useDispatch();

  const [id, setId] = useState(null);

  const loading = useSelector(state => state.auth.loading);

  function handlerSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <Container>
      <Image defaultSource={logo}></Image>
      <Input
        placeholder="Informe seu ID de cadastro"
        value={id}
        onChangeText={setId}
        returnKeyType="send"
        onSubmitEditing={handlerSubmit}
        >
      </Input>
      <Button loading={loading} onPress={handlerSubmit}>Entra no sistema</Button>
    </Container>
  );
}


