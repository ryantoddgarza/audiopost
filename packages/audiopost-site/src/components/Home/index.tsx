import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Home: FunctionComponent = () => {
  const {
    registers: { sections },
  } = useStaticQuery(graphql`
    query HomeQuery {
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
      {sections.map(({ title, body, list }, i: number) => (
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
        </section>
      ))}
    </div>
  );
};

export default Home;
