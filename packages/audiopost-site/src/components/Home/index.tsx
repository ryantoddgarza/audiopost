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
    allContentfulClient: { clients },
    musicServices,
    postServices,
    gearList,
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
      allContentfulClient {
        clients: nodes {
          name
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
      <section className="section light layout container about">
        <div className="row">
          <div className="col size11of12-tablet size2of3-desktop size7of12-widescreen offset1of12-tablet offset1of6-desktop">
            <div className="support-text">{about.name}</div>
            <h2 className="heading">Welcome to Audio Post</h2>
            <div className="copy col size3of4-tablet">
              {documentToReactComponents(JSON.parse(about.body.raw))}
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
            <div className="row">
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
      <section id="clients" className="section dark layout container clients">
        <div className="row">
          <div className="col size11of12-tablet size5of6-desktop size3of4-widescreen offset1of12-tablet offset1of6-desktop">
            <h3 className="support-text">Select</h3>
            <h2 className="heading">Clients</h2>
            <div className="client-block">
              {clients.map(({ name, link }) => (
                <div key={name} className="client">
                  <a href={link} className="link">
                    {name + ` `}
                  </a>
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
            <div className="body">
              {gearList.items.sort().map((gear: string) => (
                <div key={gear.slice(10)}>{gear}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="consulting"
        className="section dark layout container consulting"
      >
        <div className="col size2of3-tablet size1of2-desktop offset1of12-tablet offset1of6-desktop">
          <h2 className="heading">{consulting.name}</h2>
          <div className="copy">
            {documentToReactComponents(JSON.parse(consulting.body.raw))}
          </div>
        </div>
      </section>
      <section id="contact" className="section dark layout container contact">
        <div className="col size5of6-tablet size2of3-desktop offset1of12-tablet offset1of6-desktop">
          <h3 className="support-text">Get in touch</h3>
          <h2 className="heading">Contact</h2>
          <div className="body">
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
