import React, {
  Children,
  FunctionComponent,
  ReactElement,
  cloneElement,
} from 'react';

interface Props {
  children: ReactElement | ReactElement[];
}

const Layout: FunctionComponent<Props> = ({ children }: Props) => {
  const childrenWithProps = Children.map(children, (child) =>
    cloneElement(child, {})
  );
  return <div>{childrenWithProps}</div>;
};

export default Layout;
