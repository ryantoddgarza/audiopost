import React, { Children, cloneElement } from 'react';
import { theme } from 'audiopost-design';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const style = {
  maxWidth: '640px',
  margin: 'auto',
  backgroundColor: theme.colors.background,
  color: theme.colors.text,
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
