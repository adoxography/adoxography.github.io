import React, { useState } from 'react';
import posed from 'react-pose';

const Container = posed.div({
  enter: {
    opacity: 1,
    transition: { duration: 2000 }
  },
  exit: {
    opacity: 0
  }
});

const Background = ({ src }) => {
  const [ loaded, setLoaded ] = useState(false);

  const handleLoad = () => setLoaded(true);

  return (
    <Container className="fixed -z-50 top-0" pose={loaded ? 'enter' : 'exit'}>
      <img src={src} onLoad={handleLoad} loading="lazy" className="h-screen w-screen object-cover opacity-25" alt="" />
    </Container>
  );
};

export default Background;
