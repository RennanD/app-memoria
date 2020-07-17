import React, { useState, useMemo, useEffect } from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  Header,
  PageTitle,
  SectionTitle,
  SectionMessages,
  MessageButtom,
  TextMessageContent,
  ImageMessageContent,
  EmptyView,
  EmptyViewText,
} from './styles';

import api from '../../services/api';

interface Message {
  id: string;
  message_type: 'file' | 'text';
  message_content: string;
}

const MyMessages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([] as Message[]);

  useEffect(() => {
    async function loadMessages() {
      const response = await api.get('/messages');

      setMessages(response.data);
    }

    loadMessages();
  }, []);

  const textMessages = useMemo(
    () => messages.filter(message => message.message_type === 'text'),
    [messages],
  );

  const fileMessages = useMemo(
    () => messages.filter(message => message.message_type === 'file'),
    [messages],
  );

  return (
    <Container>
      <Header>
        <MaterialCommunityIcons name="wechat" size={100} color="#65c4b0" />
        <PageTitle numberOfLines={4}>Minhas mensagens</PageTitle>
      </Header>

      <SectionTitle>Mensagens de texto</SectionTitle>
      {textMessages.length ? (
        <SectionMessages>
          {textMessages.map(textMessage => (
            <MessageButtom
              key={textMessage.id}
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,

                elevation: 2,
              }}
            >
              <TextMessageContent numberOfLines={6}>
                {textMessage.message_content}
              </TextMessageContent>
            </MessageButtom>
          ))}
        </SectionMessages>
      ) : (
        <EmptyView>
          <MaterialCommunityIcons
            name="alert-circle-outline"
            color="#ddd"
            size={40}
          />
          <EmptyViewText>Não há mesnsages de texto cadastradas.</EmptyViewText>
        </EmptyView>
      )}

      <SectionTitle>Mensagens com imagens</SectionTitle>
      {fileMessages.length ? (
        <SectionMessages>
          {fileMessages.map(fileMessage => (
            <MessageButtom
              key={fileMessage.id}
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,

                elevation: 2,
              }}
            >
              <ImageMessageContent
                source={{ uri: fileMessage.message_content }}
              />
            </MessageButtom>
          ))}
        </SectionMessages>
      ) : (
        <EmptyView>
          <MaterialCommunityIcons
            name="alert-circle-outline"
            color="#ddd"
            size={40}
          />
          <EmptyViewText>
            Não há mesnsages com images cadastradas.
          </EmptyViewText>
        </EmptyView>
      )}
    </Container>
  );
};

export default MyMessages;
