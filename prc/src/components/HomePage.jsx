import React from 'react'

import './HomePage.scss'
import personImage from '../img/fabrizio_callaioli.png'
import logo from '../img/Rifondazione_Comunista.png'
import logo2 from '../img/M5S_logo_2050.png'

const HomePage = (props) => {

  return (
    <div id={props.id} className="homepage">
      <header className="communist-header">
        <img alt="no-img" height={120} src={logo}  style={{background: '#fff', padding:'3px', borderRadius:'50%'}}/>
        <img className="communist-header-logo" alt="no-img" height={120} src={logo2} style={{background: '#fff', padding:'3px', borderRadius:'50%', marginLeft:'10px'}}/>
        <h1>Fabrizio Callaioli</h1>
        <p>Candidato sindaco di Piombino per la coalizione PRC - M5S</p>
      </header>
      <div className='bio'>
        <img style={{"marginTop":"50px"}} alt="no-img" src={personImage} height={props.mobile ? 320 : 400}/>
        <p className='person-description person-description-bio'>
            Fabrizio Callaioli, nato il 7 agosto 1962 a Piombino, ha calcato i banchi dell'Università degli Studi di Pisa con passione e dedizione, laureandosi brillantemente con una votazione di 106/110. Durante il suo percorso accademico, ha affrontato con fervore il tema della storia del diritto penale, scrivendo una tesi accattivante dal titolo: "Il Codice Penale del Principato di Piombino". Da allora, il suo cammino professionale ha seguito una traiettoria di eccellenza, culminando con l'iscrizione, avvenuta il 28 maggio 2010, all'Albo Speciale degli Avvocati Cassazionisti. Le sue aree di competenza predilette nell'esercizio della professione includono il diritto del lavoro, l'infortunistica sul lavoro, il diritto previdenziale, il diritto penale del lavoro, l'infortunistica stradale e il diritto di famiglia. Prima di questo traguardo, ha dato il suo contributo come avvocato della UIL di Piombino e dell'Elba per un periodo che va dal 1998 al 2010, consolidando la sua reputazione come esperto legale impegnato e competente.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
