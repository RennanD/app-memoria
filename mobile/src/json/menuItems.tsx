import React from 'react';

import {
  Heart,
  Calendar,
  Envite,
  Gift,
  Notfications,
  Messages,
  Conatcts,
  Profile,
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
    route: 'DateRoutes',
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
    route: 'Notifications',
  },
  {
    title: 'Convide seus amigos',
    icon: <Envite height="40" width="40" />,
    route: 'EnviteFriends',
  },
  {
    title: 'Contatos',
    icon: <Conatcts height="40" width="40" />,
    route: '',
  },
  {
    title: 'Meu Perfil',
    icon: <Profile height="40" width="40" />,
    route: '',
  },
];

export default items;
