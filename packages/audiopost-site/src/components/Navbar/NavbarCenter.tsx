import React, { FunctionComponent } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const NavbarCenter: FunctionComponent = () => {
  const {
    site: {
      siteMetadata: { navList },
    },
  } = useStaticQuery(graphql`
    query NavQuery {
      site {
        siteMetadata {
          navList {
            name
            slug
          }
        }
      }
    }
  `);

  return (
    <nav className="nav">
      {navList.map(({ name, slug }) => (
        <div className="item" key={name}>
          <Link to={slug} className="link">
            {name}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default NavbarCenter;
