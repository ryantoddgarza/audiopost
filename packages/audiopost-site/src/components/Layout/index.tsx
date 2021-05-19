import React, { Children, cloneElement } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const style = {
  maxWidth: '640px',
  margin: 'auto',
  fontFamily: 'sans-serif',
  lineHeight: 1.375,
};

const Layout: React.FunctionComponent<Props> = ({ children }: Props) => {
  const childrenWithProps = Children.map(children, (child) =>
    cloneElement(child, {})
  );
  return <div style={style}>{childrenWithProps}</div>;
};

export default Layout;
