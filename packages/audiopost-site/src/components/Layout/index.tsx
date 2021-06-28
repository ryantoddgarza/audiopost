import React, {
  Children,
  FunctionComponent,
  ReactElement,
  cloneElement,
} from 'react';
import Navbar from '../Navbar';

interface Props {
  children: ReactElement | ReactElement[];
}

const Layout: FunctionComponent<Props> = ({ children }: Props) => {
  const childrenWithProps = Children.map(children, (child) =>
    cloneElement(child, {})
  );
  return (
    <div className="layout app">
      <div className="layout nav">
        <Navbar />
      </div>
      <main className="layout main">{childrenWithProps}</main>
    </div>
  );
};

export default Layout;
