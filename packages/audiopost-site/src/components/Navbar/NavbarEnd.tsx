import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FaInstagram } from 'react-icons/fa';

const NavbarEnd: FunctionComponent = () => {
  const {
    site: {
      siteMetadata: { instagram },
    },
  } = useStaticQuery(graphql`
    query NavEndQuery {
      site {
        siteMetadata {
          instagram
        }
      }
    }
  `);

  return (
    <div className="social">
      <div className="item">
        <a
          href={`https://www.instagram.com/${instagram}/`}
          className="link--icon"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default NavbarEnd;
