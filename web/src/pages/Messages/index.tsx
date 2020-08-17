import React, { useState, useEffect, useCallback } from 'react';

import { Container } from './styles';
import SideBar from '../../components/SideBar';

import api from '../../services/api';
import NewMessageModal from './NewMessageModal';

interface Message {
  id: string;
  message_type: string;
  message_content: string;
}

interface MessagesData {
  message_type: string;
  messages: Message[];
}

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<MessagesData[]>([]);
  const [newMessageModalVisible, setNewMessageModalVisible] = useState(false);

  const handleToggleNewCategoryModal = useCallback(() => {
    setNewMessageModalVisible(state => !state);
  }, []);

  useEffect(() => {
    async function loadMessages() {
      const response = await api.get('/messages');

      setMessages(response.data);
    }

    loadMessages();
  }, []);

  return (
    <>
      <Container>
        <SideBar />
        <main>
          <header>
            <h2>Mensagens cadastradas</h2>
            <button type="button" onClick={handleToggleNewCategoryModal}>
              Nova mensagem
            </button>
          </header>

          <ul className="type-messages">
            {messages.map(messageType => (
              <li key={messageType.message_type}>
                <strong>{`Mensagen de ${messageType.message_type}`}</strong>
                <ul className="messages">
                  {messageType.messages.map(message => (
                    <li key={message.id}>
                      <img src={message.message_content} alt="Mensagem" />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </main>
      </Container>
      <NewMessageModal
        isVisible={newMessageModalVisible}
        toogleModal={handleToggleNewCategoryModal}
      />
    </>
  );
};

export default Messages;
