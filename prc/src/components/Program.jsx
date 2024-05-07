import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'antd';

import './HomePage.scss';

const Program = (props) => {

  // const openPage = () => {
  //   console.log('test')
  // }

  return (
    <div id={props.id} className="homepage margin-top">
      <h2>Programma</h2>
      <Button size={'large'} type="primary" danger>
        <Link to="/PRC_Piombino/program">Visualizza il programma completo</Link>
      </Button>
      <p className='shortProgram'>
        Votare la coalizione di Rifondazione Comunista e del Movimento 5 Stelle alle elezioni amministrative di Piombino è un atto di coraggio e di fiducia nel futuro della nostra comunità.

        Una scelta 'rivoluzionaria' perché per la prima volta cerca di riportare nel palazzo del comune il luogo delle decisioni cruciali per questa città.
        Non più scelte calate dall'alto - da Roma o da Firenze - ma condivise dalla città.
        Ma non solo.
        Chi sceglie la nostra coalizione sceglie di promuovere una politica improntata alla rimozione le diseguaglianze sociali e alla promozione benessere di tutti i cittadini. Un benessere che si misura con la qualità dei servizi, dell'ambiente e dell'offerta culturale. Chi sceglie noi, sceglie di sostenere una nostra coalizione che si impegna a garantire servizi pubblici di qualità, accessibili a tutti, e a promuovere l'equità sociale e di genere attraverso politiche di inclusione e di redistribuzione delle risorse.
        Chi sceglie noi, sceglie di sostenere una coalizione che vuol prestare voce ai problemi dell'ambiente, alla tutela del territorio e delle sue risorse naturali.
        Chi sceglie di sostenere noi, sceglie una coalizione che promuove la democrazia partecipativa e l'apertura alla diversità, promuovendo un dialogo costante con i cittadini e valorizzando le loro voci e le loro esigenze.
        Ma soprattutto chi sceglie di sostenerci sceglierà il contrasto ad ogni forma di discriminazione e a promuovere i valori di solidarietà, giustizia e dignità per tutti i membri della comunità cittadina.

        Sanità, lavoro, istruzione, ambiente, spiagge pubbliche e mobilità sono i temi su cui puntiamo!
        Perché Piombino smetta di essere "un'isola" e torni finalmente collegata al continente.
        Una città di nuovo protagonista della Val di Cornia, della Toscana e dell'Italia intera!
      </p>
      <blockquote class="quote">
        <p>Perché 'Io' torni orgogliosamente a pronunciarsi 'Noi'</p>
      </blockquote>
    </div>
  );
}

export default Program;
