import React, { useEffect, useState } from 'react';

import { Anchor, Col, Row } from 'antd';

import HomePage from './HomePage';
import Program from './Program';
import Contact from './Contact';

const Main = () => {

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []); 
  
  const mobile = screenSize.width < 980

  // const contentStyle = {
  //   margin: 0,
  //   height: '160px',
  //   color: '#fff',
  //   lineHeight: '160px',
  //   textAlign: 'center',
  //   background: '#364d79',
  // }
  return (
    <div className="App">
      <Row>
        <Col span={mobile ? 18 : 20}>
          <HomePage
            id="part-1"
            style={{
              height: '100vh',
              background: 'rgba(255,0,0,0.02)',
            }}
            mobile = {mobile}
          />
          <Program
            id="part-2"
            style={{
              height: '100vh',
              background: 'rgba(0,255,0,0.02)',
            }}
          />
          <Contact
            id="part-3"
            style={{
              height: '100vh',
              background: 'rgba(0,0,255,0.02)',
            }}
            mobile = {mobile}
          />
        </Col>
        <Col span={mobile ? 6 : 4} className='anchorContainer'>
          <Anchor
            items={[
              {
                key: 'part-1',
                href: '#part-1',
                title: 'Candidato',
              },
              {
                key: 'part-2',
                href: '#part-2',
                title: 'Programma',
              },
              {
                key: 'part-3',
                href: '#part-3',
                title: 'Contatti',
              },
            ]}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Main;
