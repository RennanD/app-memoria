import PushNotification, {
  PushNotification as PushProps,
} from 'react-native-push-notification';

export default {
  configure(): PushProps {
    PushNotification.configure({
      onNotification(notification) {
        console.log('notificação recebida', notification);
      },
    });

    return PushNotification;
  },
};
