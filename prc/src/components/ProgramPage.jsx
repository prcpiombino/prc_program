import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Collapse, Divider } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';

import './HomePage.scss';

const ProgramPage = (props) => {

    //   const openPage = () => {
    //     console.log('test')
    //   }

    const navigate = useNavigate();

    const goBack = () => {
        navigate('/PRC_Piombino')
    }

    return (
        <div id={props.id} className="homepage">
            <header className="communist-header">
                <Button type="primary" danger shape="round" icon={<LeftCircleOutlined />} size={'large'} onClick={() => { goBack() }}>
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
                <Divider orientation="left">Turismo</Divider>
                <Collapse
                    size="large"
                    items={[
                        {
                            key: '1',
                            label: 'Introduzione Turismo',
                            children: <p>Piombino, con le sue radici etrusche profonde e la sua storia del  lavoro legata a Populonia, si distingue come una destinazione unica nel panorama turistico italiano.
                                Negli ultimi anni, la città ha saputo coniugare la sua ricca eredità storica con la bellezza dei suoi paesaggi, attirando visitatori da tutto il paese. Tuttavia, nonostante il crescente afflusso turistico, Piombino si trova di fronte alla sfida di diversificare l'economia locale per creare opportunità di lavoro sostenibili.
                                Creare una sinergia virtuosa tra l'attività turistica e quella manifatturiera a Piombino rappresenta un obiettivo primario per garantire lo sviluppo sostenibile della città. È fondamentale adottare una concezione di turismo che rispetti l'ambiente naturale e antropico locale, evitando pratiche di sfruttamento e cementificazione incontrollata.
                                Piombino possiede un patrimonio storico e artistico di inestimabile valore, che va rivalutato e valorizzato per attrarre turisti interessati alla scoperta autentica e alla cultura locale. Il turismo culturale, basato sulla conoscenza e sulla divulgazione della storia millenaria della città, rappresenta un'opportunità per allungare la stagione turistica e garantire un flusso costante di visitatori.
                                Dobbiamo essere in grado di sviluppare una coscienza storica che sappia valorizzare la particolarità del luogo nel quale viviamo, ridistribuendo i percorsi storici e le strutture ricettive per tutto il territorio fuori dalla logica di agglomerazione di risorse e servizi nei luoghi più facilmente pubblicizzabili. Potenziare infine il turismo dei “luoghi della memoria” e della Resistenza, da Punta Falcone alle strutture civili e militari (Piazza Bovio, la Casamatta, il Bunker dei Quattro Pini).
                                Inoltre, è necessario sviluppare nuove proposte turistiche alternative al classico turismo balneare, come il ciclo-turismo e il turismo sportivo, per attrarre visitatori in tutte le stagioni dell'anno. In questo contesto, la creazione di un luogo semipermanente per eventi culturali e concerti potrebbe contribuire a rilanciare l'immagine di Piombino come destinazione turistica dinamica e vivace.
                                Per promuovere efficacemente Piombino come meta turistica, è essenziale adottare una nuova strategia di marketing e collaborare con programmi televisivi e riviste specializzate per cambiare l'immagine della città e attrarre nuovi visitatori. Inoltre, l'innovazione tecnologica e la digitalizzazione sono fondamentali per rendere accessibili e visibili le risorse turistiche meno conosciute del territorio.
                                Il sistema turistico toscano, resiliente alla crisi causata dal Covid-19, si trova di fronte a importanti opportunità e sfide. L'intervento pubblico è cruciale per sostenere la digitalizzazione dei territori e potenziare l'offerta turistica, garantendo la crescita economica e la tutela dell'ambiente.
                                Per quanto riguarda la presenza di turisti, Piombino, città affascinante e ricca di storia, si trova di fronte a una sfida importante: come attirare e gestire i turisti in modo efficace senza compromettere la qualità dell'esperienza dei visitatori.
                                Visto il successo registrato lo scorso anno, Piombino si candida per attrarre i turisti che alloggiano nei Villaggi e Residence del territorio, attraverso iniziative ed eventi che valorizzino la sua cultura e le sue bellezze naturali.
                                Per raggiungere questo obiettivo, è essenziale potenziare la sinergia tra i commercianti locali e tra gli stessi e l’amministrazione comunale al fine di creare un'offerta turistica omogenea. Collaborando, insieme e con il supporto dell’amministrazione comunale, i commercianti possono organizzare eventi e attività che soddisfino le esigenze dei turisti, rendendo Piombino una meta attraente per le serate dei visitatori.
                                Durante la stagione estiva, il commercio svolge un ruolo fondamentale a supporto dei turisti per soddisfare le loro esigenze. È importante, quindi, che le attività commerciali siano aperte, in maniera sinergica tra di loro, garantendo così un servizio continuo e di qualità. Questo approccio favorisce non solo l'economia locale, ma contribuisce anche a creare un'esperienza positiva per chi sceglierà Piombino per le sue vacanze, che si sentirà accolto e supportato durante la permanenza.
                                E’ essenziale questa sinergia e ci impegneremo per supportare i progetti dei commercianti  e la loro disponibilità di offrire il miglior servizio.
                                Riconosciamo l'importanza dei commercianti nel tessuto economico e sociale della nostra comunità e siamo consapevoli che il loro successo è anche il successo di un’amministrazione. Per questo motivo, ci impegniamo a creare un ambiente favorevole per lo sviluppo di attività commerciali, fornendo supporto e risorse necessarie per la realizzazione dei loro progetti.
                                Inoltre, è importante sviluppare una strategia turistica integrata che metta in luce le peculiarità della città e promuova le sue attrattive in modo efficace. Attraverso una collaborazione stretta tra le varie realtà locali, Piombino può emergere come una destinazione turistica di successo, in grado di offrire esperienze uniche e indimenticabili ai suoi visitatori.
                                Piombino ha tutte le carte in regola per diventare una meta turistica di rilievo, ma è fondamentale agire in modo coordinato e strategico per valorizzare al meglio il suo potenziale. Con l'impegno e la collaborazione di tutti gli attori locali, Piombino può consolidare la sua posizione sul mercato turistico e attrarre un numero sempre maggiore di visitatori.
                                In conclusione, il nostro Piano per il Turismo a Piombino rappresenta una strada verso lo sviluppo sostenibile della città, basato sulla valorizzazione del suo patrimonio storico e artistico, sull'innovazione tecnologica e sulla collaborazione tra settori pubblici e privati. Solo attraverso un approccio olistico integrato sarà possibile garantire un futuro florido e sostenibile per Piombino come destinazione turistica.
                            </p>,
                        },
                        {
                            key: '2',
                            label: 'Turismo balneare',
                            children: <p>Per sfruttare appieno il potenziale turistico di Piombino, è essenziale ampliare l'offerta turistica oltre la stagione estiva e oltre il turismo balneare.
                                Promuovere forme alternative di turismo, come quello culturale, enogastronomico, sportivo e del tempo libero, è cruciale per attrarre visitatori durante tutto l'anno. Inoltre, migliorare i servizi turistici esistenti, come trasporti, siti culturali, parchi ed eventi, è fondamentale per offrire un'esperienza turistica di qualità.
                                Per raggiungere questi obiettivi, è necessario potenziare il ruolo dei Parchi Val di Cornia per proteggere e valorizzare il patrimonio naturale e culturale della regione, nonché promuovere il turismo.

                                Il turismo balneare può essere arricchito attraverso iniziative per migliorare la viabilità del golfo di Baratti e promuovere il turismo subacqueo in collaborazione con centri di diving locali.
                                Organizzare eventi sportivi acquatici e censire i luoghi d'immersione sono ulteriori strategie per attrarre visitatori interessati alle attività marine.
                                Il turismo subacqueo rappresenta un'opportunità unica per valorizzare i siti di maggiore interesse, preservando al contempo l'ambiente marino.
                                La collaborazione con diving e associazioni specializzate può incrementare i servizi offerti, rendendo il patrimonio marino più attraente.

                                Piombino ha un grande potenziale turistico ancora inesplorato che merita di essere valorizzato. Attraverso una strategia che promuova diversi tipi di turismo, potenzi i servizi esistenti e sviluppi nuove iniziative, la città può emergere come una destinazione turistica di rilievo a livello nazionale, offrendo esperienze uniche e sostenibili per i visitatori.
                            </p>,
                        },
                        {
                            key: '3',
                            label: 'Turismo itinerante',
                            children: <p>Il turismo itinerante può essere potenziato predisponendo aree attrezzate per i camper.
                                Sono circa 20 milioni i turisti che in tutta Europa scelgono questa modalità di viaggio e se ci chiediamo perché dobbiamo investirci è perché ognuna di queste autocaravan spende in media 200 euro al giorno in ristorazione, nell’acquisto di prodotti enogastronomici locali e anche in attività culturali, quali ingressi nei musei, siti archeologici e parchi a tema, e altro.
                                E’ anche un’opportunità di scambio culturale e di sviluppo economico ma a piccoli pass e senza stravolgere la vita dei residenti.
                                Quando diciamo attrezzate, intendiamo dotate di tutto il necessario.
                                Questa è una delle soluzioni che applica modelli di accoglienza a basso impatto, capace tuttavia di offrire servizi di qualità ai turisti e grazie a questa sarà possibile eliminare il campeggio abusivo.
                                L'accesso alle spiagge deve essere reso più agevole, con particolare attenzione all'eliminazione delle barriere architettoniche.

                                Il fenomeno del nomadismo digitale, soprattutto dopo l’esperienza del Covid, è in costante crescita e Piombino ha il potenziale per diventare una meta attraente per questi lavoratori in remoto. Creare uno spazio di coworking in ambienti dismessi del comune potrebbe portare benefici significativi alla città, sia economici che culturali. È importante sfruttare al meglio questa opportunità per promuovere lo sviluppo e la crescita di Piombino come destinazione ideale per i nomadi digitali.
                            </p>,
                        },
                        {
                            key: '4',
                            label: 'Turismo  enogastronomico',
                            children: <p>Il turismo enogastronomico è un settore in continua crescita e di grande importanza per la promozione del territorio e delle sue eccellenze alimentari.
                                L'organizzazione di manifestazioni enogastronomiche rappresenta un importante punto di incontro tra il nuovo approccio verso il cibo e l'interesse crescente per i prodotti e la cucina locali. Questo fenomeno è evidenziato dall'aumento della domanda di questa forma di turismo e dalla diffusione di programmi televisivi che mettono in primo piano la cucina.
                                Il cibo non è solo nutrimento, ma anche un ambasciatore della cultura di un luogo. Grazie al suo valore simbolico, artistico e storico, il cibo svolge un ruolo fondamentale nella trasmissione della cultura territoriale e nella sua valorizzazione.
                                Siamo intenzionati a coniugare questi valori legati al cibo per valorizzare la cultura del territorio e la sua storia.

                                Anche l’offerta di eventi enogastronomici è in aumento, grazie alla crescente richiesta, e rappresentano un'opportunità per promuovere i prodotti locali, la tradizione culinaria e l'identità di un territorio. Attraverso queste iniziative, è possibile valorizzare le eccellenze gastronomiche locali.
                                L’esperienza di "Poderando" deve essere  diffusa ad altre aree del territorio, magari creando un brand da ripetere annualmente.
                                Inoltre, promuovere eventi di Street Food e riprendere il filo interrotto con la FIVA e prevedere nuovamente lo svolgimento del  Mercato Europeo, magari lontano dal periodo  balneare, può rappresentare un’attrazione e richiamare un numero maggiore di visitatori.

                                Come detto nella premessa, organizzare un evento rivolto ai turisti in collaborazione con le attività commerciali di ristorazione e  con le strutture ricettive, permetterebbe di promuovere e far conoscere tutti i servizi presenti sul territorio. Questa rappresenterebbe un'opportunità per valorizzare le eccellenze alimentari locali e promuovere produzioni artigianali.
                            </p>,
                        },
                        {
                            key: '5',
                            label: 'Ottimizzazione del Turismo Naturalistico e Sportivo e Valorizzazione del Turismo Culturale',
                            children: <p>Il Parco della Sterpaia offre agli amanti della natura un'opportunità unica per vivere un’esperienza di svago e relax. Valuteremo iniziative a supporto dei turisti che desiderano vivere esperienze naturalistiche e dei residenti

                                Il nostro promontorio, di ineguagliabile bellezza, offre la possibilità di usufruire di percorsi e sentieri a disposizione di chi vuole vivere un turismo naturalistico e/o sportivo. La manutenzione, tuttavia, a oggi è molto carente così come per le aree pic-nic presenti  e per  la segnaletica che dovranno essere manutenuti, non soltanto durante il periodo estivo ma per tutto l’anno. Punti informativi con la storia di Piombino, i suoi legami con il  mare e con gli  etruschi, potrebbero arricchire l’esperienza turistica.
                                Il nostro territorio è ricco di sentieri: attivare la procedura per il loro inserimento nel CAI –Catasto Sentieri d’Italia - potrebbe rappresentazione un’opportunità in più per chi ama il turismo naturalistico e una potenziale attrazione turistica.

                                L'Oasi Orti Bottagone, è, secondo la definizione, un'area naturale protetta per la conservazione di un habitat di particolare interesse floristico e faunistico e per la salvaguardia della sua biodiversità. E’ interesse di tutti noi tutelarla e valorizzarla, con percorsi didattici, divulgazione, sensibilizzazione e ricerca scientifica, perché ogni specie che scompare non potrà mai più essere ricreata.

                                Verificare la possibilità di organizzare anche a Piombino eventi come l'Outdoor Sport Festival, che in questo momento viene organizzato in località vicine a noi.

                                La collaborazione con il Club Alpino Italiano per la mappatura dei sentieri e il supporto alle attività di trekking urbano potrebbero promuovere ulteriormente il territorio così come valorizzare punti di interesse come punta Falcone e l’Associazione Astrofili può arricchire l'esperienza dei visitatori.
                            </p>,
                        }, {
                            key: '6',
                            label: 'Turismo Culturale',
                            children: <p>Per quanto riguarda il Turismo Culturale, incentivare le visite ai parchi e musei, creare una mappa romanzata del territorio e valorizzare la piazza del Museo Archeologico di Cittadella potrebbero attrarre un pubblico interessato alla cultura e alla storia locale. Il coinvolgimento delle associazioni di guide turistiche potrebbe arricchire ulteriormente l'offerta turistica culturale.
                                Il turismo che immaginiamo per questa città, ad alto consumo di conoscenza, è quello di una sapiente rivalutazione della storia millenaria e dell’immenso patrimonio artistico e urbanistico che ha Piombino. Dal castello, che presenta notevoli pregi d’architettura militare come i bastioni d’impianto trace italienne e il cassero pisano, alle mura leonardesche, lascito del dominio del Borgia, fino al vero e proprio gioiello, unicum per qualità e quantità, dell’area etrusca di Populonia.

                                In conclusione, l'ottimizzazione del turismo naturalistico e sportivo e la valorizzazione del turismo culturale potrebbero trasformare il territorio in una meta turistica ricca di esperienze coinvolgenti per i visitatori.
                                Il miglioramento della cura e della conservazione del patrimonio paesaggistico attraverso l'implementazione sentieristica sul promontorio è un obiettivo di grande importanza.</p>,
                        }, {
                            key: '7',
                            label: "Per finire, l'importanza dei dati nel settore turistico",
                            children: <p>
                                L'analisi accurata dei dati nel settore turistico è fondamentale per il successo e la sostenibilità delle attività commerciali. La corretta interpretazione dei dati e delle statistiche guida le decisioni strategiche, ottimizzando gli investimenti e garantendo un'offerta adeguata alla domanda turistica locale.
                                È essenziale comprendere i turisti, le loro preferenze e il tipo di esperienza che cercano. Valutare l'accessibilità e l'attrattiva dei locali è altrettanto cruciale per il successo nell'ospitalità turistica. È fondamentale considerare non solo gli arrivi turistici e le presenze, ma anche la spesa complessiva dei visitatori per valutare la crescita del turismo sul territorio. Inoltre, è essenziale analizzare se un aumento delle presenze turistiche è accompagnato da un incremento della spesa o da una riduzione dei prezzi per attrarre più turisti.
                                Presenze poi vanno trasformate in economia turista

                                È importante anche considerare gli escursionisti e i visitatori di giorno, utilizzando indicatori alternativi per valutare la domanda turistica locale in modo accurato e affidabile.

                                La presenza online delle attività turistiche della zona è fondamentale per attirare visitatori e promuovere il territorio in modo efficace. Grazie alla presenza su piattaforme digitali e sui social media, le aziende turistiche possono raggiungere un pubblico più ampio e interagire con i potenziali clienti in modo diretto e immediato.
                                In un'epoca in cui sempre più viaggiatori utilizzano internet per pianificare le proprie vacanze, trascurare la presenza online può significare perdere preziose opportunità. Investire tempo e risorse nella gestione della propria presenza online può portare a risultati significativi in termini di visibilità, reputazione e, alla fine, di successo commerciale.
                                Questo in un momento in cui le tracce digitali confermano un crescente interesse verso Piombino, tant’è nella Top 5 della categoria degli affittacamere e delle case/appartamenti diverse strutture di affittacamere situate a Piombino risultano al secondo posto tra tracce digitali lasciate da possibili turisti.
                                Per “traccia digitale” ci riferiamo all’insieme unico e irripetibile di attività e azioni, tutte tracciabili, manifestate da un utente in rete.
                                Per questo motivo, ci impegneremo a fornire un maggiore supporto alla presenza online delle attività turistiche della zona. Grazie a questa collaborazione, le imprese potranno sfruttare al meglio le opportunità offerte dal mondo digitale per attrarre visitatori e promuovere al meglio il territorio di Piombino. Siamo convinti che investire in una presenza online efficace porterà benefici tangibili alle attività turistiche locali e contribuirà a valorizzare ulteriormente le bellezze del nostro territorio e della nostra città.
                            </p>,
                        },
                    ]}
                />
            </>
        </div>
    );
}

export default ProgramPage;
