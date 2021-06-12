import React, { FunctionComponent } from 'react';
import { heroSizes, heroThemes } from './variants';
import { HeroProps } from './types';

const Hero: FunctionComponent<HeroProps> = ({
  titleStart,
  titleEnd,
  subtitle,
  copy,
  size,
  theme,
}: HeroProps) => {
  const getHeroClasses = () => {
    const heroClasses = ['hero', `hero--${size}`, `hero--${theme}`];

    return heroClasses.join(' ');
  };

  return (
    <div className={getHeroClasses()}>
      <div className="inner container">
        <div className="start">
          {titleStart && <h1 className="title">{titleStart}</h1>}
          {subtitle && <h2 className="subtitle">{subtitle}</h2>}
        </div>
        <div className="end">
          {copy && <div className="copy">{copy}</div>}
          {titleEnd && <h1 className="title">{titleEnd}</h1>}
        </div>
      </div>
    </div>
  );
};

Hero.defaultProps = {
  titleStart: '',
  titleEnd: '',
  subtitle: '',
  size: heroSizes.CONTENT,
  theme: heroThemes.LIGHT,
};

export default Hero;
