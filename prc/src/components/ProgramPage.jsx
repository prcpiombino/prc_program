import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Collapse, Divider } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';

import './HomePage.css';

const ProgramPage = (props) => {

  const openPage = () => {
    console.log('test')
  }
  
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/PRC_Piombino')
  }

  return (
    <div id={props.id} className="homepage">
        <header className="communist-header">
            <Button type="primary" danger shape="round" icon={<LeftCircleOutlined />} size={'large'} onClick={() => {goBack()}}>
                Torna alla homepage
            </Button>
            <h1>Fabrizio Callaioli</h1>
            <p>Candidato sindaco di Piombino per la coalizione PRC - M5S</p>
        </header>
        <>
            <Divider orientation="left">Ambiente</Divider>
            <Collapse
            size="large"
            items={[
                {
                key: '1',
                label: 'Intro ad ambiente',
                children: <p>Qui si parla di ambiente</p>,
                },
            ]}
            />
             <Divider orientation="left">Famiglie</Divider>
            <Collapse
            size="large"
            items={[
                {
                key: '1',
                label: 'Intro Famiglie',
                children: <p>Qui si parla di Famiglie</p>,
                },
            ]}
            />
             <Divider orientation="left">Lavoro</Divider>
            <Collapse
            size="large"
            items={[
                {
                key: '1',
                label: 'Intro Lavoro',
                children: <p>Qui si parla di Lavoro</p>,
                },
            ]}
            />
             <Divider orientation="left">Diritti</Divider>
            <Collapse
            size="large"
            items={[
                {
                key: '1',
                label: 'Intro Diritti',
                children: <p>Qui si parla di Diritti</p>,
                },
            ]}
            />
             <Divider orientation="left">Economia</Divider>
            <Collapse
            size="large"
            items={[
                {
                key: '1',
                label: 'Intro Economia',
                children: <p>Qui si parla di Economia</p>,
                },
            ]}
            />
        </>
    </div>
  );
}

export default ProgramPage;
