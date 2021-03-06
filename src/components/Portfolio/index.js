import React from 'react';
import TopNav from '../TopNav';
import Anchor from '../Anchor';

const Preview = ({ src, alt, href, className }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={`block flex-shrink-0 md:mr-4 lg:mr-6 mb-4 md:mb-0 ${className}`}>
    <img src={src} alt={alt} className="w-24 md:w-32 h-24 md:h-32 rounded-full" />
  </a>
);

const Paragraph = ({ children, className }) => (
  <p className={`text-gray-100 md:text-lg ${className}`}>
    {children}
  </p>
);

const Card = ({ children, className }) => (
  <article className={`flex flex-col md:flex-row items-center md:items-start p-5 md:p-3 lg:p-6 bg-shade-80 shadow rounded ${className}`}>
    {children}
  </article>
);

const Portfolio = () => (
  <>
    <TopNav />

    <div className="mx-8 md:mx-12 lg:mx-32 mt-8 mb-8">
      <Card>
        <Preview href="http://alglang.net" src="alglang-logo.png" alt="Alglang logo" />
        <Paragraph>
          The <strong>Database of Algonquian Language Structures</strong> (<Anchor href="http://alglang.net">alglang.net</Anchor>) is a project to provide basic information about the sounds and grammar of the Algonquian languages in an easily searchable format.
        </Paragraph>
      </Card>

      <Card className="mt-12">
        <Preview href="https://github.com/adoxography/countdown" src="countdown-logo.png" alt="Countdown logo" />
        <Paragraph>
          I often find myself needing a timer for the work sessions within in-person workshops I teach. All of the MacOS timers I've found so far either won't work on top of a full-screen app, or are glued to the top bar. <Anchor href="https://github.com/adoxography/countdown">Countdown</Anchor> overcomes both of these limitations.
        </Paragraph>
      </Card>

      <p className="mt-12 text-center text-tint-80 text-lg md:text-xl">
        I'm always working on new things! You can find more of my work on <Anchor href="https://github.com/adoxography">GitHub</Anchor>.
      </p>
    </div>
  </>
);

export default Portfolio;
