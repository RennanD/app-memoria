import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  Header,
  PageTitle,
  ListDatesItem,
  ListDatesDay,
  ListDatesMonth,
  ListDatesText,
  ListDatesView,
  EnventLabel,
  EventLabelText,
  EmptyView,
  EmptyViewText,
} from './styles';

import ListDateHeader from '../../components/ListDateHeader';

import api from '../../services/api';

interface Events {
  monthDay: number;
  id: string;
  contact_id: string;
  user_id: string;
  date: Date;
  description: string;
}

interface ImportantDates {
  monthDay: number;
  events: Events[];
}

const ListDates: React.FC = () => {
  const [dates, setDates] = useState<ImportantDates[]>([] as ImportantDates[]);
  const [month, setMonth] = useState(0);

  useEffect(() => {
    async function loadDates() {
      const response = await api.get('/dates', {
        params: {
          month,
        },
      });

      setDates(response.data);
    }

    loadDates();
  }, [month]);

  if (!dates.length) {
    return (
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="calendar-month"
            size={48}
            color="#fff"
          />
          <PageTitle>Datas importantes</PageTitle>
        </Header>

        <ListDateHeader onChangeMonth={value => setMonth(Number(value))} />

        <EmptyView>
          <MaterialCommunityIcons
            name="calendar-remove-outline"
            color="#ddd"
            size={40}
          />
          <EmptyViewText>
            Não há datas cadastradas, selecione outro mês para continuar
          </EmptyViewText>
        </EmptyView>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <MaterialCommunityIcons name="calendar-month" size={48} color="#fff" />
        <PageTitle>Datas importantes</PageTitle>
      </Header>

      <ListDateHeader onChangeMonth={value => setMonth(Number(value))} />

      <ListDatesItem>
        <ListDatesDay>
          <ListDatesText>Dia</ListDatesText>
        </ListDatesDay>

        <ListDatesMonth>
          <ListDatesText>Eventos</ListDatesText>
        </ListDatesMonth>
      </ListDatesItem>

      <ListDatesView>
        {dates.map(dateItem => (
          <ListDatesItem key={dateItem.monthDay}>
            <ListDatesDay>
              <ListDatesText>{dateItem.monthDay}</ListDatesText>
            </ListDatesDay>

            <ListDatesMonth>
              {dateItem.events
                .map(event => (
                  <EnventLabel>
                    <EventLabelText>{event.description}</EventLabelText>
                  </EnventLabel>
                ))
                .sort()}
            </ListDatesMonth>
          </ListDatesItem>
        ))}
      </ListDatesView>
    </Container>
  );
};

export default ListDates;
