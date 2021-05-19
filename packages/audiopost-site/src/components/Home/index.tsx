import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet-async';

const Home: FunctionComponent = () => {
  const {
    registers: {
      settings: { title },
      sections,
    },
  } = useStaticQuery(graphql`
    query HomeQuery {
      registers(settings: { slug: { eq: "/" } }) {
        sections {
          component
          title
          body
          list
        }
        settings {
          title
        }
      }
    }
  `);

  const helmetProps = {
    title,
  };

  return (
    <>
      <Helmet {...helmetProps} />
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
    </>
  );
};

export default Home;
