import React from 'react';

import './HomePage.css';

const Contact = (props) => {

  return (
    <div id={props.id} className="homepage">
      <h2>Contattaci</h2>
      <p>Vuoi far parte della campagna? Scrivici!</p>
      <p>INFO</p>
    </div>
  );
}

export default Contact;
