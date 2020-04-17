import React from 'react';
import { Link as BaseLink } from 'react-router-dom';
import TopNav from '../TopNav';

const Heading = ({ children, className }) => (
  <h2 className={`font-display uppercase font-thin tracking-tight text-2xl leading-tight ${className}`}>
    {children}
  </h2>
);

const Paragraph = ({ children, className }) => (
  <p className={`leading-relaxed mt-2 text-tint-80 ${className}`}>
    {children}
  </p>
);

const Anchor = ({ children, href, rel, className }) => (
  <a href={href} rel={rel} className={`text-blue-200 hover:text-shadow-glow transform-all duration-150 ${className}`}>
    {children}
  </a>
);

const Link = ({ children, to, className }) => (
  <BaseLink to={to} className={`text-blue-200 hover:text-shadow-glow transform-all duration-150 ${className}`}>
    {children}
  </BaseLink>
);

const About = () => (
  <>
    <TopNav />

    <article className="mx-4 mt-6 mb-8">
      <Heading>Who am I?</Heading>
      <Paragraph>
        My name is <strong>Graham Still</strong>, and I'm a <strong>developer</strong>, <strong>educator</strong>, and <strong>linguist</strong> based in Winnipeg, Manitoba, Canada.
      </Paragraph>

      <Heading className="mt-6">What do I do?</Heading>
      <Paragraph>
        My main areas of interest include web development and machine learning. I have a soft spot for so-called low-resource languages (i.e. languages that aren't spoken by very many people), and I've done a fair bit of work around them, including <Anchor href="http://alglang.net">Alglang.net</Anchor>, an online database documenting the structures of the Algonquian languages of North America.
      </Paragraph>

      <Heading className="mt-6">What am I doing right now?</Heading>
      <Paragraph>
        I work as the Education Lead for the Winnipeg <Anchor href="https://canadalearningcode.ca/code-mobile">Code Mobile</Anchor>. I'm also in the final stages of a Masters degree in <strong>Computational Linguistics</strong> (also known as <strong>Natural Language Processing</strong>), supervised by Dr. Gina-Anne Levow.
      </Paragraph>

      <h3 className="mt-6 text-lg">
        <Link to="/contact">Send me a message</Link> if you'd like to get in touch!
      </h3>
    </article>
  </>
);

export default About;
