import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { theme } from 'audiopost-design';

const Home: FunctionComponent = () => {
  const {
    site: {
      siteMetadata: { email },
    },
    registers: { sections },
  } = useStaticQuery(graphql`
    query HomeQuery {
      site {
        siteMetadata {
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
      {sections.map(({ component, title, body, list }, i: number) => (
        <section key={`${i}`}>
          {title && <h3>{title}</h3>}
          {body && <p>{body}</p>}
          {list && (
            <ul>
              {list.map((item, i: number) => (
                <li key={`${i}`}>{item}</li>
              ))}
            </ul>
          )}
          {component === 'contact' && (
            <a href={`mailto:${email}`} style={{ color: theme.colors.link }}>
              {email}
            </a>
          )}
        </section>
      ))}
    </div>
  );
};

export default Home;
