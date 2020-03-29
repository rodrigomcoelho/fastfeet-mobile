import styled from 'styled-components/native';
import OriginalButton from '~/components/ButtonIcon';
import ScrollView from '~/components/ScrollView';

export const Container = styled(ScrollView)`
  flex: 1;
  background-color: #fff;
`;

export const BackgroundHeader = styled.View`
  width: 100%;
  height: 90px;
  background-color: #7D40E7;
`;

export const Block = styled.View`
  margin-top: ${props => props.up ? -70 : 10 }px;
  margin-right: 20px;
  margin-left: 20px;
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 4px;
`;

export const Title = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleDescription = styled.Text`
  font-size: 14px;
  font-weight: bold;
  line-height: 19px;
  color: #7D40E7;
  margin-left: 5px;
`;

export const FieldName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  line-height: 19px;
  color: #999;
  text-transform: uppercase;
  margin-top: ${props => props.first ? 5 : 15 }px;
`;

export const FieldValue = styled.Text`
  font-size: 14px;
  line-height: 26px;
  color: #666;
`;

export const Double = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20px;
`;

export const ButtonSection = styled.View`
  flex-direction: row;
  border-radius: 4px;
  justify-content: space-between;
  margin: 10px 20px;
`;

export const Button = styled(OriginalButton)`
  height: 83px;
  width: 106px;
  padding: 10px;
  background-color: #F8F9FD;

  elevation: 1;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
`;

export const Text = styled.Text`
  color: #999;
  font-size: 12px;
  text-align: center;
`;

export const LoadingCountainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#7D40E7'
})`
`;


