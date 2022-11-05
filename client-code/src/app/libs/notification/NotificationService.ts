import {
  INotificationService,
  NotificationType,
} from "./NotificationInterface";

export const NotificationService: INotificationService = {
  EnqueueMessage: (message: string, type: NotificationType) => {
    window.alert(message);
  },
};
