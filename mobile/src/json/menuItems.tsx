import React from 'react';

import {
  Heart,
  Calendar,
  Envite,
  Gift,
  Notfications,
  Messages,
} from '../assets';

const items = [
  {
    title: 'Gostos e preferências',
    icon: <Heart height="40" width="40" />,
    route: 'PreferencesRoutes',
  },
  {
    title: 'Datas importantes',
    icon: <Calendar height="40" width="40" />,
    route: 'DatesRoutes',
  },
  {
    title: 'Presentes',
    icon: <Gift height="40" width="40" />,
    route: '',
  },
  {
    title: 'Mensagens',
    icon: <Messages height="40" width="40" />,
    route: 'MessagesRoutes',
  },
  {
    title: 'Notificações',
    icon: <Notfications height="40" width="40" />,
    route: '',
  },
  {
    title: 'Convide seus amigos',
    icon: <Envite height="40" width="40" />,
    route: 'EnviteFriends',
  },
];

export default items;
