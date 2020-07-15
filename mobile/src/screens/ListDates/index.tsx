import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  Header,
  PageTitle,
  ListDatesViewHeader,
  ListDatesItem,
  ListDatesDay,
  ListDatesMonth,
  ListDatesText,
  ListDatesView,
  ListDatesViewHeaderText,
  EnventLabel,
  EventLabelText,
} from './styles';

const ListDates: React.FC = () => {
  const data = [
    {
      date: '01',
      weekDay: 'seg',
      events: [
        'Aniversário da mãe',
        'Aniversário do pai',
        'Aniversário da irmã',
        'Aniversário do irmão',
      ],
    },
    {
      date: '02',
      weekDay: 'ter',
      events: [
        'Aniversário da mãe',
        'Aniversário do pai',
        'Aniversário da irmã',
        'Aniversário do irmão',
      ],
    },
    {
      date: '03',
      weekDay: 'qua',
      events: [
        'Aniversário da mãe',
        'Aniversário do pai',
        'Aniversário da irmã',
        'Aniversário do irmão',
      ],
    },
    {
      date: '04',
      weekDay: 'qui',
      events: [
        'Aniversário da mãe',
        'Aniversário do pai',
        'Aniversário da irmã',
        'Aniversário do irmão',
      ],
    },
    {
      date: '05',
      weekDay: 'sex',
      events: [
        'Aniversário da mãe',
        'Aniversário do pai',
        'Aniversário da irmã',
        'Aniversário do irmão',
      ],
    },
  ];

  return (
    <Container>
      <Header>
        <MaterialCommunityIcons name="calendar-month" size={48} color="#fff" />
        <PageTitle>Datas importantes</PageTitle>
      </Header>

      <ListDatesViewHeader>
        <MaterialCommunityIcons
          name="notification-clear-all"
          size={26}
          color="#333"
        />

        <ListDatesViewHeaderText>Janeiro</ListDatesViewHeaderText>

        <MaterialCommunityIcons name="dots-vertical" size={26} color="#333" />
      </ListDatesViewHeader>

      <ListDatesItem>
        <ListDatesDay>
          <ListDatesText>Dia</ListDatesText>
        </ListDatesDay>

        <ListDatesMonth>
          <ListDatesText>Eventos</ListDatesText>
        </ListDatesMonth>
      </ListDatesItem>

      <ListDatesView>
        {data.map(dateItem => (
          <ListDatesItem key={dateItem.date}>
            <ListDatesDay>
              <ListDatesText>{dateItem.date}</ListDatesText>
              <ListDatesText>{dateItem.weekDay}</ListDatesText>
            </ListDatesDay>

            <ListDatesMonth>
              {dateItem.events.map(event => (
                <EnventLabel>
                  <EventLabelText>{event}</EventLabelText>
                </EnventLabel>
              ))}
            </ListDatesMonth>
          </ListDatesItem>
        ))}
      </ListDatesView>
    </Container>
  );
};

export default ListDates;
