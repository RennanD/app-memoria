import styled from 'styled-components/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background: #65c4b0;
  justify-content: center;
  padding: 20px;
`;

export const LogoImage = styled.Image`
  height: 120px;
  width: 120px;
  align-self: center;
  margin-bottom: 50px;
`;
export const ContainerInput = styled.View`
  height: 50px;
  background: #fff;
  padding: 0 10px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 5px;
  border-radius: 20px;
`;

export const Icon = styled(MaterialCommunityIcons)``;

export const Input = styled.TextInput`
  flex: 1;
`;

export const Prefix = styled.Text`
  color: #333;
  margin: 0 5px;
`;
