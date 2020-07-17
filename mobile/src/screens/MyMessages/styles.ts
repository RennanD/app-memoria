import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 20px;
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const PageTitle = styled.Text`
  font-size: 24px;
  color: #65c4b0;
`;

export const SectionTitle = styled.Text`
  color: #65c4b0;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SectionMessages = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const MessageButtom = styled.TouchableOpacity`
  background: #fff;
  border-radius: 8px;
  height: 150px;
  border: 1px solid #ddd;
  padding: 5px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const TextMessageContent = styled.Text`
  color: #666;
  font-size: 16px;
`;

export const ImageMessageContent = styled.Image`
  height: 140px;
  width: 150px;
`;
