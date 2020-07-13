/* eslint-disable no-unused-expressions */
import React, { useState, useCallback, useEffect } from 'react';
import { Alert } from 'react-native';

import { Feather } from '@expo/vector-icons';

import {
  Container,
  Header,
  PageTitle,
  PreferencesContainer,
  SubmitButton,
  SubmitButtonText,
} from './styles';

import Accordion from '../../components/Accordion';

import api from '../../services/api';

import { useAuth } from '../../hooks';

interface PreferenceItemProps {
  category: string;
  subcategories: string[];
}

const Preferences: React.FC = () => {
  const [activeItem, setActiveItem] = useState('');
  const [preferencesItems, setPreferencesItems] = useState<
    PreferenceItemProps[]
  >([] as PreferenceItemProps[]);
  const [seletcItems, setSelectItems] = useState<PreferenceItemProps[]>(
    [] as PreferenceItemProps[],
  );
  const [selectedSubategories, setSelectedSubcategories] = useState<string[]>(
    [] as string[],
  );

  const { account } = useAuth();

  useEffect(() => {
    async function loadPreferences() {
      const response = await api.get('/preferences/list');
      setPreferencesItems(response.data);
    }

    loadPreferences();
  }, []);

  const handleToggleAccordion = useCallback(
    (name: string) => {
      if (name === activeItem) {
        setActiveItem('');
        return;
      }
      setActiveItem(name);
    },
    [activeItem],
  );

  const handleSelectItem = useCallback(
    (category: string, subcategory: string) => {
      const stateItems = seletcItems.map(items => items);

      const findCategories = stateItems.find(
        item => item.category === category,
      );

      if (!findCategories) {
        const preference = {
          category,
          subcategories: [subcategory],
        };
        stateItems.push(preference);

        setSelectItems(stateItems);
        setSelectedSubcategories(preference.subcategories);
      }

      if (findCategories) {
        const findSubcategory = findCategories.subcategories.findIndex(
          subcategoryItem => subcategoryItem === subcategory,
        );
        if (findSubcategory > -1) {
          findCategories.subcategories.splice(findSubcategory, 1);
        } else {
          findCategories.subcategories.push(subcategory);
        }
        setSelectItems([findCategories]);
        setSelectedSubcategories(findCategories.subcategories);
      }
    },
    [seletcItems],
  );

  const handleSubmit = useCallback(async () => {
    if (!seletcItems.length) {
      Alert.alert('Erro', 'Adicione pelo menos uma preferência.');
    } else {
      await api.post(`/preferences/person/${account.user.id}`, {
        preferences: seletcItems,
      });

      Alert.alert('Sucesso', 'Preferências adicionadas com sucesso.');
    }
  }, [seletcItems, account]);

  return (
    <Container>
      <Header>
        <Feather name="heart" color="#25A182" size={100} />
        <PageTitle>Gostos e preferências</PageTitle>
      </Header>

      <PreferencesContainer>
        {preferencesItems.map(preference => (
          <Accordion
            key={preference.category}
            title={preference.category}
            onPress={() => handleToggleAccordion(preference.category)}
            opened={activeItem === preference.category}
            items={preference.subcategories}
            onSelectItem={handleSelectItem}
            selectedItems={selectedSubategories}
          />
        ))}
      </PreferencesContainer>

      <SubmitButton
        onPress={handleSubmit}
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
        <SubmitButtonText>Adicionar</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
};

export default Preferences;
