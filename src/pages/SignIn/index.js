import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import Input from '~/components/Input';

import { Container, Logo, Button } from './styles';

export default function SignIn() {

  const dispatch = useDispatch();

  const [id, setId] = useState(null);

  const loading = useSelector(state => state.auth.loading);

  function handlerSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <Container>
      <Logo />
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


