import { NotificationStatusEnum } from '../../../store/model/notification-status-enum.model';
import classes from './Notification.module.css';

interface Props {
    title: string;
    message: string;
    status: NotificationStatusEnum;
}

export default function Notification (props: Props) {
  let specialClasses = '';

  if (props.status === NotificationStatusEnum.ERROR) {
    specialClasses = classes.error;
  }
  if (props.status === NotificationStatusEnum.SUCCESS) {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};
