import React, { useState, useCallback } from 'react';

import { Feather } from '@expo/vector-icons';

import { Container, Header, PageTitle, PreferencesContainer } from './styles';

import Accordion from '../../components/Accordion';

interface SelectItemsProps {
  category: string;
  subcategories: string[];
}

const data = [
  {
    name: 'Esportes',
    items: ['Futebol', 'Vôlei', 'Basquete'],
  },
  {
    name: 'Música',
    items: ['Forró', 'Sertanejo', 'Funk'],
  },
];

const Preferences: React.FC = () => {
  const [activeItem, setActiveItem] = useState('');
  const [seletcItems, setSelectItems] = useState<SelectItemsProps[]>(
    {} as SelectItemsProps,
  );

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
      console.log({
        category,
        subcategory,
      });
    },
    [],
  );

  return (
    <Container>
      <Header>
        <Feather name="heart" color="#25A182" size={100} />
        <PageTitle>Gostos e preferências</PageTitle>
      </Header>

      <PreferencesContainer>
        {data.map(item => (
          <Accordion
            key={item.name}
            title={item.name}
            onPress={() => handleToggleAccordion(item.name)}
            opened={activeItem === item.name}
            items={item.items}
            onSelectItem={handleSelectItem}
          />
        ))}
      </PreferencesContainer>
    </Container>
  );
};

export default Preferences;
