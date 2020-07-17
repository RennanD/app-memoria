import React, { useState, useMemo } from 'react';

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
} from './styles';

interface Message {
  id: string;
  message_type: string;
  message_content: string;
}

const MyMessages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([] as Message[]);

  return (
    <Container>
      <Header>
        <MaterialCommunityIcons name="wechat" size={100} color="#65c4b0" />
        <PageTitle numberOfLines={4}>Minhas mensagens</PageTitle>
      </Header>

      <SectionTitle>Mensagens de texto</SectionTitle>
      <SectionMessages>
        <MessageButtom
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
          <TextMessageContent>Minha mensagem</TextMessageContent>
        </MessageButtom>

        <MessageButtom
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
          <TextMessageContent>Minha mensagem</TextMessageContent>
        </MessageButtom>

        <MessageButtom
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
          <TextMessageContent>Minha mensagem</TextMessageContent>
        </MessageButtom>

        <MessageButtom
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
          <TextMessageContent>Minha mensagem</TextMessageContent>
        </MessageButtom>
      </SectionMessages>

      <SectionTitle>Mensagens com imagens</SectionTitle>
      <SectionMessages>
        <MessageButtom
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
            source={{
              uri:
                'https://static.mensagemaniversario.com.br/img/33/32/pessoas-especiais-como-voce-sm.jpg',
            }}
          />
        </MessageButtom>

        <MessageButtom
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
            source={{
              uri:
                'https://static.mensagemaniversario.com.br/img/33/32/pessoas-especiais-como-voce-sm.jpg',
            }}
          />
        </MessageButtom>

        <MessageButtom
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
            source={{
              uri:
                'https://static.mensagemaniversario.com.br/img/33/32/pessoas-especiais-como-voce-sm.jpg',
            }}
          />
        </MessageButtom>

        <MessageButtom
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
            source={{
              uri:
                'https://static.mensagemaniversario.com.br/img/33/32/pessoas-especiais-como-voce-sm.jpg',
            }}
          />
        </MessageButtom>
      </SectionMessages>
    </Container>
  );
};

export default MyMessages;
