import styled from 'styled-components/native';
import OriginalButton from '~/components/Button';
import OriginalInput from '~/components/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #7d40e7;
  padding: 0 25px;

  justify-content: center;
`;

export const Image = styled.Image`
  height: 48px;
  width: 48px;
  border: 1px solid #fff;
`;

export const Button = styled(OriginalButton)`
  background-color: #82BF18;
  margin-top: 16px;
`;

export const Input = styled(OriginalInput)`
`;
