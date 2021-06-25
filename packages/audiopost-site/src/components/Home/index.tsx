import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Hero, heroThemes } from 'audiopost-design';

const Home: FunctionComponent = () => {
  const {
    site: {
      siteMetadata: { email },
    },
    hero,
    registers: { sections },
  } = useStaticQuery(graphql`
    query HomeQuery {
      site {
        siteMetadata {
          siteName
          description
          email
        }
      }
      hero: contentfulHero(contentful_id: { eq: "2uaV2ZOSMmFKEubhwE1b5h" }) {
        subtitle
        titleEnd
        titleStart
        copy {
          copy
        }
      }
      registers(settings: { slug: { eq: "/" } }) {
        sections {
          component
          title
          body
          list
        }
      }
    }
  `);

  return (
    <div>
      <Hero
        theme={heroThemes.DARK}
        titleStart={hero.titleStart}
        titleEnd={hero.titleEnd}
        subtitle={hero.subtitle}
        copy={hero.copy.copy}
      />
      {sections.map(({ component, title, body, list }, i: number) => (
        <section key={`${i}`} className="section section--light">
          <div className="container container--constrain">
            {title && <h3 className="heading">{title}</h3>}
            {body && <p>{body}</p>}
            {list && (
              <ul>
                {list.map((item: string, i: number) => (
                  <li key={`${i}`}>{item}</li>
                ))}
              </ul>
            )}
            {component === 'contact' && <a href={`mailto:${email}`}>{email}</a>}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;
