import React from 'react';

import './HomePage.scss';

import { SocialIcon } from 'react-social-icons'
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Contact = (props) => {

  return (
    <div id={props.id} className="homepage margin-top">
      <h2>Contattaci</h2>
      <p>Vuoi far parte della campagna? Scrivici!</p>
      <Button type="primary" icon={<SearchOutlined />} style={{margin:"20px"}}>
        <a target="_blank" className='btn' href="https://www.openstreetmap.org/?mlat=42.92552&amp;mlon=10.53010#map=19/42.92552/10.53010">Visualizza mappa ingrandita</a>
      </Button>
      <iframe
        title='map'
        width="1125"
        height="550"
        src="https://www.openstreetmap.org/export/embed.html?bbox=10.527469217777254%2C42.92429299912031%2C10.532726347446442%2C42.92675195172321&amp;layer=mapnik&amp;marker=42.92552248769084%2C10.530097782611847"
        style={{ border: "2px solid red" }}>
      </iframe>
      <section class="contact-us">
        <h3>Contattaci!</h3>
        <p>Siamo lieti di ascoltarvi. Condividete i vostri pensieri, le vostre domande o lasciatevi coinvolgere per fare la differenza.</p>

        <div class="contact-methods">
          <div class="method">
            <i class="fas fa-envelope"></i> <h3>Scrivici una mail</h3>
            <p>Scrivi una mail a: <a href="mailto:OrgogliosamenteM5sPrc@gmail.com">OrgogliosamenteM5sPrc@gmail.com</a></p>
          </div>
          <div class="method">
            <i class="fas fa-phone"></i> <h3>Chiamaci</h3>
            <p>Chiamaci direttamente: <a href="tel:+39 339 410 8008">(+39) 339 410 8008</a></p>
          </div>
          <div class="method">
            <i class="fas fa-map-marker-alt"></i> <h3>Vieni a trovarci</h3>
            <p>Ci troviamo in: Via Marco Polo 4a</p>
          </div>
        </div>

        <div class="social-media">
          <h4>Seguiteci sui social!</h4>
          <ul>
            <li><SocialIcon url='https://www.instagram.com/rifondazione_piombino?igsh=MXEweWg3bWRwNHE3Nw==' /></li>
            <li><SocialIcon url='https://www.facebook.com/profile.php?id=61558440627618' /></li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Contact;
