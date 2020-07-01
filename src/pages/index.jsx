import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Img from "gatsby-image";
import { Layout, SEO, Link, TechLogos, Switch } from "../components";

import Logo from "../images/gamesome.svg";
import InvertedLogo from "../images/gamesome-inverted.svg";
import { MdShowChart, MdCode, MdMergeType } from "react-icons/md";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import style from "./index.module.scss";

const hero = (
  <div className={style.hero}>
    <img src={Logo} alt="Gamesome Logo"></img>
    <h1>Gamesome</h1>
  </div>
);

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      game: file(relativePath: { eq: "Game.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  const [viewOriginal, setViewOriginal] = useState(false);
  const description = {
    en: (
      <div className={style.description}>
        <p>
          <FaQuoteLeft className="small" />A Scania lad, who, after spending
          parts of his upbringing among mummies, scarabs and koshari, returned
          and had to start repairing Malmö dialect.
        </p>
        <p>
          Possesses unique talents such as being able to cook risotto without
          rice and was once the biggest basket ball talent north of Värnhem.
        </p>
        <p>
          After a dramatic flight, however, He landed as bitter joy-spreader
          behind a keyboard, where he'd rather code and do it well.
          <FaQuoteRight className="small" />
        </p>
        <p>My name is Ahmad Game.</p>
      </div>
    ),
    sv: (
      <div className={style.description}>
        <p>
          <FaQuoteLeft className="small" />
          En skånepåg som, efter att ha tillbringat delar av sin uppväxt bland
          mumier, pillerbaggar och koshari, återvände och fick börja med att
          reparera sin malmöitiska.
        </p>
        <p>
          Besitter unika talanger så som att kunna laga risotto utan ris och var
          en gång den största baskettalangen norr om värnhem.
        </p>
        <p>
          Efter en dramatisk flygresa landade han som bitter glädjespridare
          bakom tangentbordet där han numera kodar hellre och bra.
          <FaQuoteRight className="small" />
        </p>
        <p>Mitt namn är Ahmad Game.</p>
      </div>
    ),
  };

  const getDescription = () => {
    if (viewOriginal) {
      return description["sv"];
    }
    return description["en"];
  };

  return (
    <Layout hero={hero}>
      <SEO />
      <section id="what">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>What is Gamesome?</h2>
          <div className={style.row}>
            <div className={`${style.column} ${style.logoColumn}`}>
              <img width="250" src={InvertedLogo} alt="Gamesome Logo again" />
            </div>
            <div className={style.column}>
              <p>
                Gamesome is a software consultant company with a long term goal
                to grow into developing our own products.
              </p>
              <p>
                The plan is to work in cycles alternating between consulting and
                developing my own product ideas.
              </p>
              <p>
                The consultant cycles will finance the product cycles and
                provide an environment of validating my product ideas.
              </p>
              <p>
                The product cycles will give me experience that I can use to
                help customers build better products.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="why">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>How Gamesome can help</h2>
          <div className={style.row}>
            <div className={style.column}>
              <div className={style.header}>
                <MdCode className="color-primary" />
                <h4>Development</h4>
              </div>
              <p>
                Software development and building products is our core business.
                We think software is about solving real problems in a creative
                and practical way.
              </p>
              <div className={style.header}>
                <MdShowChart className="color-primary" />
                <h4>Product Management</h4>
              </div>
              <p>
                The end goal of all software is to solve human problems. The
                user perspective and the business side of software development
                is something we have experience with.
              </p>
              <div className={style.header}>
                <MdMergeType className="color-primary" />
                <h4>Coaching</h4>
              </div>
              <p>
                Software is built by people. Getting people to work together in
                synergy towards a common goal is both productive and rewarding.
              </p>
              <p>
                <Link to="https://ahmadgame.com/experience/">Read more...</Link>
              </p>
            </div>
            <div className={style.column}>
              <TechLogos />
            </div>
          </div>
        </div>
      </section>
      <section id="who">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>Who is behind Gamesome</h2>
          <div className={style.row}>
            <div className={style.column}>
              <Img fluid={data.game.childImageSharp.fluid} />
            </div>
            <div className={style.column}>
              <Switch
                label="Original"
                onChange={checked => setViewOriginal(checked)}
              />
              {getDescription(viewOriginal)}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
