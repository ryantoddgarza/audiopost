import React, { Children, cloneElement } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FunctionComponent<Props> = ({ children }: Props) => {
  const childrenWithProps = Children.map(children, (child) =>
    cloneElement(child, {})
  );
  return <div>{childrenWithProps}</div>;
};

export default Layout;
