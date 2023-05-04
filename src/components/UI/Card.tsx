import { ReactNode } from 'react';
import classes from './Card.module.css';

interface Props {
  className?: string;
  children: ReactNode;
}

const Card = (props: Props) => {
  return (
    <section
      className={`${classes.card} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </section>
  );
};

export default Card;
