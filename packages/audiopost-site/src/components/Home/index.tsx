import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Hero, heroThemes } from 'audiopost-design';

const Home: FunctionComponent = () => {
  const {
    site: {
      siteMetadata: { email },
    },
    hero,
    about,
    aboutKyle,
    allContentfulClient: { clients },
    musicServices,
    postServices,
    gearList,
    rates,
    allContentfulFeaturedIn: { featuredIn },
    consulting,
  } = useStaticQuery(graphql`
    query HomeQuery {
      site {
        siteMetadata {
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
      about: contentfulLongText(
        contentful_id: { eq: "4UsEcKmvmSHGw8xkL1tX1T" }
      ) {
        name
        body {
          raw
        }
      }
      aboutKyle: contentfulLongText(
        contentful_id: { eq: "49zKliWuRfZ3V6cloa1u0O" }
      ) {
        name
        body {
          raw
        }
      }
      allContentfulClient {
        clients: nodes {
          name
          link
        }
      }
      allContentfulFeaturedIn(sort: { fields: name }) {
        featuredIn: nodes {
          name
          publication
          link
        }
      }
      musicServices: contentfulTextList(
        contentful_id: { eq: "5Zx47qE1EVZDB0CqROcoDR" }
      ) {
        name
        items
      }
      postServices: contentfulTextList(
        contentful_id: { eq: "1xy8WhI4zgzfGLuA6Cfdf6" }
      ) {
        name
        items
      }
      gearList: contentfulTextList(
        contentful_id: { eq: "3tvH1UmqMBM84bqs3TAONn" }
      ) {
        name
        items
      }
      rates: contentfulMenu(contentful_id: { eq: "1n6g5F87hU5caKHFkinm4f" }) {
        name
        items {
          name
          description
        }
      }
      consulting: contentfulLongText(
        contentful_id: { eq: "4JYy8vjMAqOmKx6fKmuIFw" }
      ) {
        name
        body {
          raw
        }
      }
    }
  `);

  return (
    <div className="home">
      <Hero
        theme={heroThemes.DARK}
        titleStart={hero.titleStart}
        titleEnd={hero.titleEnd}
        subtitle={hero.subtitle}
        copy={hero.copy.copy}
      />
      <section id="about" className="section light layout container about large">
        <div className="row">
          <div className="col size11of12-tablet size2of3-desktop size7of12-widescreen offset1of6-tablet offset1of3-desktop">
            <div className="support-text">{about.name}</div>
            <h2 className="heading">Welcome to Audio Post</h2>
            <div className="content copy col size3of4-tablet">
              {documentToReactComponents(JSON.parse(about.body.raw))}
            </div>
          </div>
        </div>
      </section>
      <section className="section light layout container about regular">
        <div className="row">
          <div className="col size11of12-tablet size2of3-desktop size7of12-widescreen offset1of12-tablet offset1of6-desktop">
            <div className="support-text">{aboutKyle.name}</div>
            <div className="content copy">
              {documentToReactComponents(JSON.parse(aboutKyle.body.raw))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="services"
        className="section light layout container services"
      >
        <div className="row">
          <div className="col size5of6-tablet size2of3-desktop offset1of12-tablet offset1of6-desktop">
            <h3 className="support-text">Let&apos;s work together</h3>
            <h2 className="col heading">Services</h2>
            <div className="content row">
              <div className="article col size1of2-tablet">
                <h3 className="title">{musicServices.name}</h3>
                <ul className="list">
                  {musicServices.items.map((service: string) => (
                    <li key={service.slice(0, 10)}>{service}</li>
                  ))}
                </ul>
              </div>
              <div className="article col size1of2-tablet">
                <h3 className="title">{postServices.name}</h3>
                <ul className="list">
                  {postServices.items.map((service: string) => (
                    <li key={service.slice(0, 10)}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="consulting"
        className="section light layout container consulting"
      >
        <div className="col size2of3-tablet size1of2-desktop offset1of12-tablet offset1of6-desktop">
          <h3 className="support-text">Professional</h3>
          <h2 className="heading">{consulting.name}</h2>
          <div className="content copy">
            {documentToReactComponents(JSON.parse(consulting.body.raw))}
          </div>
        </div>
      </section>
      <section id="rates" className="section light layout container">
        <div className="row">
          <div className="col size2of3-tablet size1of2-desktop offset1of12-tablet offset1of6-desktop">
            <h3 className="support-text">Standard</h3>
            <h2 className="heading">{rates.name}</h2>
          </div>
          <div className="col size1of2-tablet size1of3-desktop size1of4-widescreen offset1of12-tablet offset1of6-desktop">
            <div className="content">
              <div className="menu">
                {rates.items.map(({ name, description }) => (
                  <div key={name} className="item">
                    <h6 className="title">{name}</h6>
                    <p className="description">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="featured" className="section dark layout container clients">
        <div className="row">
          <div className="col size11of12-tablet size5of6-desktop size3of4-widescreen offset1of12-tablet offset1of6-desktop">
            <h3 className="support-text">Select</h3>
            <h2 className="heading">Clients</h2>
            <div className="content">
              {clients.map(({ name, link }) => (
                <div key={name} className="client">
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    {name + ` `}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section dark layout container featured-in">
        <div className="row">
          <div className="col size5of6-tablet size2of3-desktop offset1of12-tablet offset1of6-desktop">
            <h3 className="support-text">On the web</h3>
            <h2 className="heading">Featured In</h2>
            <div className="content row">
              {featuredIn.map(({ name, publication, link }) => (
                <div
                  key={name}
                  className="col size1of2-tablet size1of3-widescreen"
                >
                  <div className="card">
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      <div className="publication">{publication}</div>
                      <div className="title">{name}</div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="gear" className="section light layout container gear">
        <div className="row">
          <div className="col size2of3-tablet size1of2-desktop offset1of12-tablet offset1of6-desktop">
            <h3 className="support-text">Studio</h3>
            <h2 className="heading">{gearList.name}</h2>
            <div className="content copy">
              {gearList.items.sort().map((gear: string) => (
                <div key={gear.slice(10)}>{gear}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="section dark layout container contact">
        <div className="col size5of6-tablet size2of3-desktop offset1of12-tablet offset1of6-desktop">
          <h3 className="support-text">Get in touch</h3>
          <h2 className="heading">Contact</h2>
          <div className="content">
            <a href={`mailto:${email}`} className="big-link">
              {email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
