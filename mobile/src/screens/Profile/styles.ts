import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #65c4b0;
`;

export const Header = styled.View`
  height: 200px;
`;

export const Avatar = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 75px;
  border: 3px #25a182;
  align-self: center;
  margin-top: -125px;
  margin-bottom: 30px;
`;

export const Content = styled.View`
  flex: 1px;
  background: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 20px;
`;

export const ActionButton = styled.TouchableOpacity`
  height: 55px;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  flex-direction: row;
  background: #65c4b0;
  border-radius: 20px;
  margin-bottom: 15px;
`;

export const ActionButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;
