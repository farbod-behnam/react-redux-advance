import { Fragment, ReactNode } from 'react';
import MainHeader from './MainHeader';

interface Props {
  children: ReactNode;
}

export default function Layout(props: Props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

