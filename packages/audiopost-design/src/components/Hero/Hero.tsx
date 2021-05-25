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
      <div className="hero__inner container">
        <div className="hero__start">
          {titleStart && <h1 className="hero__title">{titleStart}</h1>}
          {subtitle && <h2 className="hero__subtitle">{subtitle}</h2>}
        </div>
        <div className="hero__end">
          {copy && <div className="hero__copy">{copy}</div>}
          {titleEnd && <h1 className="hero__title">{titleEnd}</h1>}
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
