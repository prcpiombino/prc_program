import React from 'react';

import './HomePage.css';
import personImage from '../img/fabrizio_callaioli.png'

const HomePage = (props) => {

  return (
    <div id={props.id} className="homepage">
      <header className="communist-header">
        <h1>Fabrizio Callaioli</h1>
        <p>Candidato sindaco di Piombino per la coalizione PRC - M5S</p>
      </header>
      <img style={{"marginTop":"50px"}} alt="no-img" src={personImage} />
      <p className='person-description'>Fabrizio Callaioli, nato a Piombino il 07/08/1962, laureato presso
          l’Università degli Studi di Pisa, con 106/110, discutendo una tesi
          di storia del diritto penale dal titolo: Il Codice Penale del
          Principato di Piombino. Dal 28 maggio 2010 iscritto all’Albo
          Speciale degli Avvocati Cassazionisiti.
          Le materie di maggior impegno nell’esercizio della professione
          sono: diritto del lavoro, infortunistica sul lavoro, diritto
          previdenziale, diritto penale del lavoro, infortunistica stradale e
          diritto di famiglia.
          Sono stato l’avvocato del sindacato SLAI-COBAS dal 1996 al 2000.
          Dal 1998 al 2010 sono stato avvocato della UIL di Piombino e
          dell’Elba. Attualmente sono l’avvocato del COBAS Lavoro Privato.
          Dall’ottobre 1999 all’agosto 2006 sono stato Consigliere
          d’Amministrazione di ATM (Azienda Trasporti Municipalizzati)
          Piombino spa.
          Dal 1989 al 2009 ho militato in Amnesty International. Ho
          ricoperto la carica di Consigliere Comunale, capogruppo per il
          Partito della Rifondazione Comunista a Piombino nel mandato
          amministrativo 2014 / 2019. Esperienza che prosegue anche
          nell’attuale consiliatura (2019 / 2024)
          Consigliere della Provincia di Livorno nel mandato 2014 / 2016,
          ricoprendo la carica di Presidente della Commissione Statuto,
          che, in seguito alla riforma delle province, ha redatto il nuovo
          statuto della Provincia di Livorno e il nuovo Regolamento del
          Consiglio Provinciale di Livorno.</p>
    </div>
  );
}

export default HomePage;
