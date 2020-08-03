import React, { useState, useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  PageTitle,
  ContactCard,
  ContactAvatar,
  ContactName,
} from './styles';

import ContactsPlaceholder from './ContactsPlaceholder';

import { Contacts as ContactsIcon } from '../../assets';

import api from '../../services/api';

interface Contact {
  id: string;
  name: string;
  avatar: string;
}

const Contacts: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoagind] = useState(false);

  const { navigate } = useNavigation();

  const handleShowContact = useCallback(
    contact_id => {
      navigate('ContactDetail', { contact_id });
    },
    [navigate],
  );

  useEffect(() => {
    async function loadContacts() {
      setLoagind(state => !state);
      const response = await api.get('/contacts');

      setContacts(response.data);
      setLoagind(state => !state);
    }

    loadContacts();
  }, []);

  return (
    <Container>
      <Header>
        <ContactsIcon width="60" height="60" />
        <PageTitle>Meus contatos</PageTitle>
      </Header>

      {loading ? (
        <ContactsPlaceholder />
      ) : (
        <FlatList
          data={contacts}
          showsVerticalScrollIndicator={false}
          keyExtractor={contact => contact.id}
          renderItem={({ item: contact }) => (
            <ContactCard onPress={() => handleShowContact(contact.id)}>
              <ContactAvatar
                source={{
                  uri: contact.avatar
                    ? contact.avatar
                    : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
                }}
              />
              <ContactName>{contact.name}</ContactName>
            </ContactCard>
          )}
        />
      )}
    </Container>
  );
};

export default Contacts;
