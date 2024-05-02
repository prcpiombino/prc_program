import React from 'react';

import { Anchor, Carousel, Col, Row } from 'antd';

import HomePage from './HomePage';
import Program from './Program';
import Contact from './Contact';

const Main = () => {

  const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  }

  return (
    <div className="App">
      <Row>
        <Col span={20}>
          <HomePage
            id="part-1"
            style={{
              height: '100vh',
              background: 'rgba(255,0,0,0.02)',
            }}
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
          />
        </Col>
        <Col span={4} className='anchorContainer'>
          <Anchor 
            className='makeItRed'
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
          <Carousel style={{"position":"fixed", "top":"200px"}} arrows dotPosition="left" infinite={false} >
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>

          <Carousel style={{"position":"fixed", "top":"600px"}} arrows dotPosition="left" infinite={false} >
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}

export default Main;
