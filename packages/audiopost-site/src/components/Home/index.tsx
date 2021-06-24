import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Hero, heroThemes } from 'audiopost-design';

const Home: FunctionComponent = () => {
  const {
    site: {
      siteMetadata: { siteName, description, email },
    },
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
        titleStart={siteName}
        titleEnd="Studio"
        subtitle="Nashville, Tennessee"
        copy={description}
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
