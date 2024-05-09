import React from 'react'

import './HomePage.scss'
import personImage from '../img/fabrizio_callaioli.png'
import logo from '../img/Rifondazione_Comunista.png'
import logo2 from '../img/M5S_logo_2050.png'

const HomePage = (props) => {

  return (
    <div id={props.id} className="homepage">
      <header className="communist-header">
        <img alt="no-img" height={120} src={logo} style={{ background: '#fff', padding: '3px', borderRadius: '50%' }} />
        <img className="communist-header-logo" alt="no-img" height={120} src={logo2} style={{ background: '#fff', padding: '3px', borderRadius: '50%', marginLeft: '10px' }} />
        <h1>Fabrizio Callaioli</h1>
        <p>Candidato sindaco di Piombino per la coalizione PRC - M5S</p>
      </header>
      <div className='bio'>
        <img style={{ "marginTop": "50px" }} alt="no-img" src={personImage} height={props.mobile ? 320 : 400} />
        <div style={{ textAlign: "center" }}>
          <blockquote class="quote">
            <p>Il coraggio delle scelte</p>
          </blockquote>
          <p className='person-description person-description-bio'>
            Sono Fabrizio Callaioli, nato il 7 agosto 1962 a Piombino.
            Ho frequentato il liceo classico di Piombino (quando ancora era possibile..) e poi mi sono laureato con una tesi sul codice penale del Principato di Piombino in Giurisprudenza all'Università degli Studi di Pisa.
            Mi sono dedicato a molti temi di storia del diritto ma è sulla storia penale dello stato piombinese che ho concentrato le mie pubblicazioni. Dal 2010 sono iscritto all'Albo Speciale degli Avvocati Cassazionisti. Le mie specializzazioni sono il diritto del lavoro, l'infortunistica sul lavoro, il diritto previdenziale, il diritto penale del lavoro, l'infortunistica stradale e il diritto di famiglia.
            In questi anni ho provato a difendere la mia città e i miei concittadini l'ho fatto come avvocato e l'ho fatto in consiglio comunale in questi dieci anni.
            In questo periodo mi sono battuto contro la nave rigassificatrice, contro il raddoppio della discarica, contro il depotenziamento dell'ospedale e lo smantellamento della fabbrica. Mi sono battuto, insomma, per una città dal benessere diffuso, solidale e libera dai vassallaggi. Per una città che scegliesse in casa propria il proprio futuro.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
