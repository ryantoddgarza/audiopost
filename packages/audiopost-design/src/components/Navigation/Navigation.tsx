import React, { FunctionComponent, ReactNode } from 'react';
import { navigationThemes } from './variants';

interface Props {
  start?: ReactNode;
  center?: ReactNode;
  end?: ReactNode;
  theme?: string;
}

const Navigation: FunctionComponent<Props> = ({
  start,
  center,
  end,
  theme,
}: Props) => {
  const getNavClassNames = () => {
    const navClassNames = ['navigation', theme];
    return navClassNames.join(' ');
  };

  return (
    <div className={getNavClassNames()}>
      <div className="content">
        <div className="start">{start}</div>
        {center && <div className="center">{center}</div>}
        <div className="end">{end}</div>
      </div>
    </div>
  );
};

Navigation.defaultProps = {
  start: null,
  center: null,
  end: null,
  theme: navigationThemes.LIGHT,
};

export default Navigation;
