/* eslint-disable import/no-duplicates */
import React, { useState, useEffect, useCallback } from 'react';

import { Feather } from '@expo/vector-icons';

import { format, parseISO } from 'date-fns';

import ptBr from 'date-fns/locale/pt-BR';

import {
  Container,
  Header,
  PageTitle,
  ContactDeatilsContainer,
  ContactAvatar,
  ContactInfoContainer,
  ContactName,
  ContactDescription,
  PreferencesAccordionList,
  SectionTitle,
  SignOutButton,
  SignOutButtonText,
} from './styles';

import PreferencesAccordion from '../../components/PreferencesAccordion';

import { Profile as ProfileIcon } from '../../assets';

import { useAuth } from '../../hooks';
import api from '../../services/api';

interface PreferenceProps {
  category: string;
  subcategories: string[];
}

const Profile: React.FC = () => {
  const [preferences, setPreferences] = useState<PreferenceProps[]>(
    [] as PreferenceProps[],
  );
  const [activeItem, setActiveItem] = useState('');

  const { account, signOut } = useAuth();

  const handleToggleAccordion = useCallback(
    (name: string) => {
      if (activeItem === name) {
        setActiveItem('');
        return;
      }
      setActiveItem(name);
    },
    [activeItem],
  );

  useEffect(() => {
    async function loadPreferences() {
      const response = await api.get(`/preferences/person/${account.user.id}`);

      setPreferences(response.data);
    }

    loadPreferences();
  }, [account.user.id]);

  return (
    <>
      <Container>
        <Header>
          <ProfileIcon width="60" height="60" />
          <PageTitle>Perfil do usuário</PageTitle>
        </Header>

        <ContactDeatilsContainer>
          <ContactAvatar
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
            }}
          />
          <ContactInfoContainer>
            <ContactName>{account.user.name}</ContactName>
            <ContactDescription>
              {`E-mail: ${account.user.email}`}
            </ContactDescription>

            <ContactDescription>
              {`Aniversário:  ${format(
                parseISO(account.user.birthday),
                "dd 'de' MMMM 'de' yyyy",
                { locale: ptBr },
              )}`}
            </ContactDescription>

            <SignOutButton onPress={signOut}>
              <SignOutButtonText>Sair</SignOutButtonText>
              <Feather name="log-in" color="#c53030" size={20} />
            </SignOutButton>
          </ContactInfoContainer>
        </ContactDeatilsContainer>

        <SectionTitle>Lista de preferências</SectionTitle>

        <PreferencesAccordionList>
          {preferences.map(preference => (
            <PreferencesAccordion
              key={preference.category}
              items={preference.subcategories}
              onPress={() => handleToggleAccordion(preference.category)}
              opened={activeItem === preference.category}
              title={preference.category}
            />
          ))}
        </PreferencesAccordionList>
      </Container>
    </>
  );
};

export default Profile;
