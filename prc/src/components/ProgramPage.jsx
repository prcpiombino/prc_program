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
        navigate('/home')
    }

    return (
        <div id={props.id} className="homepage">
            <header className="communist-header">
                <Button type="primary" danger shape="round" icon={<LeftCircleOutlined />} size={'large'} onClick={() => { goBack() }}>
                    Vai alla homepage
                </Button>
                <h1>Fabrizio Callaioli</h1>
                <p>Candidato sindaco di Piombino per la coalizione PRC - M5S</p>
            </header>
            <>
                <Divider className='divider' orientation="center">Introduzione</Divider>
                <Collapse
                    size="large"
                    items={[
                        {
                            key: '1',
                            label: 'LA PACE',
                            children: <p>Pace non significa semplicemente assenza di guerra. Significa creare relazioni, costruire ponti, assumere
                                le ragioni dell'altro nella ricerca delle soluzioni.
                                Il "ripudio" della guerra come strumento per la risoluzione delle controversie internazionali, impone
                                l'utilizzo della diplomazia, della trattativa, consegnando alla politica il ruolo che viene negato alle armi.
                                La guerra si alimenta demonizzando il "nemico", dipingendo le ragioni in buono contro cattivi, democratici
                                contro dittatori. Invece è proprio col “nemico” che si dovrà trattare.
                                Impone la doppia morale per cui i tanti conflitti si distinguono in invasioni, operazioni di polizia
                                internazionali, legittima difesa o addirittura peace keeping.
                                La guerra è un formidabile strumento per fare digerire politiche impopolari, consentendo affari enormi
                                alle multinazionali della finanza, delle armi, dell'energia.
                                La guerra che si conclude con una vittoria, illusoria in era nucleare, crea bacini di odio che diventano
                                germi di nuovi conflitti.
                                La guerra diventa pretesto per azioni di emergenza, anche dove l'emergenza poi si dimostra falsa:
                                Piombino, col suo rigassificatore, lo sa bene.
                                Pace significa, invece, anteporre gli interessi delle popolazioni rispetto alla retorica muscolare della
                                guerra.
                                Non permette di dividere i popoli in base ai confini fra nazioni. Semmai fra chi priva e chi è privato di
                                diritti, tra chi sfrutta e chi è sfruttato, fra chi lucra e chi subisce l'effetto di tali furti.
                                Questa idea di pace è per noi la premessa di ogni azione e chiama ognuno, qualsiasi ruolo ricopra, a
                                ricondurre le proprie azioni a tale principio.
                                In particolare a livello di Comune sarà necessario intervenire per coltivare la cultura della pace, nei
                                rapporti con le scuole, con le associazioni, con la biblioteca e con i cittadini.
                                Sarà possibile recuperando la memoria del pacifismo locale, sostenendo le azioni di contrasto alla
                                militarizzazione della società, rendendo indisponibile il nostro territorio ai traffici illegittimi di armi</p>,
                        },
                    ]}
                />
                <Divider className='divider' orientation="center">Sanità</Divider>
                <Collapse
                    size="large"
                    items={[
                        {
                            key: '1',
                            label: 'Introduzione',
                            children: <p>La riforma regionale della sanità del 2015, ha gettato le basi per la concentrazione delle eccellenze
                                sanitarie in pochi ospedali di alto livello e il conseguente smantellamento, passo dopo passo, degli
                                ospedali minori presenti su tutto il territorio toscano. Tuttavia questo smantellamento, e lo
                                smantellamento in generale della Sanità Pubblica, ha radici lontane e trova la sua legittimazione già nel
                                corso degli anni '90, con il processo di aziendalizzazione che ha reso le ASL dei soggetti che, pur essendo
                                giuridicamente pubblici, perseguono i propri obiettivi - tra cui assicurare i LEA, i Livelli Essenziali di
                                Assistenza, che sono le prestazioni e i servizi che il Servizio Sanitario Nazionale E’ TENUTO a fornire a
                                tutti i cittadini, gratuitamente o dietro pagamento del ticket con le risorse pubbliche raccolte attraverso la
                                fiscalità generale - alla stregua di un qualsiasi imprenditore privato, con l'obbligo di rispettare il vincolo
                                di bilancio, attenersi ai criteri di efficienza, efficacia ed economicità, sottoponendo di fatto il SSN alla
                                logica di mercato.
                                Quello che è accaduto nel 2015 ha provocato il collasso del Sistema Sanitario Regionale.
                                La riforma voluta da Rossi e dal PD, che ha ridotto le 12 ASL regionali a 3, più 3 Aziende Ospedaliere,
                                realizzata in fretta e furia per fare cassa dopo i tagli del Governo Renzi, pari a circa 16 miliardi e mezzo,
                                ha prodotto un assetto fatto di strutture elefantiache, come i Dipartimenti Aziendali, che si incrociano con
                                Aree Funzionali che a loro volta si incrociano con le Zone Socio Sanitarie e le Società della Salute. E il
                                cittadino ne resta fuori.
                                Purtroppo anche il nostro ospedale rientra a pieno titolo tra quelli smantellati da una politica miope e
                                lontana dai territori.
                                L’unificazione delle due Società della Salute, quella della Val di Cornia e quella della Bassa Val di Cecina,
                                non ha avuto quale scopo principale quello di “mettere in rete” i due presidi ospedalieri per mantenerne i
                                servizi ma quello di tagliare un reparto in una delle due strutture per mantenerlo nell’altra, rendendo il
                                nostro territorio ancora più "fanalino di coda". E, ancora, a farne le spese è il cittadino che non trova
                                quelle risposte che prima aveva in tempi adeguati.
                                “Fare rete” si traduce sostanzialmente in un allontanamento del cittadino dal servizio sanitario, con tutti i
                                disagi che ne conseguono poiché, per noi, in linea generale, le fusioni, gli accentramenti e gli
                                accorpamenti servono solo a tagliare i costi, in linea con i criteri di conduzione tipici dell'impresa privata
                                di cui parlavamo prima. Prova ne è che non esiste intercambiabilità tra il personale sanitario dei presidi
                                del cosiddetto Ospedale Unico Valli Etrusche se non dietro progetto che comportano un ulteriore aggravio
                                di spesa.
                                Avere come unico obiettivo il taglio della spesa significa aver fallito su tutti i fronti.
                                Uno Stato moderno e democratico deve poter inserire la sanità in un contesto che contempli svariate
                                politiche di programmazione nazionale: industriali, agricole, ambientali, energetiche etc. affinché il
                                Servizio Sanitario Nazionale sia finanziato totalmente tramite la fiscalità generale.
                                Questo significherebbe poter guardare ai territori non solo come fonte di spesa ma come opportunità per
                                i cittadini che vi risiedono di vedere soddisfatti i loro diritti.
                                Per questo pensiamo che un’amministrazione comunale che abbia a cuore il proprio territorio e la salute
                                dei propri cittadini debba farsi portavoce presso gli enti competenti per tutelare il proprio presidio
                                ospedaliero e difendere il mantenimento dei servizi presenti.
                                Invece si apre sempre di più la porta al privato e al cosiddetto privato sociale. La sanità è diventato ormai
                                un settore del mercato, dunque un business, forse oggi il business per eccellenza e per rendersene conto
                                basta guardare quanti Centri privati polifunzionali hanno aperto e continuano ad aprire anche nel nostro
                                territorio.
                                Si è cominciato con la cessione di quote di visite ambulatoriali, poi con il mettere a gara quote di
                                prestazioni diagnostiche (risonanze magnetiche, etc.) e nel tempo si è arrivati a convenzioni anche con
                                strutture private di degenza per diminuire i tempi di attesa, addirittura delle sedute operatorie e di chirurgia
                                ambulatoriale. Queste convenzioni, come risulta dalla delibera dell’ASL TNO n. 1158 del 29/12/2021,
                                hanno visto un impegno reciproco per il periodo 2022-2024 e un impegno finanziario da parte
                                dell’Azienda USL Toscana Nord Ovest, per il solo 2022, di € 38.519.341,00
                                Per questo continueremo a impegnarci a promuovere una discussione sulla possibilità di revisione
                                dell'attuale organizzazione sanitaria della Toscana, affinché si risolvano le problematiche che la legge
                                del 2015 ha prodotto, figlia dello smantellamento della legge 833/1978 di istituzione del Servizio Sanitario
                                Nazionale, a cominciare dalla legge n.111 del 1991 con la quale si introduceva la figura ”manageriale”
                                dell’Amministratore Sanitario.
                                Il nostro obiettivo è riconsegnare a Piombino e ai piombinesi ciò di cui hanno bisogno: un ospedale che
                                funzioni, una forte integrazione ospedale/territorio che non siano solo parole scritte su un pezzo di carta,
                                una forte struttura di assistenza sociale che sappia governare le criticità di un territorio reso fragile da
                                una politica accartocciata su sé stessa e lontana dai cittadini.
                                Per questo lavoreremo per raggiungere questi obiettivi</p>,
                        },
                        {
                            key: '2',
                            label: 'OSPEDALE',
                            children: <p><strong>Pronto Soccorso</strong>
                                <br />
                                Il Pronto Soccorso rappresenta il punto cruciale di un presidio ospedaliero e per questo sarà necessario
                                garantire spazi idonei e funzionali e una strumentazione adeguata, come adeguato dovrà essere il
                                personale, in modo che possa svolgere al meglio le proprie funzioni: affrontare urgenze ed emergenze
                                nei tempi e modi previsti e/o provvedere in sicurezza al trasferimento a centri di livello superiore e questo
                                perché da anni, ormai, il Pronto soccorso non è più il luogo di smistamento dei pazienti verso i reparti,
                                oggi è il reparto della Medicina e Chirurgia d’Urgenza, proprio perché il Pronto Soccorso è la struttura
                                che per prima interviene e si fa carico delle necessità assistenziali del paziente fino all’invio al reparto di
                                destinazione.
                                Dalla fine del 2020, con la DGRT n. 1016/2020, è finanziato un progetto di ristrutturazione del Pronto
                                Soccorso per 5,7 milioni di euro: al momento di scrivere il nostro programma è ancora tutto fermo. CI
                                auguriamo che i lavori partano quanto prima per rendere alla città un reparto nuovo, con spazi nuovi,
                                personale formato, strumentazioni e metodologie all’avanguardia, per “liberare” una struttura
                                fondamentale per un presidio ospedaliero, come il Pronto soccorso, da funzioni che non le sono proprie.
                                Indispensabile sarà garantire il supporto di personale di assistenza e specializzato da altri reparti, come
                                il personale di Radiologia, in grado di gestire gli accessi in urgenza ed emergenza e, ove necessario,
                                trasferire il cittadino verso strutture più idonee alla patologia. Tutto questo, in una struttura che si occupa
                                di traumi, emergenza e urgenza è fondamentale e noi ci impegneremo affinché neanche un cittadino di
                                Piombino resti indietro. Per garantire questo è necessario vedere garantiti i trasporti in tempo utili e in
                                sicurezza.
                                A proposito dei trasporti sanitari, la nuova riorganizzazione aziendale del 118, che si fonda su un numero
                                maggiore di auto mediche e una maggiore presenza di infermieri a bordo, a scapito dei medici sia nelle
                                ambulanze che nelle automediche, nonché su un maggior apporto del volontariato, restituisce invece una
                                situazione che vede non solo una carenza di volontari e la difficoltà per le Associazioni a mantenere i
                                servizi ma una carenza di infermieri formati per l’emergenza/urgenza. Questa già oggi è una criticità che
                                costringe pazienti che hanno necessità di sottoporsi a diagnostiche anche molto invasive come la
                                coronarografia, per esempio, ad andare e tornare da soli con il rischio di non essere supportati, al
                                bisogno, da personale altamente specializzato.
                                Tutto questo non deve più accadere.
                                Noi ci impegneremo per garantire ai cittadini viaggi in ambulanza nel rispetto dei requisiti di sicurezza del
                                paziente, assistiti da personale formato e anche per impedire che i cittadini, soprattutto coloro che non
                                hanno mezzi o reti di prossimità e che necessitano di una autoambulanza per il ritorno a casa, pensiamo
                                alle persone anziane o con disabilità, restino, una volta dimessi, ad attendere il mezzo per ore e ore. Il
                                cittadino ha diritto a essere supportato anche nel ritorno a domicilio.
                                <br />
                                <strong>Emodinamica</strong><br />
                                La discussione sulla presenza di un reparto di Emodinamica nel nostro ospedale, in realtà, si esaurisce
                                molto velocemente: se c’è una sede dove sia logica la collocazione di una struttura di Emodinamica,
                                quella è presso l’ospedale di Villamarina. E non lo diciamo noi per una sorta di campanilismo, lo dice
                                l’Azienda USL Toscana Nord Ovest nel documento “Riorganizzazione dei servizi socio sanitari delle Valli
                                Etrusche”, redatto a marzo 2018 e sottoscritto dal Direttore Generale e dal Direttore Sanitario, e lo dicono
                                i dati, che ci consegnano una specificità dei bisogni di salute della nostra popolazione che non lascia
                                spazio a ulteriori previsioni. E’ chiaro che una Sala di Emodinamica dovrà rispettare i requisiti minimi
                                internazionali in tema di attrezzature e personale per garantire la presa in carico del paziente in totale
                                sicurezza.
                                Questo in un ospedale lontano dai centri maggiori di Pisa, Grosseto e Livorno, equidistante tra Livorno e
                                Grosseto che, soprattutto in estate o con particolari condizioni climatiche, potrebbe non garantire la presa
                                in carico specialistica del cittadino entro i 90 minuti, come previsto.
                                La collocazione della Sala di Emodinamica presso l‘ospedale di Piombino deve essere la risposta anche
                                per un bacino di utenza più ampio che coinvolga non solo l’Isola d’Elba e la Bassa Val di Cecina ma
                                anche l’area delle Colline Metallifere, per garantire l’ottimale numero di accessi.
                                <br />
                                <strong> SPECIALISTICHE OSPEDALIERE</strong>
                                <br /><strong>Medicina, Ortopedia, Chirurgia, Area Operatoria </strong><br />
                                Questi reparti ospedalieri, presenti e funzionanti, dovranno essere consolidati e resi più efficienti per
                                rispondere ai bisogni dei cittadini.
                                <br /><strong>SPDC</strong><br />
                                L’apertura del Reparto di SPDC <br /> <strong>Servizio Psichiatrico di Diagnosi e Cura </strong><br /> che è il servizio ospedaliero
                                dove vengono attuati trattamenti psichiatrici volontari ed obbligatori in condizioni di ricovero, è
                                fondamentale e anche questo, come il Pronto Soccorso, era previsto sin dalla fine del 2020. Anche per
                                questo, al momento della redazione del programma, non sono ancora cominciati i lavori. Ci impegneremo
                                affinché l’ospedale abbia una struttura importante per la salute dei cittadini.
                                <br /><strong> Oculistica, Otorinolaringoiatria, Neurologia</strong><br />
                                Secondo l’attuale normativa l’attivazione di questi reparti specialistici prevedono un bacino d’utenza
                                superiore al nostro.
                                Per noi resta fondamentale la revisione degli standard individuati dal Decreto Balduzzi e dai successivi
                                Accordi Stato-Regioni poiché non tengono conto delle peculiarità di un territorio e della sua
                                conformazione geografica.
                                Continueremo a chiedere la revisione del decreto Balduzzi ma, nel frattempo, attraverso una stretta
                                collaborazione tra questi centri ed il nostro territorio, dovrà essere garantito lo svolgimento nell’ospedale
                                di Villamarina di tutte quelle attività che non necessitino obbligatoriamente della struttura centrale.
                                Una possibilità è rappresentata dall’inserimento all’interno dei presidi territoriali delle specialistiche quali,
                                per esempio, diabetologia, reumatologia, cardiologia, pneumologia, otorinolaringoiatria, oculistica, non
                                solo per le prime visite, oggi garantite esclusivamente dal personale ospedaliero, ma anche per i controlli
                                successivi. Questo consentirà di sganciare quelle attività dalla gestione ospedaliera, lasciandola ad
                                appannaggio dei pazienti interni, ed evitare ai cittadini, nei casi di maggior congestione, lunghi e costosi
                                viaggi verso altre Zone ovvero di rivolgersi al privato per vedere affermato un diritto, quello alla salute,
                                garantito dalla Costituzione.
                                <br /><strong> Ostetricia e Ginecologia<br /></strong>
                                Per quanto riguarda l'Ostetricia e la Ginecologia, vista la mancanza dei requisiti per un Punto Nascita,
                                come previsto dal decreto Balduzzi, resta da vedere se una attività ridotta a gravidanze a termine non
                                complicate e interventi ginecologici minori, da eseguirsi in sicurezza, siano sufficienti ad attrarre le figure
                                medico-chirurgiche necessarie.
                                Purtroppo è evidente che le battaglie combattute davanti al portone di un ospedale invece che ai tavoli
                                istituzionali ove siedono i rappresentanti politici, non hanno avuto successo, condannando la città alla
                                perdita del Punto Nascita. Ed era anche evidente che senza la modifica del Decreto Balduzzi, sarebbero
                                state solo chiacchiere senza costrutto e sfilate a favore di fotografo.
                                <br /><strong> Anestesia e Rianimazione</strong><br />
                                Il nostro obiettivo non solo è il mantenimento dell’attuale reparto ma il suo rafforzamento, anche in
                                previsione dell’attivazione della Sala di Emodinamica
                                <br /><strong> Nefrologia e Dialisi</strong><br />
                                La situazione della Nefrologia e Dialisi di Piombino non è delle migliori nonostante questa specialistica
                                sia una delle più importanti. Infatti, a fronte del pensionamento, nel tempo, dei professionisti che da
                                sempre hanno operato nel reparto, non vi è stato il turn over necessario e il medico, al bisogno, se fuor
                                sede, effettua consulenze con la videochiamata. E’ assolutamente necessario ripristinare la dotazione
                                organica per garantire adeguati livelli di sicurezza ai pazienti.
                                <br /><strong> Endoscopia</strong><br />
                                Se c’era bisogno di una prova che l’Ospedale Unico non funziona e non funziona neanche la rete
                                ospedaliera, l’Endoscopia ne è la prova. Il recente pensionamento del responsabile lascia il servizio
                                sguarnito di una professionalità importante. E’ necessario quindi ripristinare l’organico con un
                                endoscopista.
                                <br /><strong> Ambulatorio Ematologico, Ambulatorio Endocrinologico, Trasfusionale
                                    Mantenimento dell’attuale livello degli ambulatori:</strong><br />
                                a) Ambulatorio Ematologico: viste le problematiche seguite dall’Ambulatorio, ci impegneremo per la
                                conferma dell’apertura settimanale, senza interruzioni, a garanzia della salute dei cittadini.<br />
                                b) Ambulatorio Endocrinologico: anche in questo caso, vista la diffusione delle patologie endocrine,
                                ci attiveremo per la conferma e l’eventuale integrazione dell’apertura dell’ambulatorio.<br />
                                c) Centro Trasfusionale: l’importante attività a supporto degli interventi chirurgici, quale quella della
                                donazione, dovrà trovare conferma nell’attività quotidiana.<br />
                                <br /><strong>Urologia</strong><br />
                                E’ assolutamente necessario mantenere l’attività urologica, sia ambulatoriale che operatoria, con
                                l’acquisizione di personale medico specializzato, in specie in previsione del prossimo pensionamento del
                                Responsabile.
                                <br /><strong> Radiologia</strong><br />
                                Una delle criticità più importanti è rappresentata dalla carenza dei medici radiologi e dai tecnici di
                                radiologia, branca, questa, a supporto di tutte le altre specialistiche e di tutti i pazienti interni ed esterni e
                                per questo, in modo o nell’altro, dovrebbe essere affrontata.
                                Una possibilità è rappresentata dal reclutamento di personale specializzato proveniente dall’estero, come
                                ampiamente illustrato più avanti.
                                Questo permetterebbe di rimpinguare i reparti e di garantire la diagnostica strumentale ai cittadini di
                                Piombino e della Val di Cornia in tempi accettabili senza costringerli a viaggiare per la Toscana per
                                l’esecuzione di una ecografia.
                                <br /><strong> Hospice</strong><br />
                                Sono finalmente iniziati i lavori per l’Hospice. L’obiettivo primario, soprattutto per chi opera nelle cure
                                palliative, è garantire alla persona che non possa o non voglia essere assistita a casa, un luogo che
                                possa assicurare dignità e rispetto, un luogo dove la qualità della vita che resta e la cura del malato e
                                della sua famiglia diventano l’obiettivo. L’hospice, che non rappresenta una struttura alternativa
                                all’ospedale o al domicilio, bensì complementare ed integrata con essi, era atteso dai pazienti e dai
                                familiari da quattro anni.
                                <br /><strong>Carenza medici e infermieri</strong><br />
                                Vogliamo aprire un capitolo sulla carenza di medici e infermieri, carenza che le strutture sanitarie
                                subiscono da anni, portandole al collasso, e su cui la politica – tutta – è stata colpevolmente immobile.
                                Oltre a intervenire sui problemi di sistema, dovremmo anche cercare di capire come affrontare nel breve
                                periodo questa situazione, per garantire ai cittadini un’assistenza adeguata.
                                Preso atto che la risposta alle carenze non può essere rappresentata dai costosissimi “medici gettonisti”
                                delle Cooperative e che i cittadini hanno il diritto di essere curati da medici e infermieri, non da medici
                                ed infermieri “italiani”, una possibilità potrebbe rappresentata dal reclutamento di medici e infermieri da
                                Paesi europei ed extra europei, per colmare i vuoti di organico.
                                A questa modalità sono ricorse, per esempio, la Lombardia, con l’assunzione di 12 infermieri dal
                                Sudamerica, in possesso del titolo professionale conseguito nel loro Paese che permette di esercitare la
                                professione in Italia, in via temporanea, fino al 31 dicembre 2025. Anche la Sardegna ha aperto alla
                                possibilità di reclutare medici e infermieri stranieri in possesso dei requisiti di legge, e la Sicilia ha visto
                                arrivare lo scorso anno i primi sei medici argentini, nello specifico un cardiologo, due pediatri, due medici
                                di medicina generale e di famiglia e una pneumologa, prevedendo di arruolarne almeno un centinaio.
                                Che dire, infine, della Calabria, che ha sottoscritto un accordo per l’arrivo di 270 medici cubani: 52 arrivati
                                il 28 dicembre 2022, in corsia da metà gennaio 2023; 120 arrivati il 4 agosto 2023, in corsia da metà
                                agosto; 98 arrivati il 31 gennaio 2024 che dopo aver seguito il corso di lingua italiana all’Unical, saranno
                                presto inseriti in corsia.
                                Non dobbiamo certo ricordare come il sistema sanitario cubano sia uno dei migliori al mondo, frutto di
                                una eccellente formazione universitaria.
                                Ci chiediamo come mai la Regione Toscana, che soffre di una carenza cronica di professionisti della
                                sanità e che a parole sembra vicina ai cittadini e intenzionata a risolvere i loro problemi, non abbia mai
                                pensato di stipulare accordi come quelli della Lombardia, della Sicilia o della Sardegna per garantire agli
                                ospedali il supporto degli specialisti che mancano.
                                Noi ci impegneremo e ci faremo parte attiva affinché la Regione Toscana prenda in esame la possibilità
                                di concludere accordi con Paesi come quelli menzionati per risolvere i problemi derivati dalla carenza dei
                                medici e per garantire a tutti i cittadini la possibilità di vedere soddisfatto il loro sacrosanto diritto alla
                                salute nella loro zona di residenza.
                                <br /><strong> PUNTO DI PRIMO SOCCORSO – PPS </strong><br />
                                Piombino è collocata in un contesto originario storico incredibile e dice la sua anche dal punto di vista del
                                lavoro, avendo sul suo territorio tre grossi insediamenti produttivi, uno di questi era il secondo più grande
                                in Italia e in Europa, e un passato che affonda le radici nella civiltà etrusca: Populonia era l’unica metropoli
                                industriale costruita sul mare per accogliere l’ematite elbana, trasformarla in ferro e commercializzarla in
                                tutto il Mediterraneo.
                                Ma, da qualche anno, Piombino si sta imponendo anche per la bellezza del territorio, dei suoi paesaggi,
                                del suo mare e negli ultimi anni è riuscita a trovare il suo posto a livello turistico riuscendo a coniugare la
                                sua storia, grazie al turismo archeologico, con la bellezza dei suoi paesaggi. Questa capacità ne hanno
                                fatto meta preferenziale, durante il periodo estivo e non di solo passaggio per l’Isola d’Elba.
                                Il grande afflusso di turisti, soprattutto in estate, tuttavia, richiede risorse anche dal punto di vista sanitario.
                                Il Pronto Soccorso, già in affanno per i noti problemi, potrebbe non riuscire a far fronte all'aumento degli
                                accessi in estate.
                                Ecco che è nata l’idea dell’attivazione di un Punto di Primo Soccorso – PPS – collocato in una posizione
                                strategica, che possa dare risposte agli aumentati bisogni di salute che si verificano durante il periodo
                                estivo.
                                Questa potrebbe essere la soluzione, sia alla necessità di filtrare gli accessi impropri al Pronto Soccorso,
                                sia ai bisogni dei piombinesi, che potrebbero trovare risposte senza accedere alla struttura ospedaliera,
                                sia per tutti coloro che scelgono Piombino come meta per le proprie vacanze e si trovano a dover risolvere
                                un problema sanitario di lieve entità.
                                <br /><strong>BENESSERE DEGLI ANIMALI D’AFFEZIONE <br /></strong>
                                “La civiltà di un popolo si misura dal modo in cui tratta gli animali” diceva Mahatma Gandhi.
                                Se dovessimo usare questo metro per valutare il senso di civiltà che hanno dimostrato le amministrazioni
                                precedenti, saremmo di fronte a una lunga strada da percorrere, non solo per assicurare rispetto e
                                benessere agli animali, ma per garantire il pieno rispetto delle leggi in vigore, che stabiliscono che “il
                                Comune, nella persona del Sindaco è da ritenersi il responsabile del benessere degli animali presenti sul
                                territorio comunale, rispetto ai quali vanta una posizione di garanzia, che comporta l'obbligo di far fronte
                                al loro mantenimento in caso di confisca” (Cassazione IV Penale, sentenza n. 148 del 2017)
                                L’Amministrazione comunale ha l’obbligo di prevenire il randagismo, con misure preventive ed
                                identificabili e ha l’obbligo di detenere gli animali, fin quando necessario, in condizioni dignitose. Noi
                                crediamo che quanto fatto fino a questo momento sia assolutamente insufficiente a garantire la sicurezza
                                e la salute degli animali.
                                Sappiamo benissimo che la crisi che attanaglia la nostra città, soprattutto dal punto di vista economico,
                                potrebbe far ritenere questo argomento lontano dai bisogni dei cittadini.
                                Ma non è così.
                                Negli ultimi decenni, l’importanza a livello familiare degli animali da “affezione”, così sono definiti gli
                                animali domestici, è cresciuta in maniera esponenziale nella nostra società, al punto tale da essere
                                sempre più integrati nel nucleo familiare e prendere parte attiva nella vita di tutti i giorni. Anzi, ci sono
                                situazioni in cui il cane o il gatto rappresenta l’unico altro essere vivente in un nucleo familiare, di
                                grandissima importanza, quindi, per la persona sola, spesso anziana.
                                <br /><strong>
                                    - La città che abbiamo in mente è una città che riconosce agli animali il diritto a essere protetti e salvati
                                    da situazioni di abuso, abbandono e violenza fisica o emotiva, mettendoli nelle condizioni di essere
                                    custoditi in sicurezza.
                                    <br /></strong>
                                <br /><strong>
                                    - La città che abbiamo in mente non promette aree per sgambatura enormi con centri faraonici, ma
                                    rende sicuri gli spazi che esistono, fornendo di chiusura i cancelli e collocando reti per impedire che dagli
                                    spazi tra una inferriata e l’altra, i cani possano fuggire, e ne mette a disposizione altre, da identificare in
                                    altre zone della città, per far sì che tutti i cittadini che hanno un cane possano usufruirne, anche quelli
                                    che abitano lontano dal centro.
                                    <br /></strong>
                                <br /><strong>
                                    - La città che abbiamo in mente stipula due convenzioni, mediante manifestazione d’interesse:
                                    <br /></strong>
                                <br /><strong>
                                    - la prima rivolta a studi medici veterinari per il servizio di pronto intervento per prestazioni veterinarie
                                    d’urgenza od in emergenza su animali d’affezione incidentati, traumatizzati e/o malati rinvenuti nel territorio comunale,
                                    garantendo assistenza di pronto soccorso veterinario e ricovero dell’animale presso
                                    l’ambulatorio veterinario del professionista per il tempo necessario al recupero dello stato di salute
                                    dell’animale.
                                    <br /></strong>
                                <br /><strong>
                                    - la seconda rivolta a studi medici veterinari per il servizio di sterilizzazione dei cani ma soprattutto dei
                                    gatti presenti sul territorio, poiché il servizio messo a disposizione dall’Asl è assolutamente insufficiente
                                    e anche gli interventi a supporto fatti dalle Associazioni di Piombino, non riescono a coprire le necessità
                                    di sterilizzazione dei gatti randagi che vivono nelle colonie.
                                    <br /></strong>
                                <br /><strong>
                                    - La città che abbiamo in mente previene possibili comportamenti incivili da parte di cittadini,
                                    collocando, a tappeto, dei dispenser per sacchetti e guanti e dei cestini per la raccolta delle deiezioni. La
                                    città ne è completamente sprovvista. È una forma di rispetto per la città e per gli altri cittadini.<br /></strong>
                                <br /><strong>- La città che abbiamo in mente istituisce un “asilo per cani” gestito in proprio con il supporto di
                                    volontari e giovani professionalmente preparati.
                                    Gli asili per cani funzionano proprio come gli asili per i bambini: i proprietari possono lasciare i propri cani
                                    per due tre quattro ore o anche tutto il giorno, ma a sera tornano nella loro casa. Questo servizio è
                                    importante per chi ha un momentaneo bisogno, magari per problemi familiari, e non sa a chi lasciare il
                                    cane.<br /></strong></p>,
                        },
                        {
                            key: '3',
                            label: 'SANITA’ TERRITORIALE',
                            children: <p>Al fine di provvedere ad una migliore tutela della sanità pubblica, non si può che partire da una
                                riorganizzazione della Medicina Territoriale, prima porta d'accesso del cittadino e primo recettore dei suoi
                                bisogni, tanto più che la carenza delle figure professionali, mediche e paramediche, ha acuito quelle
                                problematiche legate a tale ambito.
                                <br /><strong>
                                    - Casa della Salute/Casa di Comunità
                                    <br /></strong>
                                Punto essenziale della riorganizzazione diviene pertanto la costruzione della Casa della Salute il cui
                                protocollo di intesa per la realizzazione della Casa della Salute a Piombino portava la data del 10 maggio
                                2013. Sono passati undici anni e della Casa della Salute neanche l’ombra.
                                La Casa della Salute è una struttura dove sono riuniti Medici di Famiglia, Pediatri di Libera Scelta,
                                Continuità Assistenziale (ex Guardia Medica,) specialisti convenzionati come il Diabetologo, il
                                Reumatologo, il Cardiologo, lo Pneumologo, la Geriatra, l’Otorinolaringoiatra, l’Oculista e il Neurologo,
                                Assistenti Sociali, Infermieri e personale amministrativo per la gestione del CUP.
                                Garantendo alla Casa della Salute adeguato personale infermieristico, tecnico e di segreteria e
                                assicurando un’apertura 7 giorni su 7, meglio se 24 ore al giorno, con la possibilità di prenotare le
                                prestazioni necessarie ed eseguire, in tempi ristretti, esami strumentali, ecografie, doppler, E.C.G.,
                                spirometria, prelievi ematici, ma anche piccoli interventi chirurgici, i Medici di Famiglia, liberati da quelli
                                che non sono prettamente i loro compiti, potranno tornare a svolgere quel ruolo di fondamentale
                                importanza e di prima figura medica che di fatto permette al cittadino o di risolvere all’interno della Casa
                                della Salute o di essere inviato in altre strutture pubbliche, a seconda della complessità dei disturbi.
                                Un’adeguata organizzazione della Casa della Salute e la garanzia del personale e della strumentazione
                                necessaria, permetterà rapide consultazioni, una presa in carico migliore delle problematiche di ogni
                                singolo paziente e consentirà di ridurre in modo significativo il numero degli accessi impropri al Pronto
                                Soccorso.
                                Per questo la Casa della Salute non dovrà essere solo un cartello appeso ad un qualche edificio.
                                Aggiungiamo che la futura Casa della Salute di Piombino, quando vedrà la luce, dovrà essere riconvertita
                                direttamente in Casa di Comunità. Infatti, essendo la Casa di Comunità una evoluzione della Casa della
                                Salute, tutti i contenuti delle Case della Salute saranno ricompresi all’interno delle Case della Comunità̀
                                e, come previsto dal DM 77 del 2022: “tutte le strutture fisiche territoriali già̀ esistenti devono utilmente
                                rientrare nella progettazione della nuova geografia dei servizi e strutture territoriali e quindi delle CdC e
                                dei servizi correlati in rete” .
                                Va da sé che con gli standard già previsti nelle Case della Salute e quelli aggiuntivi previsti nelle Case di
                                Comunità, l’ipotesi della trasformazione della struttura in Via Veneto, sede del Distretto Città Vecchia,
                                quale Casa di Comunità, appare non più idonea, se mai lo è stata, ad accogliere la struttura.
                                Altra cosa da sottolineare, che ha un ruolo fondamentale nella Sanità Territoriale, è l’infermiere di
                                famiglia e di comunità. Questa figura dovrà trovare collocazione all’interno della costituenda Casa della
                                Salute/Casa di Comunità e dovrà essere rafforzata nell’organico in modo da garantire gli standard previsti
                                dal succitato DN 77 del 2022, a completamento delle attività già svolte dai servizi di cure domiciliari.
                                L’implementazione dell’équipe territoriale garantirà l’assistenza, nel nostro caso, 6 giorni su 7 per 12 h al
                                giorno.
                                <br /><strong>
                                    - Consultorio migranti
                                    <br /></strong>
                                Questa zona ha visto, in passato, l’attivazione del “Consultorio Migranti”, un progetto rivolto alle donne
                                straniere che prevedeva percorsi dedicati, ma non separati, all’interno delle attività consultoriali con
                                accoglienza e offerta consultoriale, all’interno delle attività del Consultorio, per le donne migranti. Era
                                garantito il supporto della mediazione culturale/linguistica con momenti informativi sui servizi offerti
                                tramite materiale informativo nelle varie lingue: nello specifico un opuscolo sul Consultorio e uno sulla
                                prevenzione dei tumori femminili.
                                Ci impegneremo per ripristinare questo servizio.
                                <br /><strong>
                                    - Consultorio Giovani
                                    <br /></strong>
                                Il Consultorio Giovani è un servizio rivolto ai ragazzi e alle ragazze dai 14 ai 24 anni. L’accesso è libero
                                e gratuito e i minori di 18 anni possono accedere al Consultorio Giovani anche non accompagnati dai
                                genitori.
                                La crisi lavorativa che ha investito la città negli anni, ha messo a dura prova anche la stabilità familiare e
                                i figli sono i primi che soffrono delle criticità che vive la famiglia.
                                Per questo è importante un supporto specialistico, per aiutarli a superare momenti di disagio.
                                Attualmente la psicologa è presente due volte a settimana presso il Consultorio Giovani.
                                Ci impegneremo affinché l’Azienda USL Toscana Nord Ovest integri l’attività consultoriale, aumentando
                                le ore a disposizione degli specialisti presenti, in particolare della psicologa.
                                <br /><strong>
                                    - Sostegno alla genitorialità
                                    <br /></strong>
                                Come già evidenziato, le criticità familiari, che a loro volta sono influenzate dalle criticità del territorio,
                                influiscono in maniera esponenziale sulla crescita armonica dei nostri ragazzi.
                                L’obiettivo è quello di sostenere le famiglie, accogliendo i genitori, offrendo loro un aiuto in momenti di
                                difficoltà, accompagnando le famiglie e i ragazzi nel loro percorso di crescita.
                                L’obiettivo che ci siamo posti è l’apertura di uno Sportello con uno specialista in interventi rivolti
                                alla famiglia, agli adolescenti e al supporto alla genitorialità, al quale possano rivolgersi quei genitori
                                di figli adolescenti che vivono insieme a loro i cambiamenti fisici, le nuove amicizie ma non riescono a
                                gestire l’adolescenza, con le sue inquietudini.
                                <br /><strong>
                                    - Geriatria
                                    <br /></strong>
                                Una menzione a parte merita la geriatria, vuoi per l'alto numero di pazienti anziani nel nostro territorio,
                                vuoi per l'attuale esigua presenza degli specialisti. E’ un settore molto spesso legato all'aspetto sociale
                                della salute, che soffre da anni di una cronica carenza di specialisti su un territorio ricco di soggetti fragili
                                o potenzialmente tali.
                                Deve essere garantita la presenza quotidiana della geriatra, anche mediante un doppio incarico.</p>,
                        }
                    ]}
                />
                <Divider className='divider' orientation="center">Fragilità</Divider>
                <Collapse
                    size="large"
                    items={[
                        {
                            key: '1',
                            label: 'Condominio solidale',
                            children: <p>Abbiamo assistito ad un veloce invecchiamento della popolazione, con costi e disagi sociali che gravano
                                su tutta la società.
                                La Zona Valli Etrusche, in particolare la Val di Cornia, com’è riportato nei dati resi disponibili dall’Agenzia
                                Regionale Sanità, ha indici di vecchiaia tra i più alti della Regione, esattamente siamo la quarta Zona,
                                dopo le Colline dell’Albegna, la Lunigiana, la Valle del Serchio e la Val Tiberina, ad avere l’indice di
                                vecchiaia più alto della Regione Toscana che, a sua volta, è tra le regioni con il valore più alto in Italia e
                                il trend è in costante aumento a causa di un effetto combinato: aumento dell’aspettativa di vita e calo
                                delle nascite.
                                L’indice di vecchiaia si ottiene rapportando l’ammontare della popolazione “anziana” – ultra65enni – a
                                quella giovanile – fino a 14anni – e moltiplicando per 100: il risultato ci dice quanti “vecchi” si contano
                                ogni 100 giovanissimi; questo indice cresce quando una popolazione invecchia, in quanto si ha
                                contemporaneamente una diminuzione del peso dei giovanissimi ed un aumento del peso degli anziani.
                                In un contesto come il nostro la pressione sui servizi socio-assistenziali della Zona, soprattutto in una
                                condizione di difficile tenuta del “sistema familiare”, è molto alto ed è quindi necessario cambiare
                                l’approccio ai servizi per dare risposte concrete ai cittadini.
                                Per risolvere i problemi legati alla solitudine e alla parziale autonomia delle persone anziane ma ancora
                                autosufficienti, un aiuto può arrivare dal “Condominio solidale”. Il Condominio solidale interviene in tutti
                                quei casi in cui l’anziano, singolo o in coppia, ancora autosufficiente ma con problemi abitativi e/o
                                relazionali, familiari e non, non riesce a raggiungere una soddisfacente autonomia. Il progetto che
                                abbiamo in mente ha l’obiettivo di rispondere non solo ai bisogni abitativi dei cittadini che vi risiedono,
                                ma diventare un nuovo modello di convivenza, replicabile in altri contesti, affrontando con un nuovo
                                approccio sia la risposta al disagio abitativo, sia quella dei rapporti di prossimità e vicinato e valorizzando
                                la promozione della solidarietà tra generazioni mediante il sostegno reciproco e la partecipazione ad
                                attività di socializzazione.</p>,
                        },
                        {
                            key: '2',
                            label: 'Servizio di affido familiare per anziani',
                            children: <p>Questo servizio è attivo in moltissimi comuni italiani. Si tratta di un’alternativa al ricovero degli anziani
                                nelle RSA, anziani soli o che non possono essere adeguatamente assistiti nell’ambito della rete familiare
                                di appartenenza.
                                E’ rivolto agli ultra 65enni che presentano determinate caratteristiche e requisiti e si realizza attraverso
                                tre tipologie di affido:
                                <br /><strong>
                                    1. Affido in convivenza: si realizza presso il domicilio dell'anziano o della famiglia affidataria
                                    in tutte quelle situazioni in cui l'anziano non possa o non voglia vivere da solo.
                                    <br /></strong>
                                <br /><strong>
                                    2. Affido di supporto: richiede un apporto consistente (diurno) nell'assistenza e cura della
                                    persona ancora in grado di vivere da sola ma non di compiere tutti gli atti della vita quotidiana.
                                    <br /></strong>
                                <br /><strong>
                                    3. Piccolo affido : viene disposto per far fronte a esigenze temporanee di carattere socio assistenziale
                                    in favore di anziani in difficoltà ma capaci di autogestirsi negli atti quotidiani della vita.
                                    E’ previsto un assegno di affido, a titolo di riconoscimento dell’importante ruolo sociale svolto, diverso
                                    a seconda del tipo di affido. La scelta dell’affidatario sarà a cura del Servizio Sociale
                                    Confidiamo che l’attivazione di questo servizio possa avere un impatto importante sugli anziani in
                                    difficoltà o privi di assistenza familiare che potranno essere mantenute in un contesto relazionale
                                    familiare per consentire loro di rimanere il più̀ a lungo possibile al proprio domicilio, evitando forme di
                                    sradicamento e di istituzionalizzazione.
                                    <br /></strong>
                            </p>,
                        },
                        {
                            key: '3',
                            label: 'Anziani fragili e non autosufficienti',
                            children: <p>Per l’anziano con grave non autosufficienza vi è la possibilità, attraverso la collocazione in una
                                graduatoria, di essere inserito in una RSA.
                                Purtroppo la Regione Toscana con la delibera n. 995 del 2016 ha “aperto” il sistema di accesso nelle
                                RSA incoraggiando la libera scelta e la concorrenza tra strutture. Infatti, fino al 2016, gli anziani potevano
                                essere inseriti nelle RSA della propria zona di residenza, successivamente, è stata data la possibilità per
                                le famiglie di scegliere liberamente la struttura socio-sanitaria preferita, anche lontana centinaia di
                                chilometri dalla propria residenza.
                                Per gli anziani non autosufficienti che non hanno accesso alla RSA, ci batteremo per il potenziamento
                                dei servizi domiciliari, sia infermieristici che di comunità, prevedendo anche interventi di riabilitazione a
                                domicilio, laddove ce ne sia bisogno e vi sia impossibilità dell’anziano a recarsi nella struttura riabilitativa.
                                Contemporaneamente, per scongiurare il ricorso all’istituzionalizzazione della persona anziana, laddove
                                le condizioni lo permettano, è necessario che la Regione Toscana e la Società della Salute intervengano
                                maggiormente con aiuti economici alle famiglie poiché quelli attuali non sono assolutamente sufficienti a
                                coprire l’assistenza alla persona non autosufficiente.
                                Riteniamo inoltre che a fronte delle criticità che il tessuto sociale di Piombino esprime, debba essere
                                intensificata la presenza di assistenti sociali dedicati agli anziani e alle famiglie in difficoltà per garantire
                                la puntuale gestione dei casi.</p>,
                        },
                        {
                            key: '4',
                            label: 'Gli Orti Sociali',
                            children: <p>Tante sono le angolazioni per trattare un argomento di primaria Importanza come il terzo settore che
                                "cura" il Sociale e non solo.
                                Vogliamo qui toccare un argomento che ci viene dalla nostra campagna d’ascolto e fortemente
                                caldeggiato da buona parte della società civile, gli Orti Sociali.
                                Quali funzioni rivestono?<br /><strong>
                                    - Un’integrazione al reddito, specie a pensioni da lavoro o di vecchiaia costantemente erose nel loro
                                    potere d acquisto.<br /></strong>
                                <br /><strong>
                                    - Produzione di ortaggi dagli appezzamenti, equamente suddivisi, ma anche per destinarne con
                                    continuità una quota parte alle mense ove si recano ogni giorno le persone indigenti, totali o parziali.
                                    <br /></strong>
                                <br /><strong>
                                    - Creazione "socialità tra persone" che, restando in contatto, migliorano il loro stato psicofisico ma anche,
                                    indirettamente, la qualità della stessa società civile con il loro bagaglio di esperienza e saggezza. La
                                    memoria storica di queste persone anziane, inoltre, è una "terapia" di cui, in questi tempi bui, non
                                    possiamo certo farne a meno.
                                    <br /></strong>
                                <br /><strong>
                                    - Funzione di recupero di aree degradate e dimenticate da anni ove la natura è ritornata ad
                                    impossessarsene creando un serio pericolo di incendi dolosi o accidentali.
                                    <br /></strong>
                                <br /><strong>
                                    - Funzione di vigilanza del territorio affinché non diventi zona franca per attività illecite e malavitose
                                    secondo il principio della Fisica per cui un "vuoto" non resta mai tale ma viene velocemente riempito e
                                    non sempre in maniera positiva.
                                    <br /></strong>
                                Cosa serve:<br />
                                Da Consigli Comunali in passate Consiliature, è emerso che serve:<br />
                                • produrre un regolamento normativo<br />
                                • un bando di gara<br />
                                • una mappatura con una ripartizione dei lotti equamente distribuiti<br />
                                • uno studio di fattibilità (disponibilità acqua sorgiva).<br />
                                Tutta questa tematica può essere affrontata senza particolari difficoltà.
                                La zona individuata è in Località Tolla lato est di via Mina ove la vegetazione spontanea è talmente
                                sviluppata da costituire pericolo per manufatti e addirittura per la stazione elettrica Enel. Zona questa
                                ove la risorsa acqua sorgiva certo non difetta.
                                Questa è la nostra risposta alla richiesta di quei cittadini, risposta che può essere integrata per altre aree
                                urbane e suburbane se altri ne avvertono il bisogno.</p>,
                        },
                        {
                            key: '5',
                            label: 'Comunità terapeutiche per adolescenti',
                            children: <p>Negli ultimi anni abbiamo assistito ad un preoccupante aumento del disagio psicologico e dei disturbi
                                psicopatologici nei bambini e negli adolescenti e la Val di Cornia ne è stata un testimone importante;
                                questi disturbi si sono notevolmente aggravati dopo la recente pandemia.
                                Sono oltre 2 milioni i minorenni che soffrono di disturbi psichici e le principali patologie emergono al di
                                sotto dei 14 anni: questo grido di allarme non può essere ignorato da un’Amministrazione che tiene alla
                                sua comunità perché un bambino non curato oggi, sarà sicuramente un adulto con grossi problemi
                                domani, in carico alla società e non ci saranno eserciti che potranno risolvere le situazioni.
                                Il progressivo depauperamento delle risorse specialistiche a disposizione della Val di Cornia deve essere
                                superato con la disponibilità costante di specialisti neuropsichiatri infantili e di tutte le altre professionalità
                                necessarie, in modo da dare risposte concrete alle famiglie.
                                Laddove questo non sia sufficiente, è opportuno pensare anche a una comunità terapeutica, di recupero
                                riabilitativo e/o psichiatrico, dove i problemi dei bambini e dei ragazzi possano essere affrontati in zona,
                                senza costringere al loro allontanamento e all’inserimento in strutture ad alto costo per la comunità.</p>,
                        },
                        {
                            key: '6',
                            label: 'Disabilità',
                            children: <p>Altro aspetto importante per quanto riguarda l’assistenza territoriale è rappresentato dalla disabilità.
                                Una delle sfide più importanti per un’amministrazione riguarda sicuramente la partecipazione alla vita
                                sociale delle persone con disabilità ed è tanto più difficile quanto più è grave la condizione di disabilità e,
                                su questo tema, il contesto ambientale e culturale della nostra zona, che si è andato via via impoverendo,
                                gioca un ruolo determinante.
                                Per quanto riguarda il supporto alle famiglie, dichiariamo fin da ora di voler continuare con gli interventi
                                di inserimento nella vita sociale a partire da quella scolastica e lavorativa.
                                Ci sarà maggiore attenzione di quanto non sia stata data fino a oggi al rispetto delle persone con
                                disabilità, con maggiori contributi per l’abbattimento delle barriere architettoniche e contributi per la
                                mobilità.
                                Per quanto riguarda, invece, interventi assistenziali di maggiore intensità, facciamo nostra la desiderata
                                dell’Azienda USL Toscana Nord Ovest, che in un atto deliberativo auspicava
                                la riconversione o la creazione di una struttura che potesse accogliere in modo appropriato persone con
                                disabilità, come è stata realizzata in altre Zone.
                                Ci impegneremo, quindi, alla realizzazione di una struttura a carattere comunitario per persone con
                                disturbi psico-sociali, dove vi potranno essere inserite anche persone con disabilità che non necessitino
                                di una intensità assistenziale da parte della Salute Mentale.</p>,
                        },
                        {
                            key: '7',
                            label: 'Disturbi cognitivi',
                            children: <p>Prendiamo atto che, oggi, le famiglie dei ragazzi dagli 11 fino ai 17 anni con importanti disabilità cognitive,
                                non fruiscono più del controllo terapeutico da parte dell’Azienda ASL Toscana Nord Ovest e non c’è nel
                                nostro territorio un Centro Diurno che possa accogliere i ragazzi e aiutarli a sviluppare piccole abilità
                                motorie, cognitive e di socializzazione pensando anche ad un futuro inserimento nell'ambito del lavoro
                                protetto.
                                Nel ribadire l’impegno affinché l’Azienda USL Toscana Nord Ovest estenda i controlli terapeutici anche
                                nella fascia di età 11-17 anni, ci impegneremo affinché possa realizzato un Centro Diurno di
                                Neuropsichiatria dell’infanzia e adolescenza, che possa accogliere i bambini e ragazzi dagli 8 ai 17 anni
                                con l’intento di seguirli nell’ambito socio-educativo e garantire loro attività, sviluppate da professionisti
                                del settore, finalizzate al recupero delle loro potenzialità e di preparazione al Dopo di Noi.
                                Questo darebbe sollievo anche alle famiglie, non solo nel quotidiano lavoro di assistenza genitoriale, ma,
                                pensando al futuro del loro bambino, nel saperlo inserito in un percorso di autonomia e socializzazione,
                                anche quando sarà privato dell'aiuto della famiglia.</p>,
                        },
                        {
                            key: '8',
                            label: 'Disagio giovanile',
                            children: <p>Gli anni della pandemia sono stati veramente duri per i giovani, soprattutto per coloro che già da prima
                                lamentavano fragilità personali e familiari. Molti infatti si sono chiusi in loro stessi e sono aumentate le
                                difficoltà di relazione tra di loro e con gli adulti.
                                Molti hanno interrotto definitivamente il loro percorso di studi o le attività extrascolastiche svolte.
                                Per questo riteniamo debba essere posta una forte attenzione alle problematiche di disagio giovanile
                                adolescenziale ed anche infantile, che nel nostro territorio sono accentuate, anche della crisi sociale e
                                dell’aumentare degli stati di povertà.
                                E’ necessario implementare i servizi consultoriali, attraverso figure professionali adeguate per qualifica e
                                per numero per un lavoro continuo sul territorio e nelle scuole per garantire una costante educazione e
                                promozione della salute.
                                Per una efficace prevenzione, pensiamo che debbano essere rafforzati e valorizzati i servizi per l’infanzia,
                                in termini di logopedia e psicomotricità, aspetti fondamentali per una corretta crescita del bambino,
                                consapevoli che costringere le famiglie a rivolgersi a professionisti privati, per mancanza del servizio,
                                comporta un impegno non solo economico importante. Le terapie sono lunghe e costose e spesso i
                                professionisti non sono reperibili in città.</p>,
                        },
                        {
                            key: '9',
                            label: 'L’assistenza sociale unitaria e solidale come forza della Val di Cornia',
                            children: <p>Noi pensiamo che debba essere consolidata la gestione condivisa, unificata, integrata e solidale delle
                                funzioni sociali e di alta integrazione che dagli anni '70 i Comuni hanno delegato alla Asl, allora USL, in
                                nome di una solidarietà interistituzionale che in questo campo ha ottenuto buoni risultati. Data la
                                situazione di crisi di questo territorio, l’incertezza sul futuro della fabbrica e il paventato disastro sociale,
                                riteniamo che il servizio di assistenza sociale debba essere incrementato attraverso una maggiore
                                presenza di professionalità preparate ad affrontare situazioni di estremo disagio delle famiglie del
                                comprensorio, disagio che comprende problematiche economiche legate alla scarsa offerta di lavoro,
                                alla sotto occupazione, al rischio dell’aumento di lavoro nero. A ciò si collega una forte problematica delle
                                politiche della casa che deve essere uno dei punti prioritari dell’amministrazione.
                            </p>,
                        },
                        {
                            key: '10',
                            label: ' Immigrazione e accoglienza',
                            children: <p>Per quanto riguarda la questione immigrazione, è fondamentale partire da una premessa, non stiamo
                                parlando di numeri, ma di persone, di esseri umani. E’ solo partendo da questa semplice premessa, che
                                si può affrontare il problema nella giusta prospettiva. Un problema che resta di straordinaria complessità,
                                che non si può risolvere certo con infantili gare a braccio di ferro tra paesi europei fatte molto spesso
                                sulla pelle di persone strappate da morte certa nel Mediterraneo, ma affermare che è prioritario salvare
                                la vita di queste persone e affermare un principio di ridistribuzione in tutti i paesi dell’UE.
                                Per noi invece era ed è tutt’ora, un esempio straordinario di integrazione e di civile convivenza, il “Modello
                                Riace”, riconosciuto e premiato a livello mondiale, quanto osteggiato dallo Stato.
                                E’ inoltre da sciogliere al più presto, il nodo del diritto alla cittadinanza italiana per i figli di cittadini stranieri,
                                nati nel nostro paese (Ius soli).
                                A livello locale per noi è importante, favorire la costituzione su base democratica di associazioni/comunità
                                dei cittadini migranti (non solo quelli dotati della cittadinanza italiana) presenti (non solo residenti) a
                                Piombino.
                                Ed a partire da qui, si potrà riesaminare la questione della ri-costituzione della Consulta delle cittadine
                                dei cittadini immigrati, nonché della loro rappresentanza consultiva in Consiglio comunale, attraverso uno
                                o più consiglieri aggiunti.
                                In Toscana tali esperienze sembrano al momento generalmente in crisi.</p>,
                        },
                        {
                            key: '11',
                            label: 'Iniziative per l’uguaglianza di genere',
                            children: <p>E’ ovvio che l’uguaglianza di genere non può essere perseguita in un solo Comune ma è anche vero che
                                il Comune non può dimenticarsene, tanto più a Piombino dove per fattori storici la disuguaglianza, ad
                                esempio per quel che riguarda il lavoro, è così accentuata.
                                Per questo, nell’ambito di una governo della città che sempre ed in ogni decisione deve tener presente il
                                tema dell’uguaglianza di genere in tutti gli aspetti della vita sociale, economica e politica.
                                Per fare questo occorre rivitalizzare la Commissione Pari opportunità, strumento del Consiglio Comunale,
                                attribuendole fondi autonomi da spendere e modificando il regolamento in modo da garantire una effettiva
                                e plurale partecipazione.</p>,
                        }
                    ]}
                />
                <Divider className='divider' orientation="center">Politiche abitative</Divider>
                <Collapse
                    size="large"
                    items={[
                        {
                            key: '1',
                            label: 'Politiche abitative',
                            children: <p>Conseguenza del sempre più grave disagio economico, è certamente l'emergenza abitativa, sia per i
                                proprietari che per gli affittuari di immobili.
                                Sempre più numerosi sono gli sfratti per le famiglie che si vengono a trovare nell'impossibilità di pagare
                                il canone di affitto o la rata del mutuo, con conseguente perdita dell'alloggio e la difficolta, se non
                                l'impossibilità, di trovare un'alternativa.
                                In questo contesto l'Amministrazione deve giocare un ruolo fondamentale attraverso la concessione di
                                contributi finalizzati a sostenere la famiglia per tutto il periodo necessario al superamento del disagio,
                                nonché a rassicurare i proprietari locatori.
                                Negli ultimi due anni si è aggiunto un nuovo ostacolo al reperimento di alloggi sul mercato delle locazioni,
                                a causa della diffusione della pratica dei cosiddetti "affitti brevi", proprio perché maggiormente
                                remunerativi e senza rischio per il locatore.
                                Mentre si allungano le graduatorie dei bandi ERP, molto del patrimonio pubblico risulta indisponibile,
                                vista l'impossibilità, da parte del gestore CasaLp, di effettuare le manutenzioni e gli adeguamenti alle
                                normative.
                                In questo contesto si rende sempre più necessario attuare azioni che possano garantire a tutti il diritto
                                ad avere una casa.
                                <br />Si rende pertanto necessario:<br />
                                - attuare politiche ed interventi che incentivino i proprietari di case sfitte alla locazione delle stesse, anche
                                attraverso la stipula di accordi mediante i quali l'Amministrazione Comunale si renda garante del
                                sostegno al pagamento di parte del canone di affitto, anche per periodi medio lunghi.<br />
                                - Sollecitare CasaLp al maggior recupero possibile del patrimonio ERP inutilizzato<br />
                                - Individuare strutture di prima accoglienza finalizzate ad accogliere temporaneamente le famiglie e/o
                                persone che si trovino improvvisamente senza un alloggio, per morosità incolpevole.<br />
                                - Prevedere, per le fasce di anziani e/o fragili una forma di condominio condiviso che garantisca
                                l'assistenza minima necessaria<br />
                            </p>,
                        },
                    ]}
                />
                <Divider className='divider' orientation="center">AMBIENTE</Divider>
                <Collapse
                    size="large"
                    items={[
                        {
                            key: '1',
                            label: 'Bonifiche',
                            children: <p>Ormai da molti anni il territorio del Comune di Piombino è sottoposto ad un enorme stravolgimento degli
                                equilibri ambientali, dovute alle attività umane presenti e soprattutto passate. Molte aree sono state
                                dichiarate SIN (Sito di Interesse Nazionale) per la particolare gravità e specificità della compromissione.
                                L’obiettivo prioritario risulta dunque per noi essere la bonifica del territorio all’interno dell’area industriale,
                                ormai da troppo tempo annunciato e mai, purtroppo, realizzato. I mille ettari che al momento sono in gran
                                parte inutilizzati o dismessi, necessitano di interventi immediati e non ulteriormente procrastinabili, e per
                                l'esecuzione di tali interventi ci sembra necessario prevedere un massiccio intervento dello Stato,
                                interventi che non escluderebbero successive verifiche di responsabilità e richiesta di risarcimento da
                                parte dei soggetti privati responsabili dell'inquinamento pregresso. In tale ottica ci appare necessario
                                risanare anche le aree oggetto di vecchie discariche prodotte da scarti di produzioni siderurgiche,
                                verificare la presenza nelle stesse di materiali pericolosi o nocivi, e mettere in sicurezza o rimuovere tutti
                                gli impianti dismessi rimasti.
                                Piombino è uno dei 42 SIN - Siti di Interesse Nazionale.
                                I SIN sono delle aree estese, gravemente contaminate e classificate come “pericolose” dallo Stato
                                italiano, aree che necessiterebbero di interventi di bonifica del suolo, del sottosuolo e/o delle acque
                                superficiali e sotterranee, per evitare danni ambientali e sanitari.
                                Niente di questo è stato fatto finora, nonostante le molte promesse elargite in campagna elettore e non,
                                e visto il grave ritardo nell’effettuazione delle bonifiche, ne consegue che in molte aree, compresa la
                                nostra, restano attive pressioni ambientali in grado di produrre danni sanitari.
                                I dati disponibili ci rimandano quadri sconfortanti che devono essere letti come una indicazione forte a
                                intervenire.
                                La diminuzione del livello d'inquinamento, la salvaguardia della salute e del benessere psicofisico dei
                                cittadini risulta per noi un fine prioritario nella nostra visione, ed il filo conduttore di ogni azione politica e
                                di progettazione a lungo termine.
                                Attuare le bonifiche a nostro avviso non significa precludere in tali parti di territorio la presenza di future
                                attività produttive, di tipo industriale o manifatturiero che risultino ecosostenibili ed ecocompatibili, anzi
                                tutto ciò significherebbe favorire l'avvio e la persistenza delle attività stesse.
                                La bonifica delle aree compromesse non significa escludere la presenza futura di attività produttive di
                                tipo industriale o manifatturiero con una visione ecocompatibile ed ecosostenibile.
                                Questo potrà rendere giustizia a un territorio, mortificato da anni di politiche distratte e distanti, con
                                l’obiettivo di renderlo nuovamente produttivo per la collettività.
                                Il nostro sguardo sarà rivolto a quelle attività economiche che sappiano coniugare i loro interessi
                                economici con la tutela dell’ambiente.
                                Questi due obiettivi non devono essere interpretati come in contraddizione tra loro ma come
                                complementari l’uno con l’altro.
                            </p>,
                        },
                        {
                            key: '2',
                            label: 'Inquinamento – energie rinnovabili',
                            children: <p>La netta diminuzione del livello d'inquinamento nella città e sul territorio, la salvaguardia della salute e
                                del benessere psicofisico dei cittadini risulta per noi un fine prioritario nella nostra visione, ed il filo
                                conduttore di ogni azione politica e di progettazione a lungo termine.
                                Strutture come il rigassificatore perpetuano la tendenza a ricavare energia da fonti fossili, ed il processo
                                stesso di rigassificazione è antiquato, antieconomico, antiecologico e irrazionale. Tali strutture non
                                devono essere più essere utilizzate in quanto esistono sistemi di approvvigionamento più funzionali.
                                L’obiettivo finale, il fil rouge di ogni nostra azione politica, resta la diminuzione del livello di inquinamento.
                                Su questo campo si gioca il futuro, la salvaguardia della salute dei cittadini piombinesi e il loro benessere
                                psicofisico.
                                Ridurre le emissioni inquinanti significa anche sbarazzarci definitivamente di strutture come il
                                rigassificatore che, in modo antieconomico e antiecologico, continua lo sfruttamento di fonti fossili che
                                sono fonti non rinnovabili.
                                Infatti, il rapporto tra riserve e produzione di “cherogene”, una miscela di composti chimici organici, ci
                                dice che la stima della vita residua delle riserve è di circa 50 anni (anno più, anno meno, dati BP
                                Statistical Review of World Energy June 2011). Questo perché alcuni tipi di cherogene, riscaldate alla
                                giusta temperatura nella crosta terrestre “rompe” la sua struttura e dà origine a petrolio o gas, che sono
                                combustibili fossili (finestra del petrolio ca. 60–160 °C, finestra del gas ca. 150–200 °C) e che vengono
                                estratti a ritmi insostenibili.
                                L’attuale sistema energetico mondiale si regge sull’uso dei combustibili fossili: petrolio, carbone e gas
                                naturale pesano per oltre l’80%.
                                Si tratta di risorse limitate: il processo di sedimentazione dei composti organici, sviluppatosi in milioni di
                                anni di sostanza organica seppellita sottoterra nel corso delle ere geologiche,
                                dalla cui trasformazione in cherogene deriva il petrolio e/o il gas, è un processo che non si rinnova e
                                quindi, finite le “scorte” provenienti dal paleozoico, saremo spacciati.
                                Non ci resta molto tempo ormai, perché queste risorse molto inquinanti, che la Terra ha custodito per
                                centinaia di milioni di anni e che l’uomo nell’ultimo secolo ha estratto e utilizzato a ritmi assolutamente
                                insostenibili, stanno finendo. Ma non è solo per questo che è necessario terminare le estrazioni ma
                                perché queste producono quantità di CO2, cioè di anidride carbonica, che tra un po’ non potremo più
                                sopportare.
                                E' fondamentale ridurre le emissioni di CO2 (anidride carbonica) per ridurre la concentrazione del gas
                                nell’atmosfera, causa dell'innalzamento della temperatura terrestre.
                                Occorre una riduzione immediata dei consumi di combustibili fossili a favore di un sistema sostenibile per
                                il nostro pianeta.
                            </p>,
                        },
                        {
                            key: '3',
                            label: 'Litorale',
                            children: <p>Per quanto riguarda il Litorale, la nostra visione è stata già ben descritta in un altro capitolo e lì ribadita
                                l importanza di una gestione del bene assolutamente Ppubblica in funzione della sua salvaguardia
                                ambientale, culturale, solidaristica tra i suoi fruitori.
                                In queste righe vogliamo richiamare, invece, l’attenzione su alcuni aspetti tecnici che, secondo noi,
                                rivestono carattere di minaccia per il nostro mare.
                            </p>,
                        },
                        {
                            key: '4',
                            label: 'La Posidonia',
                            children: <p>Sappiamo tutti della funzione di nursery per i suoi "abitanti", per la funzione di "freno" ai marosi e di
                                drenaggio dei sedimenti trasportati.
                                La Posidonia è sotto attacco da inquinamento chimico (rigassificatore) e un altro attacco è portato dall'
                                ormeggio selvaggio delle tantissime, troppe imbarcazioni che ne distruggono praterie fino alla loro
                                eradicazione.
                                Riteniamo virtuoso il progetto in Comuni limitrofi, ove il mantenimento dell’ambiente marino (e dei suoi
                                abitanti), riveste carattere prioritario.
                                Ci riferiamo al progetto per cui nelle acque della provincia di Grosseto sono state immesse 1000 (mille)
                                anfore zavorrate affinché il "polpo", sotto attacco per la pesca più o meno legale, trovi rifugio e
                                possa riprodursi.
                            </p>,
                        },
                        {
                            key: '5',
                            label: 'Arenili',
                            children: <p>Esperti in materia, ci dicono che lo strato sabbioso del Litorale marino è di una durezza variabile e
                                stabilizzata da lungo tempo ai vari spessori.
                                L’azione selvaggia dei mezzi meccanici per la pulizia "levigata" della spiaggia con pesanti mezzi
                                meccanici distrugge questa compattezza.
                                I marosi successivi avranno facilità di asportazione della sabbia disegnando nuovi profili litoranei non
                                proprio ottimali.
                                I ripascimenti successivi saranno in conseguenza costanti e molto onerosi.
                                La conservazione rispettosa dell’ambiente è un altro dei volani economici, ad esempio, per il turismo
                                praticato con il Diving.
                                Le nostre aree individuate sulle quali intervenire con la rigenerazione e/o sviluppo turistico sono:<br />
                                - Golfo di Piombino/Follonica<br />
                                - Da Punta Semaforo a Punta diga foranea (ove la pesca è già interdetta)<br />
                                - Golfo di Salivoli<br />
                                - Golfo di Calamoresca<br />
                                - Golfo di Baratti.<br />
                                Piombino soffre della mancanza di una Scuola del Mare riconosciuta ove trovino allocazione mestieri
                                come questi :<br />
                                - Biologia marina collegata ad un acquario importante con tanto di museo annesso<br />
                                - Motoristica navale<br />
                                - Specializzazione per la itticoltura, trattamento e lavorazione del pescato allevato e non.<br />
                                - Specializzazione nella gestione tecnologica di sorveglianza satellitare e attrezzature di bordo per la
                                cantieristica già presente nel territorio.<br />
                            </p>,
                        },
                        {
                            key: '6',
                            label: 'Attività Produttive sostenibili',
                            children: <p>Lavoro e ambiente devono coesistere, e non pensiamo che lo sviluppo e l’incentivazione del primo vada
                                ad inficiare o compromettere la salvaguardia del secondo, ma anzi questi si rafforzino se implementati
                                insieme, avvantaggiando il bene della comunità e non la mera ricerca del profitto.
                                La bonifica delle aree compromesse non significa escludere la presenza futura di attività produttive di
                                tipo industriale o manifatturiero con una visione ecocompatibile ed ecosostenibile.
                                Questo potrà rendere giustizia a un territorio, mortificato da anni di politiche distratte e distanti, con
                                l’obiettivo di renderlo nuovamente produttivo per la collettività.
                                Il nostro sguardo sarà rivolto a quelle attività economiche che sappiano coniugare i loro interessi
                                economici con la tutela dell’ambiente.
                                Questi due obiettivi non devono essere interpretati come in contraddizione tra loro ma come
                                complementari l’uno con l’altro.
                            </p>,
                        },
                        {
                            key: '7',
                            label: ' Incentivi per la diffusione del microfotovoltaico',
                            children: <p>Nella nostra interpretazione complessive della tematica ambientale, non possiamo sottovalutare la
                                gestione della produzione e della distribuzione energetica. Occorre mettere in atto, anche attraverso
                                incentivi, l’installazione dei pannelli solari per le abitazioni, favorendo dunque la diffusione del
                                microfotovoltaico a discapito della diffusione invasiva del fotovoltaico stesso su terreno agricolo utile.
                                Oltre all’aumento del costo dell’energia, la diminuzione della disponibilità della risorsa idrica e l’enorme
                                dispersione della risorsa stessa, e le criticità legate allo spreco metteranno a rischio lo sviluppo
                                socioeconomico agricolo. Occorre adottare, dove possibile, soluzioni sostenibili che vadano a replicare i
                                processi naturali. In questo senso occorre procedere ad una pianificazione congiunta delle risorse, in
                                quanto è chiaro come la gestione unidirezionale di ciascuna di esse si riverberi sulle altre. Si ritiene utile
                                dunque vincolare le nuove costruzioni alla predisposizione di pannelli ed a prevedere soluzioni atte al
                                massimo risparmio energetico.
                                La nostra visione della tematica ambientale non sottovaluta la gestione della produzione e della
                                distribuzione energetica. Occorre mettere in atto, anche attraverso incentivi, l’installazione dei pannelli
                                solari per le abitazioni, favorendo la diffusione del microfotovoltaico a discapito della diffusione invasiva
                                del fotovoltaico stesso su terreno agricolo utile.
                                Per lo stesso motivo ci siamo espressi contro i progetti presentati, che prevedevano l’installazione di
                                poche pale eoliche a spot, su un territorio come quello di Baratti in quanto era un progetto fine a sé stesso
                                o a poche persone che non serviva alla comunità e che impattava su un territorio, come quello di Baratti,
                                che invece deve essere tutelato.
                                Serve un Piano Regionale Energetico serio dove valutare quanta energia viene consumata, prevedendo
                                un percorso di transizione che porti all’indipendenza energetica della Regione e che veda l’attivazione di
                                alcuni progetti seri, con i territori riuniti al solito tavolo per valutare “chi” mette “cosa” al servizio del Piano.
                                Parallelamente è necessario favorire le ristrutturazioni ed i recuperi di vecchi edifici, dove sia possibile,
                                per adeguarli ad una miglior risparmio energetico. In alternativa, l’ente pubblico deve porsi come obiettivo
                                il perseguimento dell’autoproduzione di elettricità da fonti rinnovabili con l’aiuto di comunità energetiche
                                sviluppata su diverse superfici di proprietà del Comune di Piombino. Gli incentivi provenienti da tali
                                comunità potranno essere ridistribuiti ai suoi membri ed alle categorie meno abbienti.
                                Riteniamo inoltre utili anche altre forme di produzione di energia da fonti rinnovabili, per quanto riguarda
                                l'energia eolica pensiamo che essa debba essere progettata e realizzata in aree di scarso pregio
                                paesaggistico, come ad esempio ex aree industriali dismesse, in ogni caso pensiamo che ogni
                                investimento di enti pubblici o privati che ricavino utili dalla produzione energetica debba
                                necessariamente avere ricadute economiche positive anche per i cittadini che vivono nel territorio
                                interessato, ricadute che in passato mai si sono verificate.
                                Il nostro progetto vede la diffusione, anche attraverso incentivi, del microfotovoltaico, per la produzione
                                home made di energia elettrica, attraverso l’installazione di pannelli solari sulle abitazione, con il vincolo
                                di predisposizione dei pannelli solari su tutti gli edifici di nuova costruzione.
                                Ma pensiamo anche al recupero delle vecchie abitazioni adeguandole al miglior risparmio energetico e
                                al recupero di ex aree industriali o di scarso pregio paesaggistico per la collettività, ove poter investire in
                                progetti di produzione energetica che veda necessariamente ricadute economiche positive per i cittadini
                                di Piombino, ricadute mai verificate prima.
                                20
                                L’autoproduzione di energia elettrica è uno degli obiettivi da perseguire anche attraverso le Comunità
                                Energetiche, da sviluppare su superfici di proprietà del Comune di Piombino. Gli incentivi potranno essere
                                distribuiti sui membri della Comunità e sulle categorie più fragili.
                                Lo scorso anno l'Unione Europea ha approvato una direttiva che impone a tutti gli Stati membri, quindi
                                anche all'Italia, di adeguare il proprio patrimonio immobiliare ai nuovi standard energetici. Entro il 2033
                                tutte le case dovranno essere obbligatoriamente nella classe energetica D.
                                Questo significherà, in molte situazioni, una importante esposizione economica da parte delle famiglie.
                                Valuteremo aiuti e incentivi per le famiglie meno abbienti.
                                Ci appare necessario il rilancio della Parchi Val di Cornia, ormai da troppo tempo in balia di una gestione
                                poco lungimirante ed efficace, in un discorso complessivo di salvaguardia e valorizzazione dei numerosi
                                beni ambientali e culturali presenti nel territorio di Piombino e della Val di Cornia, beni in alcuni casi unici
                                e di valore inestimabile. E' necessario promuovere, attraverso la Società Parchi stessa, un sistema
                                sinergico territoriale, che possa costituire un centro di salvaguardia e sviluppo, e recuperare attività di
                                educazione ambientale e di ricerca.
                            </p>,
                        },
                        {
                            key: '8',
                            label: 'RiMateria',
                            children: <p>Pensiamo che le quote societarie dell’ exRimateria debbano essere in ogni modo riportate totalmente in
                                mano pubblica e che il piano industriale della Società stessa debba di nuovo prevedere non conferimenti
                                di rifiuti speciali provenienti da ogni parte d'Italia, ma debba invece essere rivolto all'accoglienza del rifiuto
                                urbano della nostra zona, anche attraverso la richiesta di modifica delle attuali direttive regionali. E'
                                necessario verificare la presenza di rifiuti pericolosi e nocivi e, in caso affermativo, richiedere immediati
                                interventi di bonifica e messa in sicurezza, necessari alla tutela della salute pubblica. La presenza e la
                                messa in opera di altre attività produttive correlate alla cosiddetta “economia circolare” di recupero e
                                riciclo deve essere permessa soltanto se risulta perfettamente ecocompatibile e non in contrasto con
                                possibili attività di recupero e riciclo effettuabili dalla stessa Rimateria.
                                Questi interventi vanno comunque affiancati alla promozione da parte dell’ente pubblico di attività rivolte
                                alla sensibilizzazione sulla riduzione dei consumi, rivedendo abitudini e stili di vita tipici della nostra era
                                consumistica.
                                Nonostante il Referendum del 2011 abbia sancito il ritorno alla gestione unica pubblica per l’acqua, un
                                bene primario, fondamentale per la sopravvivenza umana, niente è stato fatto. Le multiutility affrontano
                                la gestione con un ottica speculativa, tant’è che dopo il Referendum il costo per la gestione di un bene
                                primario come l’acqua è aumentato del 90%.
                                Quello che i cittadini spendono per il “bene” acqua, dovrebbe essere redistribuito e reinvestito sul bene
                                stesso e non in dividendi di società che gestiscono un bene pubblico a scapito dei necessari interventi di
                                manutenzione. L’ultimo dato disponibile è del 2015 e si stimavano perdite per oltre il 40% a causa di una
                                cattiva manutenzione. L’acqua scarseggia e la nostra falda è compromessa dal cuneo salino, che si
                                verifica quando l’acqua di mare si fa strada nella falda acquifera dando vita a gravi problemi di
                                approvvigionamento, tant’è che siamo tutti dipendenti dalla falda di Suvereto.
                                La gestione dell'acqua deve tornare sotto il controllo del Comune.
                            </p>,
                        },

                    ]}
                />
                <Divider className='divider' orientation="center">Porto</Divider>
                <Collapse
                    size="large"
                    items={[
                        {
                            key: '1',
                            label: 'Economia del mare',
                            children: <p>Il Porto di Piombino rappresenta un’importante opportunità di diversificazione economica del nostro
                                territorio ed è stato oggetto di ingenti investimenti pubblici negli anni passati che ne hanno aumentato le
                                potenzialità ma, nonostante ciò, stenta ad attrarre nuovi traffici e anche le imprese storiche che operano
                                sul porto sono in crisi.
                                Il sistema di accorpamento voluto dal Governo Renzi, ha fatto sì che Livorno e Piombino diventassero
                                porti in concorrenza tra loro, dunque a discapito del più piccolo, ovvero: Piombino, quando in realtà i due
                                porti hanno strutture e dimensioni diverse e, conseguentemente, diverse prospettive di sviluppo; hanno
                                pertanto quelle caratteristiche di complementarietà che permettono loro di poter lavorare in sinergia e
                                non concorrenza.
                                Il porto di Piombino rappresenta, da sempre, una delle grandi opportunità di crescita economica del
                                nostro territorio.
                                Assegnatario, negli anni, di importanti finanziamenti pubblici, non riesce a essere attrattivo per nuovi
                                commerci e anche le storiche imprese versano in uno stato di sofferenza.
                                Questo anche a causa delle politiche gestionali dell’Autorità di Sistema che ha messo in competizione i
                                porti di Piombino e di Livorno mentre entrambi, separatamente, per caratteristiche peculiari e per diverse
                                visioni di sviluppo economico, potrebbero lavorare in sinergia e non in concorrenza.
                                E’ necessaria una diversa politica che dia ai due porti la possibilità di lavorare in maniera complementare
                                l’uno con l’altro senza rivalità.
                                E’ fondamentale pretendere dai livelli di politica superiore la NON permanenza della nave rigassificatrice
                                Gola Tundra, data l’inutilità dell’impianto sin dalla sua pretesa di installazione e come ben specificato
                                dalle tabelle relative ai consumi di gas consultabili direttamente dal sito del Ministero dell’ambiente e della
                                sicurezza energetica – dipartimento energia.
                                La permanenza del rigassificatore nel nostro porto è inutile e quanto mai dannosa.
                                Le tabelle pubblicate dal Ministero dell’Ambiente e della Sicurezza Energetica – Dipartimento Energia -
                                raccontano un’altra storia da quella che hanno raccontato quando hanno tentato di giustificare la
                                collocazione della nave nel porto, ci dicono che nel 2020 c’è stato il consumo di 70 miliardi di m3 di gas
                                e nel 2023 il consumo è stato di 54 miliardi di m3 con una riduzione di 16 m3 di gas.
                                Quindi, se il rigassificatore ha una capacità di produzione di 5 miliardi di m3, se con gli altri rigassificatori
                                presenti in Italia si arriva a ottenere una capacità di 56 m3 di gas e se nei primi sei mesi del 2022 abbiamo
                                esportato gas di produzione nazionale - GAS DI PRODUZIONE NAZIONALE - per 1,836 miliardi di m3,
                                con un bel +398% rispetto allo stesso periodo dell’anno precedente, la nave rigassificatrice di Piombino,
                                a chi è utile?
                                Solo a SNAM, che è la società che gestisce determinate posizioni e indicazioni della politica.
                                La nave ha compromesso in parte le attività produttive delle aziende concessionarie della banchina,
                                anche se compensate con aggiunte di aree a terra, oltre ad aver inficiato negativamente sugli attracchi
                                commerciali sulla banchina Nord di altri traffici che stanno congestionando la parte vecchia adiacente
                                agli approdi dei traghetti.
                                Con l’arrivo del rigassificatore, le attività produttive concessionarie della banchina sono state in parte
                                compromesse, e le compensazioni con altre aree a terra non sono state sufficienti a risollevare la
                                situazione. Questo perché gli attracchi “forzati” che stanno congestionando la parte vecchia, adiacente
                                agli approdi dei traghetti, fa si che molte banchine non siano utilizzabili per navi di determinata stazza
                                (anche media) con un rischio potenziale di avere le banchine vuote e navi in attesa in rada, con gravi
                                costi alle aziende che rientrano nella logistica marittima.
                                Questo territorio è in sofferenza da troppo tempo.
                                Dobbiamo rendere possibile l’utilizzo complessivo di una infrastruttura che può offrire grandi opportunità
                                di diversificazione economica del nostro territorio.
                                Questa parte per caratteristiche infrastrutturali, fa si che molte banchine non siano utilizzabili per navi di
                                determinata stazza (anche media), dunque c’è un rischio potenziale di avere le banchine vuote e le navi
                                ad attendere in rada comportando gravi costi alle aziende che rientrano nella logistica marittima.
                                Le nuove aree devono essere collegate alla viabilità pubblica; proprio per questo, terminata finalmente
                                la costruzione della bretellina, ci si deve concentrare della SS398, andando a reperire i fondi necessari
                                al completamento anche del secondo lotto.
                                Anche per questo è fondamentale che l’amministrazione si impegni nei confronti degli altri enti competenti
                                per ottenere la realizzazione della Variante di Chioma, cosiddetta “Lotto zero”. Il progetto per superare
                                le due corsie dell’Aurelia sul Romito, causa di rallentamenti al traffico, soprattutto di quello su gomma
                                diretto al Porto, nonché di incidenti, è vecchio di venti anni. In tutto questo tempo nessuno si è impegnato
                                seriamente per risolvere i problemi per la costruzione di questa importante Variante.
                                Per un’appetibilità totale della nostra infrastruttura, dobbiamo fare in modo di poter rendere operativa
                                l’intermodalità logistica, facendo arrivare sulle banchine la linea ferroviaria: fondamentale per le banchine
                                pubbliche in virtù di un incremento di traffici anche verso aziende non operanti sul nostro territorio.
                                E’ quindi prioritario il completamento dei due lotti della SS398 in quanto le nuove aree del porto devono
                                essere collegate alla viabilità pubblica, ma sola 398 non potrà essere funzionale alle risoluzioni per
                                l'accesso al porto.
                                È una strada fondamentale per i piombinesi ma non funzionale al 100% a Piombino.
                                La rete di collegamenti deve guardare sia verso Nord, verso Sud e verso l'Adriatico (Grosseto - Fano).
                                Il porto deve necessariamente trovare una dimensione culturale più elevata e più sentita in modo da
                                creare un bacino di occupazione fondamentale per tutto il territorio.
                                Al suo interno si devono creare possibilità di investimento su nuove figure formate e competenti.
                                Dobbiamo dare risalto alle formazioni delle persone in virtù delle possibilità e delle volontà di creare
                                economie in questo ambito.
                                Una categoria importante nelle economie è quella dei marittimi, i quali potrebbero avere qui tutte le
                                formazioni necessarie sia per i primi imbarchi che per gli aggiornamenti cogenti. Questa possibilità
                                avrebbe il doppio fine di creare posti di lavoro sugli imbarchi e di incentivare la cultura del mare e della
                                sua economia tra i più giovani.
                                Il settore marittimo presenta delle peculiarità in quanto ha ad oggetto un ambito lavorativo complesso e
                                delicato. I lavoratori marittimi costituiscono, infatti, un’ampia e particolare categoria di lavoratori, oggetto
                                di una disciplina speciale.
                                Il porto dovrà necessariamente trovare una dimensione culturale più elevata e più sentita in modo da
                                creare un bacino di occupazione fondamentale per tutto il territorio.
                                Si dovranno creare possibilità di investimento su nuove figure, competenti, formate e da formare, per
                                creare nuovi posti di lavoro e incentivare la cultura del mare tra i giovani</p>,
                        }
                    ]}
                />
                <Divider className='divider' orientation="center">Fabbrica</Divider>
                <Collapse
                    size="large"
                    items={[
                        {
                            key: '1',
                            label: 'Siderurgia',
                            children: <p>La fabbrica ed i suoi futuri sviluppi dettati dalle scelte politiche ed imprenditoriali, dovrà necessariamente
                                far parte di quella diversificazione che possa consentire una ripresa economica del nostro territorio.
                                E’ fondamentale capire, che questa debba essere centrale sotto questo aspetto, dato che rappresenta il
                                maggior produttore del PIL locale e che debba entrare ancor più in sinergia con il porto ed i collegamenti
                                infrastrutturali a terra.
                                Stiamo vivendo una fase molto particolare, dove viene manifestato l’interesse di insediamento da parte
                                di nuovi interlocutori parallelamente ad una ripresa di una parte attualmente in essere.
                                Siamo reduci dalla firma presso il MIMIT del Memorandum of Understanding, il quale prevede appunto il
                                revamping del treno rotaie contemporaneamente all’allontanamento dell’industria dalla città. Serve
                                assoluta chiarezza, viste le dichiarazioni dei rappresentanti della società contrastanti con quanto citato
                                all’interno di quel documento. Sappiamo che la redazione di questo atto sia soltanto una dichiarazione di
                                intenti propedeutica alla firma di un Accordo di Programma entro 3 mesi, ma dopo anni di immobilismo
                                data la mancanza di un piano industriale e nonostante la redazione di Accordi di Programma vari,
                                dobbiamo necessariamente pretendere garanzie concrete e cronoprogrammi precisi lavorando di
                                concerto tra Comune, Ministero, Regione ed Aziende.
                                Pretendiamo di avere risposta certa sulla locazione da parte di JSW del forno elettrico e delle tempistiche
                                per una sua realizzazione parallela alla Tempra.
                                A Piombino non c’è più posto per le promesse e non è più possibile utilizzare la dignità dei lavoratori
                                soltanto a ridosso delle elezioni di turno!
                                Serve la massima trasparenza su tutti i fronti, perché i cittadini di tutto il comprensorio saranno coinvolti
                                dalle scelte politiche che verranno fatte sul tema della siderurgia.
                                E’ noto da tempo l’interesse dell’installazione di una nuova acciaieria green nel padule da parte della
                                Società Metinvest - Danieli, dove tutt’ora insistono (anche se fermi) il treno vergella ed il TMP.
                                L’amministrazione comunale non potrà stendere un nuovo tappeto rosso basato soltanto sulle volontà e
                                l’annuncio di un buon assorbimento di personale attualmente non impiegato nello stabilimento esistente;
                                anche perché quegli impianti di laminazione esistenti, una volta avviato il progetto, non esisteranno più
                                e non si potrà tornare indietro. Il rischio per l’economia è grave, dunque le garanzie economiche dovranno
                                essere esponenziali!
                                Serve uno studio approfondito sulle fattibilità del progetto, sulle reali valutazioni delle aree da insediare
                                con relative bonifiche o messe in sicurezza permanenti oltre che garanzie economiche e cronoprogrammi
                                certi a beneficio della collettività e dei lavoratori stessi.
                                Pretendiamo il rispetto della sostenibilità di questo insediamento a 360°, per la realizzazione di aree al
                                coperto che garantiranno l’approvvigionamento dei forni elettrici per la produzione di coils e tutti i dettagli
                                riguardanti la logistica che comprenderanno sia le aree portuali, sia lo sviluppo delle infrastrutture terrene.
                                Non abbiamo più tempo, anche se per una ripresa effettiva dovranno necessariamente passare ancora
                                degli anni. Nel frattempo dobbiamo mantenere aperti i canali degli ammortizzatori sociali che coinvolgono
                                anche lo stabilimento Liberty, anch’esso soggetto interessato agli sviluppi della siderurgia locale in virtù
                                delle crisi internazionali che stanno paralizzando il mercato dell’acciaio e che stanno trascinando con sé
                                lo stesso stabilimento. Stabilimento riconosciuto come produttore di laminati di alta qualità e che impiega
                                anch’esso centinaia di lavoratori diretti ed indiretti. A queste crisi è necessario e prioritario creare forte
                                sinergia con tutte le Istituzioni vista la situazione di Taranto con ADI che impegnerà grandi risorse
                                economiche e attrarrà le migliori società del Settore interessate al Nuovo progetto e alla sua
                                realizzazione. La nostra competenza in materia è notevole e basata su dati inconfutabili e incrociati. Noi
                                avanziamo dubbi ben motivati ma vogliamo nutrire anche speranze per il "nostro" polo industriale.</p>,
                        }
                    ]}
                />
                <Divider className='divider' orientation="center">Attività produttive</Divider>
                <Collapse
                    size="large"
                    items={[
                        {
                            key: '1',
                            label: 'Attività produttive',
                            children: <p>Le attività produttive, in particolare, il commercio e l'artigianato, hanno subito notevoli contraccolpi negli
                                ultimi anni, aggravati ulteriormente dalla pandemia. Questo ha portato alla chiusura di numerosi negozi
                                e alla presenza di locali commerciali vuoti, contribuendo al degrado urbano, anche nel centro città. È
                                necessario ripensare completamente il modello di sviluppo, potenziando le infrastrutture e i servizi e
                                creando una collaborazione tra le strutture ricettive, i ristoranti per la programmazione degli eventi.
                                Il sistema delle imprese a Piombino dovrebbe essere un motore trainante per l'economia, seguendo
                                l'esempio a livello nazionale. L'obiettivo di un'amministrazione comunale dovrebbe essere quello di
                                soddisfare le esigenze di servizi essenziali delle imprese per agevolarle nel loro lavoro e
                                contemporaneamente rilanciare il commercio e l'artigianato attraverso eventi mirati per aumentare il
                                turismo in città.
                                24
                                Per raggiungere questi obiettivi, è necessario formare gli imprenditori a tutti i livelli, valorizzare le aree
                                periferiche della città, potenziare la zona pedonale, prolungare gli orari di apertura dei servizi pubblici e
                                creare un portale online per gli operatori del settore. Inoltre, è importante istituire un tavolo permanente
                                delle attività produttive in collaborazione con le associazioni di categoria, destinare fondi comunali al
                                commercio, progettare eventi per attrarre turisti, revisionare i regolamenti sulle sagre e feste, privilegiare
                                le piccole realtà commerciali e promuovere corsi di formazione per gli antichi mestieri.
                                E’ fondamentale adottare misure concrete e sinergiche per sostenere le attività produttive a Piombino e
                                favorire la crescita economica e sociale della città.</p>,
                        }
                    ]}
                />
                <Divider className='divider' orientation="center">Urbanistica - Lavori pubblici - Decoro urbano</Divider>
                <Collapse
                    size="large"
                    items={[
                        {
                            key: '1',
                            label: 'Pianificazione urbana sostenibile',
                            children: <p>Il nostro obiettivo è promuovere una pianificazione urbana che tenga conto della sostenibilità ambientale,
                                incentivando la riduzione dell'impatto ambientale delle nuove costruzioni e la riqualificazione delle aree
                                dismesse.
                                La nostra città possiede un patrimonio immobiliare abitativo esponenzialmente eccessivo rispetto al
                                numero di abitanti, dunque dobbiamo arrestare il fenomeno di consumo di suolo, incentivando la
                                conservazione e la valorizzazione del patrimonio in essere.
                                La sostenibilità delle previsioni urbanistiche, riguarda anche l’aspetto socio-economico del nostro
                                Comune. Laddove si spopolano interi quartieri per usufruire di nuovi spazi da edificare, si alimenta il
                                fenomeno volgarmente detto “ghettizzazione”; tutto questo a discapito sia delle persone che del territorio.
                                E’ altresì fondamentale avere una visione di cosa si vuole fare, come lo si vuol fare e il fine ultimo del
                                progetto.
                                Stiamo assistendo sempre più spesso a restyling e ristrutturazioni di luoghi pubblici come piazze, vie
                                etc… senza valutarne il reale valore finale. Dobbiamo ripartire dalle periferie, affinché anche queste,
                                grazie ad interventi strutturali, possano godere di un’usufruibilità di spazi attrattivi funzionali alle economie
                                dei cittadini.
                                Il centro storico di una città è un luogo di grande importanza, per la sua storia e per la sua identità.
                                Tuttavia, per valorizzarlo adeguatamente, è necessario adottare una visione più ampia di valorizzazione
                                urbana. Il rifacimento delle piazze in maniera disgiunta, crea una dispersione di attrattività; questa è
                                stata concentrata tutta e soltanto tra Corso Italia-Piazza Gramsci-Piazza Verdi fino al Palazzo Comunale.
                                Dobbiamo e vogliamo, invece, mettere in comunicazione diretta, dando una linea di progettazione
                                continuativa e coerente, tutta quella parte che inizia da Piazza Bovio, prende tutto Corso Italia
                                estendendola fino a Piazza Costituzione. All’interno devono essere comprese le vie limitrofe insediate
                                dalle attività commerciali, senza che una eventuale nuova viabilità possa inficiare sull’affluenza di queste.
                                Inoltre, è importante potenziare il collegamento pedonale che connette tutte queste vie, in modo da
                                favorire la mobilità e offrire un’opportunità ai cittadini. Solo attraverso un approccio integrato e olistico
                                alla valorizzazione del centro e del centro storico possiamo preservarne il patrimonio culturale e renderlo
                                attrattivo per tutti.
                                La realizzazione della SS398, tuttavia, rimane la priorità assoluta per garantire un collegamento stabile
                                e razionale del territorio con la rete stradale principale.
                                A oggi è prioritario, visto il recente completamento della bretella, concentrarci sui due lotti della SS398
                                per collegare le nuove aree del porto alla viabilità pubblica, ma sola 398 non potrà essere funzionale ai
                                problemi della città. La rete di collegamenti dovrà guardare sia verso Nord, verso Sud e verso l'Adriatico
                                (Grosseto - Fano). E’ inoltre fondamentale che l’amministrazione si impegni, nei confronti degli altri enti
                                competenti, per ottenere la realizzazione della Variante di Chioma, cosiddetta “Lotto zero”. Il progetto per
                                superare le due corsie dell’Aurelia sul Romito, causa di rallentamenti al traffico, soprattutto di quello su
                                gomma diretto al Porto, nonché di incidenti, è vecchio di vent’anni. In tutto questo tempo nessuno si è
                                impegnato seriamente per risolvere i problemi per la costruzione di questa importante Variante.
                                È importante considerare un percorso diretto che vada dall'attuale uscita della SS398 fino a Portovecchio,
                                evitando varianti inutilmente lunghe. È fondamentale evitare soluzioni che favoriscano interessi privati a
                                discapito dell'interesse pubblico.
                                La situazione della stazione ferroviaria e il suo difficile collegamento con Campiglia Marittima richiedono
                                interventi per preparare il terreno per una futura metropolitana di terra.
                                Semplificare il tracciato eliminando l'attuale stazione del porto a favore della vecchia stazione di
                                Portovecchio potrebbe essere una soluzione, integrata con un servizio Bus-Navetta per i moli più distanti.
                                Come abbiamo evidenziato nel paragrafo dedicato ai Trasporti, è essenziale mantenere la stazione di
                                Piombino nella sua posizione attuale per garantire la vicinanza al centro cittadino.
                                Incrementare i collegamenti su gomma tra periferia e centro favorirà un'ulteriore integrazione dei quartieri
                                periferici con il cuore della città.</p>,
                        },
                        {
                            key: '2',
                            label: 'Urbanistica',
                            children: <p>L’Urbanistica è fondamentale per le conseguenze socio-economiche del territorio, che è la nostra risorsa
                                principale e va assolutamente salvaguardata con grande saggezza ed equilibrio a garanzia della qualità
                                di vita e sviluppo per i propri cittadini.
                                Senza una visione, si alimenta un problema dettato in primis dalla carenza del lavoro.</p>,
                        },
                        {
                            key: '3',
                            label: 'Recupero del patrimonio storico-artistico',
                            children: <p>Il patrimonio storico-culturale, come meglio definito nella sezione “Cultura”, per sua stessa definizione ha
                                un'importante dimensione politica poiché́ implica la necessità di fare scelte tra alternative, che ci sono
                                sempre, riguardanti “cosa” e “come” conservare e progettare l'esistente.
                                La concezione del patrimonio e gli approcci pratici a esso collegati rappresentano una sfida cruciale per
                                le politiche urbane, poiché́ le decisioni prese in questo ambito possono essere irreversibili e riflettono
                                sempre il sistema di valori che le ha generate.
                                È quindi fondamentale adottare approcci consapevoli e responsabili nella gestione e valorizzazione del
                                patrimonio storico-artistico e culturale, al fine di preservare la memoria collettiva e favorire lo sviluppo
                                sostenibile delle comunità̀ .
                                Valorizzare e recuperare il patrimonio storico-artistico e culturale della città, garantendo la conservazione
                                degli edifici storici e promuovendo iniziative culturali che ne favoriscano la fruizione da parte dei cittadini
                                e dei turisti è quindi un nostro obiettivo.
                                E’ nel costruire quei collegamenti tra estremi che si intercetta un possibile e attivo ruolo della politica
                                nell’incentivare scelte di valorizzazione e gestione innovative, scelte che potranno diventare opportunità̀
                                di lavoro e formazione, cultura diffusa, inclusione sociale e costruzione di reti di relazione, costruzione di
                                comunità̀ .
                                L’amministrazione verificherà la possibilità di realizzare un Ostello della Gioventù in un immobile di sua
                                proprietà o di proprietà di terzi ( esempio l’immobile dell’ex Asilo delle Suore Giuseppine di Sant’Antimo).</p>,
                        },
                        {
                            key: '4',
                            label: 'Spazi per lo sport',
                            children: <p>C’è la necessità di dare più spazio alla domanda di sport da parte degli adulti ma soprattutto dei ragazzi
                                e alle loro alle esigenze.
                                Per questo è necessario andare a una riprogrammazione degli spazi e a un censimento delle palestre.
                                26
                                L’obiettivo è quello di prevedere almeno due palestre da dedicare agli sport emergenti sul nostro
                                territorio, come le arti marziali, le scuole di danza, e la scherma, che necessità di spazi diversi dagli attuali
                                per poter crescere.
                                Con il censimento sarà possibile programmare efficacemente gli interventi di manutenzione che
                                necessitano strutture di questo tipo.
                                L'Amministrazione dovrà farsi carico dell’attività sportiva giovanile, di qualsiasi disciplina, per
                                salvaguardare la salute e l’educazione dei giovani e rappresentare un punto di riferimento per la
                                continuazione delle attività oltre il periodo scolastico</p>,
                        },
                        {
                            key: '5',
                            label: 'Mobilità sostenibile',
                            children: <p>Rivedere il Piano della Mobilità urbana, ormai datato, per renderlo adeguato ai nuovi bisogni.
                                Favorire la mobilità sostenibile attraverso la creazione di piste ciclabili oltre a quelle esistenti, che
                                possano abbracciare uno scenario più ampio e creare un’alternativa alla mobilità tradizionale, la
                                promozione dei mezzi pubblici e l'incentivazione dell'uso di veicoli elettrici.
                                Come espresso sulla parte inerente ai trasporti, dobbiamo riprogettare da zero tutta la viabilità oraria dei
                                mezzi pubblici in modo da renderla efficiente anche in un contesto urbanistico.</p>,
                        },
                        {
                            key: '6',
                            label: 'Rigenerazione urbana delle periferie',
                            children: <p>Avviare progetti di rigenerazione urbana nelle periferie, con particolare attenzione alla riqualificazione
                                delle aree degradate e al potenziamento dei servizi pubblici. Questo porterebbe a una ricaduta positiva
                                sugli esercizi pubblici di quelle aree e un miglioramento del valore immobiliare della zona.</p>,
                        },
                        {
                            key: '7',
                            label: "Incentivi per l'edilizia residenziale sostenibile",
                            children: <p>Introdurre incentivi per la realizzazione di edilizia residenziale sostenibile, promuovendo la costruzione
                                di edifici a basso consumo energetico e l'utilizzo di materiali eco-compatibili.
                                Prevediamo incentivi per l’installazione dei pannelli solari per le abitazioni, favorendo la diffusione del
                                microfotovoltaico a discapito della diffusione invasiva del fotovoltaico stesso su terreno agricolo utile.
                                Questo garantirà la produzione home made di energia elettrica, attraverso l’installazione di pannelli solari
                                sulle abitazioni.
                                Prevediamo il vincolo di predisposizione dei pannelli solari su tutti gli edifici di nuova costruzione.</p>,
                        },
                        {
                            key: '8',
                            label: 'Smart city',
                            children: <p>Promuovere l'adozione di tecnologie innovative per rendere la città più intelligente e efficiente,
                                migliorando la gestione dei servizi pubblici e la qualità della vita dei cittadini.</p>,
                        },
                        {
                            key: '9',
                            label: 'Parchi e spazi verdi',
                            children: <p>Incrementare la quantità di aree verdi e di parchi urbani, creando nuovi spazi pubblici attrezzati per il
                                tempo libero e il benessere dei cittadini.</p>,
                        },
                        {
                            key: '10',
                            label: 'Partecipazione cittadina',
                            children: <p>Favorire la partecipazione attiva dei cittadini nei processi decisionali riguardanti l'urbanistica, attraverso
                                consultazioni pubbliche e la promozione di strumenti di partecipazione democratica e rivalorizzando i
                                luoghi di aggregazione lasciati al degrado.</p>,
                        },
                    ]}
                />
                <Divider className='divider' orientation="center">Turismo</Divider>
                <Collapse
                    size="large"
                    items={[
                        {
                            key: '1',
                            label: 'Introduzione turismo',
                            children: <p>Piombino, con le sue radici etrusche profonde e la sua storia del lavoro legata a Populonia, si distingue
                                come una destinazione unica nel panorama turistico italiano.
                                Negli ultimi anni, la città ha saputo coniugare la sua ricca eredità storica con la bellezza dei suoi paesaggi,
                                attirando visitatori da tutto il paese. Tuttavia, nonostante il crescente afflusso turistico, Piombino si trova
                                di fronte alla sfida di diversificare l'economia locale per creare opportunità di lavoro sostenibili.
                                Creare una sinergia virtuosa tra l'attività turistica e quella manifatturiera a Piombino rappresenta un
                                obiettivo primario per garantire lo sviluppo sostenibile della città. È fondamentale adottare una
                                concezione di turismo che rispetti l'ambiente naturale e antropico locale, evitando pratiche di sfruttamento
                                e cementificazione incontrollata.
                                Piombino possiede un patrimonio storico e artistico di inestimabile valore, che va rivalutato e valorizzato
                                per attrarre turisti interessati alla scoperta autentica e alla cultura locale. Il turismo culturale, basato sulla
                                conoscenza e sulla divulgazione della storia millenaria della città, rappresenta un'opportunità per
                                allungare la stagione turistica e garantire un flusso costante di visitatori.
                                Dobbiamo essere in grado di sviluppare una coscienza storica che sappia valorizzare la particolarità del
                                luogo nel quale viviamo, ridistribuendo i percorsi storici e le strutture ricettive per tutto il territorio fuori
                                dalla logica di agglomerazione di risorse e servizi nei luoghi più facilmente pubblicizzabili. Potenziare
                                infine il turismo dei “luoghi della memoria” e della Resistenza, da Punta Falcone alle strutture civili e
                                militari (Piazza Bovio, la Casamatta, il Bunker dei Quattro Pini).
                                Inoltre, è necessario sviluppare nuove proposte turistiche alternative al classico turismo balneare, come
                                il ciclo-turismo e il turismo sportivo, per attrarre visitatori in tutte le stagioni dell'anno. In questo contesto,
                                la creazione di un luogo semipermanente per eventi culturali e concerti potrebbe contribuire a rilanciare
                                l'immagine di Piombino come destinazione turistica dinamica e vivace.
                                Per promuovere efficacemente Piombino come meta turistica, è essenziale adottare una nuova strategia
                                di marketing e collaborare con programmi televisivi e riviste specializzate per cambiare l'immagine della
                                città e attrarre nuovi visitatori. Inoltre, l'innovazione tecnologica e la digitalizzazione sono fondamentali
                                per rendere accessibili e visibili le risorse turistiche meno conosciute del territorio.
                                Il sistema turistico toscano, resiliente alla crisi causata dal Covid-19, si trova di fronte a importanti
                                opportunità e sfide. L'intervento pubblico è cruciale per sostenere la digitalizzazione dei territori e
                                potenziare l'offerta turistica, garantendo la crescita economica e la tutela dell'ambiente.
                                Per quanto riguarda la presenza di turisti, Piombino, città affascinante e ricca di storia, si trova di fronte
                                a una sfida importante: come attirare e gestire i turisti in modo efficace senza compromettere la qualità
                                dell'esperienza dei visitatori.
                                Visto il successo registrato lo scorso anno, Piombino si candida per attrarre i turisti che alloggiano nei
                                Villaggi e Residence del territorio, attraverso iniziative ed eventi che valorizzino la sua cultura e le sue
                                bellezze naturali.
                                Per raggiungere questo obiettivo, è essenziale potenziare la sinergia tra i commercianti locali e tra gli
                                stessi e l’amministrazione comunale al fine di creare un'offerta turistica omogenea. Collaborando,
                                insieme e con il supporto dell’amministrazione comunale, i commercianti possono organizzare eventi e
                                attività che soddisfino le esigenze dei turisti, rendendo Piombino una meta attraente per le serate dei
                                visitatori.
                                Durante la stagione estiva, il commercio svolge un ruolo fondamentale a supporto dei turisti per
                                soddisfare le loro esigenze. È importante, quindi, che le attività commerciali siano aperte, in maniera
                                sinergica tra di loro, garantendo così un servizio continuo e di qualità. Questo approccio favorisce non
                                solo l'economia locale, ma contribuisce anche a creare un'esperienza positiva per chi sceglierà Piombino
                                per le sue vacanze, che si sentirà accolto e supportato durante la permanenza.
                                E’ essenziale questa sinergia e ci impegneremo per supportare i progetti dei commercianti e la loro
                                disponibilità di offrire il miglior servizio.
                                Riconosciamo l'importanza dei commercianti nel tessuto economico e sociale della nostra comunità e
                                siamo consapevoli che il loro successo è anche il successo di un’amministrazione. Per questo motivo, ci
                                impegniamo a creare un ambiente favorevole per lo sviluppo di attività commerciali, fornendo supporto e
                                risorse necessarie per la realizzazione dei loro progetti.
                                Inoltre, è importante sviluppare una strategia turistica integrata che metta in luce le peculiarità della città
                                e promuova le sue attrattive in modo efficace. Attraverso una collaborazione stretta tra le varie realtà
                                locali, Piombino può emergere come una destinazione turistica di successo, in grado di offrire esperienze
                                uniche e indimenticabili ai suoi visitatori.
                                Piombino ha tutte le carte in regola per diventare una meta turistica di rilievo, ma è fondamentale agire
                                in modo coordinato e strategico per valorizzare al meglio il suo potenziale. Con l'impegno e la
                                collaborazione di tutti gli attori locali, Piombino può consolidare la sua posizione sul mercato turistico e
                                attrarre un numero sempre maggiore di visitatori.
                                In conclusione, il nostro Piano per il Turismo a Piombino rappresenta una strada verso lo sviluppo
                                sostenibile della città, basato sulla valorizzazione del suo patrimonio storico e artistico, sull'innovazione
                                tecnologica e sulla collaborazione tra settori pubblici e privati. Solo attraverso un approccio olistico
                                integrato sarà possibile garantire un futuro florido e sostenibile per Piombino come destinazione turistica.</p>,
                        },
                        {
                            key: '2',
                            label: 'Turismo balneare',
                            children: <p>Per sfruttare appieno il potenziale turistico di Piombino, è essenziale ampliare l'offerta turistica oltre la
                                stagione estiva e oltre il turismo balneare.
                                Promuovere forme alternative di turismo, come quello culturale, enogastronomico, sportivo e del tempo
                                libero, è cruciale per attrarre visitatori durante tutto l'anno. Inoltre, migliorare i servizi turistici esistenti,
                                come trasporti, siti culturali, parchi ed eventi, è fondamentale per offrire un'esperienza turistica di qualità.
                                Per raggiungere questi obiettivi, è necessario potenziare il ruolo dei Parchi Val di Cornia per proteggere
                                e valorizzare il patrimonio naturale e culturale della regione, nonché promuovere il turismo.
                                Il turismo balneare può essere arricchito attraverso iniziative per migliorare la viabilità del golfo di Baratti
                                e promuovere il turismo subacqueo in collaborazione con centri di diving locali.
                                Organizzare eventi sportivi acquatici e censire i luoghi d'immersione sono ulteriori strategie per attrarre
                                visitatori interessati alle attività marine.
                                Il turismo subacqueo rappresenta un'opportunità unica per valorizzare i siti di maggiore interesse,
                                preservando al contempo l'ambiente marino.
                                La collaborazione con diving e associazioni specializzate può incrementare i servizi offerti, rendendo il
                                patrimonio marino più attraente.
                                Piombino ha un grande potenziale turistico ancora inesplorato che merita di essere valorizzato.
                                Attraverso una strategia che promuova diversi tipi di turismo, potenzi i servizi esistenti e sviluppi nuove
                                iniziative, la città può emergere come una destinazione turistica di rilievo a livello nazionale, offrendo
                                esperienze uniche e sostenibili per i visitatori.</p>,
                        },
                        {
                            key: '3',
                            label: 'Turismo itinerante',
                            children: <p>Il turismo itinerante può essere potenziato predisponendo aree attrezzate per i camper.
                                Sono circa 20 milioni i turisti che in tutta Europa scelgono questa modalità di viaggio e se ci chiediamo
                                perché dobbiamo investirci è perché ognuna di queste autocaravan spende in media 200 euro al giorno
                                in ristorazione, nell’acquisto di prodotti enogastronomici locali e anche in attività culturali, quali ingressi
                                nei musei, siti archeologici e parchi a tema, e altro.
                                E’ anche un’opportunità di scambio culturale e di sviluppo economico ma a piccoli pass e senza
                                stravolgere la vita dei residenti.
                                Quando diciamo attrezzate, intendiamo dotate di tutto il necessario.
                                Questa è una delle soluzioni che applica modelli di accoglienza a basso impatto, capace tuttavia di offrire
                                servizi di qualità ai turisti e grazie a questa sarà possibile eliminare il campeggio abusivo.
                                L'accesso alle spiagge deve essere reso più agevole, con particolare attenzione all'eliminazione delle
                                barriere architettoniche.
                                Il fenomeno del nomadismo digitale, soprattutto dopo l’esperienza del Covid, è in costante crescita e
                                Piombino ha il potenziale per diventare una meta attraente per questi lavoratori in remoto. Creare uno
                                spazio di coworking in ambienti dismessi del comune potrebbe portare benefici significativi alla città, sia
                                economici che culturali. È importante sfruttare al meglio questa opportunità per promuovere lo sviluppo
                                e la crescita di Piombino come destinazione ideale per i nomadi digitali.</p>,
                        },
                        {
                            key: '4',
                            label: 'Turismo enogastronomico',
                            children: <p>Il turismo enogastronomico è un settore in continua crescita e di grande importanza per la promozione
                                del territorio e delle sue eccellenze alimentari.
                                L'organizzazione di manifestazioni enogastronomiche rappresenta un importante punto di incontro tra il
                                nuovo approccio verso il cibo e l'interesse crescente per i prodotti e la cucina locali. Questo fenomeno è
                                evidenziato dall'aumento della domanda di questa forma di turismo e dalla diffusione di programmi
                                televisivi che mettono in primo piano la cucina.
                                Il cibo non è solo nutrimento, ma anche un ambasciatore della cultura di un luogo. Grazie al suo valore
                                simbolico, artistico e storico, il cibo svolge un ruolo fondamentale nella trasmissione della cultura
                                territoriale e nella sua valorizzazione.
                                Siamo intenzionati a coniugare questi valori legati al cibo per valorizzare la cultura del territorio e la sua
                                storia.
                                Anche l’offerta di eventi enogastronomici è in aumento, grazie alla crescente richiesta, e rappresentano
                                un'opportunità per promuovere i prodotti locali, la tradizione culinaria e l'identità di un territorio. Attraverso
                                queste iniziative, è possibile valorizzare le eccellenze gastronomiche locali.
                                L’esperienza di "Poderando" deve essere diffusa ad altre aree del territorio, magari creando un brand
                                da ripetere annualmente.
                                Inoltre, promuovere eventi di Street Food e riprendere il filo interrotto con la FIVA e prevedere
                                nuovamente lo svolgimento del Mercato Europeo, magari lontano dal periodo balneare, può
                                rappresentare un’attrazione e richiamare un numero maggiore di visitatori.
                                Come detto nella premessa, organizzare un evento rivolto ai turisti in collaborazione con le attività
                                commerciali di ristorazione e con le strutture ricettive, permetterebbe di promuovere e far conoscere tutti
                                i servizi presenti sul territorio. Questa rappresenterebbe un'opportunità per valorizzare le eccellenze
                                alimentari locali e promuovere produzioni artigianali.</p>,
                        },
                        {
                            key: '5',
                            label: 'Ottimizzazione del Turismo Naturalistico e Sportivo e Valorizzazione del Turismo Culturale',
                            children: <p>Il Parco della Sterpaia offre agli amanti della natura un'opportunità unica per vivere un’esperienza di
                                svago e relax. Valuteremo iniziative a supporto dei turisti che desiderano vivere esperienze naturalistiche
                                e dei residenti
                                Il nostro promontorio, di ineguagliabile bellezza, offre la possibilità di usufruire di percorsi e sentieri a
                                disposizione di chi vuole vivere un turismo naturalistico e/o sportivo. La manutenzione, tuttavia, a oggi è
                                molto carente così come per le aree pic-nic presenti e per la segnaletica che dovranno essere
                                manutenuti, non soltanto durante il periodo estivo ma per tutto l’anno. Punti informativi con la storia di
                                Piombino, i suoi legami con il mare e con gli etruschi, potrebbero arricchire l’esperienza turistica.
                                Il nostro territorio è ricco di sentieri: attivare la procedura per il loro inserimento nel CAI –Catasto Sentieri
                                d’Italia - potrebbe rappresentazione un’opportunità in più per chi ama il turismo naturalistico e una
                                potenziale attrazione turistica.
                                L'Oasi Orti Bottagone, è, secondo la definizione, un'area naturale protetta per la conservazione di un
                                habitat di particolare interesse floristico e faunistico e per la salvaguardia della sua biodiversità. E’
                                interesse di tutti noi tutelarla e valorizzarla, con percorsi didattici, divulgazione, sensibilizzazione e ricerca
                                scientifica, perché ogni specie che scompare non potrà mai più essere ricreata.
                                Verificare la possibilità di organizzare anche a Piombino eventi come l'Outdoor Sport Festival, che in
                                questo momento viene organizzato in località vicine a noi.
                                La collaborazione con il Club Alpino Italiano per la mappatura dei sentieri e il supporto alle attività di
                                trekking urbano potrebbero promuovere ulteriormente il territorio così come valorizzare punti di interesse
                                come punta Falcone e l’Associazione Astrofili può arricchire l'esperienza dei visitatori.</p>
                        },
                        {
                            key: '6',
                            label: 'Turismo Culturale',
                            children: <p>Per quanto riguarda il Turismo Culturale, incentivare le visite ai parchi e musei, creare una mappa
                                romanzata del territorio e valorizzare la piazza del Museo Archeologico di Cittadella potrebbero attrarre
                                un pubblico interessato alla cultura e alla storia locale. Il coinvolgimento delle associazioni di guide
                                turistiche potrebbe arricchire ulteriormente l'offerta turistica culturale.
                                Il turismo che immaginiamo per questa città, ad alto consumo di conoscenza, è quello di una sapiente
                                rivalutazione della storia millenaria e dell’immenso patrimonio artistico e urbanistico che ha Piombino.
                                Dal castello, che presenta notevoli pregi d’architettura militare come i bastioni d’impianto trace italienne
                                e il cassero pisano, alle mura leonardesche, lascito del dominio del Borgia, fino al vero e proprio gioiello,
                                unicum per qualità e quantità, dell’area etrusca di Populonia.
                                In conclusione, l'ottimizzazione del turismo naturalistico e sportivo e la valorizzazione del turismo
                                culturale potrebbero trasformare il territorio in una meta turistica ricca di esperienze coinvolgenti per i
                                visitatori.
                                Il miglioramento della cura e della conservazione del patrimonio paesaggistico attraverso
                                l'implementazione sentieristica sul promontorio è un obiettivo di grande importanza.</p>,
                        },
                        {
                            key: '7',
                            label: "Per finire, l'importanza dei dati nel settore turistico",
                            children: <p>L'analisi accurata dei dati nel settore turistico è fondamentale per il successo e la sostenibilità delle attività
                                commerciali. La corretta interpretazione dei dati e delle statistiche guida le decisioni strategiche,
                                ottimizzando gli investimenti e garantendo un'offerta adeguata alla domanda turistica locale.
                                È essenziale comprendere i turisti, le loro preferenze e il tipo di esperienza che cercano. Valutare
                                l'accessibilità e l'attrattiva dei locali è altrettanto cruciale per il successo nell'ospitalità turistica. È
                                fondamentale considerare non solo gli arrivi turistici e le presenze, ma anche la spesa complessiva dei
                                visitatori per valutare la crescita del turismo sul territorio. Inoltre, è essenziale analizzare se un aumento
                                delle presenze turistiche è accompagnato da un incremento della spesa o da una riduzione dei prezzi
                                per attrarre più turisti.
                                Presenze poi vanno trasformate in economia turista
                                È importante anche considerare gli escursionisti e i visitatori di giorno, utilizzando indicatori alternativi per
                                valutare la domanda turistica locale in modo accurato e affidabile.
                                La presenza online delle attività turistiche della zona è fondamentale per attirare visitatori e promuovere
                                il territorio in modo efficace. Grazie alla presenza su piattaforme digitali e sui social media, le aziende
                                turistiche possono raggiungere un pubblico più ampio e interagire con i potenziali clienti in modo diretto
                                e immediato.
                                In un'epoca in cui sempre più viaggiatori utilizzano internet per pianificare le proprie vacanze, trascurare
                                la presenza online può significare perdere preziose opportunità. Investire tempo e risorse nella gestione
                                della propria presenza online può portare a risultati significativi in termini di visibilità, reputazione e, alla
                                fine, di successo commerciale.
                                Questo in un momento in cui le tracce digitali confermano un crescente interesse verso Piombino, tant’è
                                nella Top 5 della categoria degli affittacamere e delle case/appartamenti diverse strutture di affittacamere
                                situate a Piombino risultano al secondo posto tra tracce digitali lasciate da possibili turisti.
                                Per “traccia digitale” ci riferiamo all’insieme unico e irripetibile di attività e azioni, tutte tracciabili,
                                manifestate da un utente in rete.
                                Per questo motivo, ci impegneremo a fornire un maggiore supporto alla presenza online delle attività
                                turistiche della zona. Grazie a questa collaborazione, le imprese potranno sfruttare al meglio le
                                opportunità offerte dal mondo digitale per attrarre visitatori e promuovere al meglio il territorio di Piombino.
                                Siamo convinti che investire in una presenza online efficace porterà benefici tangibili alle attività turistiche
                                locali e contribuirà a valorizzare ulteriormente le bellezze del nostro territorio e della nostra città.</p>,
                        },
                        {
                            key: '8',
                            label: 'Azioni',
                            children: <p>Azioni:<br />
                                • Creare un piano turistico che valorizzi l'ambiente naturale e antropico di Piombino, evitando un
                                turismo di rapina e una cementificazione sconnessa.<br />
                                • Rivalutare la storia millenaria e il patrimonio artistico di Piombino, promuovendo la conoscenza
                                e l'esperienza diretta della città.<br />
                                • Potenziare il turismo culturale per prolungare la stagione turistica e garantire introiti costanti,
                                emancipando Piombino dalla desertificazione invernale.<br />
                                • Sviluppare vie alternative al turismo balneare, come il ciclo-turismo e il turismo sportivo, per
                                attrarre visitatori durante la stagione primaverile.<br />
                                • Creare un luogo semipermanente per concerti per arricchire la stagione culturale di Piombino e
                                rilanciare la città nello scenario artistico italiano.<br />
                                • Implementare un nuovo marketing strategico per rendere Piombino riconoscibile come meta
                                turistica, collaborando con programmi televisivi e riviste del settore.<br />
                                • Promuovere l'innovazione tecnologica e la digitalizzazione nel sistema turistico toscano per
                                conferire visibilità alle aree e strutture meno note.<br />
                                • Intervenire pubblicamente per digitalizzare i territori e potenziare le infrastrutture turistiche,
                                sfruttando le tecnologie digitali per attrarre visitatori e favorire la ripresa del settore.</p>,
                        }
                    ]}
                />
                <Divider className='divider' orientation="center">Cultura</Divider>
                <Collapse
                    size="large"
                    items={[
                        {
                            key: '1',
                            label: 'Introduzione all cultura',
                            children: <p>La cultura rappresenta un pilastro fondamentale per lo sviluppo della nostra città. La riscoperta delle
                                nostre origini storiche non solo stimola il senso di appartenenza al territorio, ma ci permette di
                                comprendere meglio il nostro passato e di preservare la nostra memoria collettiva. È essenziale
                                valorizzare e riscoprire i "Luoghi della storia", che custodiscono i segreti di come Piombino abbia
                                contribuito all'evoluzione della storia nel corso dei secoli.
                                I reperti etruschi, le testimonianze medievali e i rifugi bellici sono tesori che devono essere resi accessibili
                                ai cittadini e ai visitatori, affinché la memoria storica della nostra città non venga dimenticata. La cultura
                                non è solo storia, ma anche arte e scienza. È un mezzo di comunicazione universale che ci permette di
                                crescere come individui e come comunità consapevole.
                                Un'amministrazione pubblica ha il compito di promuovere e preservare la cultura e l'arte, che
                                rappresentano una missione fondamentale per il benessere della società.
                                Inoltre, la conservazione del patrimonio marino di Piombino, ricco di flora, fauna e relitti unici al mondo,
                                è essenziale per valorizzare la nostra ricchezza naturalistica e storica.
                                In conclusione, la cultura deve essere al centro delle politiche di sviluppo della città, garantendo la
                                conservazione e la valorizzazione del nostro passato per costruire un futuro migliore per tutti i cittadini.</p>,
                        },
                        {
                            key: '2',
                            label: "Massimizzare il potenziale culturale di Piombino: Un'opportunità per lo Sviluppo Territoriale",
                            children: <p>Piombino, ricca di risorse storiche e culturali, merita di essere valorizzata adeguatamente per diventare
                                una destinazione turistica di rilievo. Per conseguire questo obiettivo, è essenziale coordinare
                                l'Assessorato alla Cultura e quello al Turismo al fine di massimizzare il potenziale della storia culturale
                                locale e renderla un'attrattiva turistica di primo piano.
                                La promozione di eventi che celebrino gli avvenimenti storici e culturali di Piombino è fondamentale per
                                riportare in vita i momenti salienti della sua storia.
                                Per arricchire l'offerta culturale, oltre alla stagione teatrale al Metropolitan, proponiamo di aggiungere
                                eventi musicali come concerti jazz e blues. Inoltre, l'istituzione di concorsi dedicati alla musica, poesia,
                                prosa, pittura e scultura per i giovani tra i 13 e i 19 anni, coinvolgendo esperti artisti nazionali e offrendo
                                borse di studio ai talenti emergenti, potrebbe contribuire significativamente alla crescita culturale della
                                Val Di Cornia.
                                È altresì importante mantenere la sicurezza e l'accessibilità al pubblico dei rifugi della seconda guerra
                                mondiale, così come per la manutenzione e la valorizzazione delle mura leonardesche. Solo attraverso
                                un impegno congiunto e una gestione oculata delle risorse culturali e storiche, Piombino potrà
                                trasformarsi in una destinazione di rilievo nel panorama turistico internazionale.
                                Il miglioramento della cartellonistica turistica culturale cittadina e l'installazione di nuove forme di
                                promozione come App o QRcode sono strategie fondamentali per valorizzare i monumenti e i luoghi
                                storici di una città. Queste tecnologie digitali possono rendere l'esperienza turistica più interattiva e
                                coinvolgente, fornendo ai visitatori informazioni dettagliate e approfondite sui siti di interesse.
                                Inoltre, la collaborazione attiva con le associazioni di guide turistiche è essenziale per creare escursioni
                                guidate di qualità alla scoperta dei "Luoghi della Storia". È importante che gli itinerari siano costruiti in
                                modo da trasmettere il racconto in modo coinvolgente e appassionante, evitando di limitarsi a un
                                semplice elenco di monumenti.
                                La promozione di eventi sull'Arte di alto livello e lo spazio dedicato ai giovani artisti sono iniziative che
                                possono contribuire a valorizzare il patrimonio culturale di una città. Offrire opportunità ai talenti
                                emergenti di esprimere il loro potenziale e di crescere professionalmente può portare a futuri successi e
                                a una maggiore visibilità per il territorio.
                                In conclusione, investire nella valorizzazione dei monumenti, nell'organizzazione di escursioni guidate
                                coinvolgenti e nella promozione dell'Arte di qualità sono passi fondamentali per consolidare l'identità
                                culturale di una città e per attrarre un turismo consapevole e interessato alla storia e alla bellezza dei
                                luoghi che visita.</p>,
                        }
                    ]}
                />
                <Divider className='divider' orientation="center">Piano regolatore della Cultura</Divider>
                <Collapse
                    size="large"
                    items={[
                        {
                            key: '1',
                            label: 'Introduzione',
                            children: <p>Il Progetto Piano Regolatore della Cultura mira a rivoluzionare l'accesso alla cultura e a promuovere lo
                                sviluppo culturale e turistico attraverso la riqualificazione degli edifici esistenti nella città.</p>,
                        },
                        {
                            key: '2',
                            label: 'Polo culturale',
                            children: <p>Il Polo culturale, inizialmente sottodimensionato per accogliere l'intero patrimonio librario comunale,
                                potrebbe essere riconvertito in un centro archivistico di ricerca e studio, integrando l'archivio storico
                                attualmente ospitato nella Casa delle Bifore, l'archivio delle acciaierie e quello del vicariato. Questo nuovo
                                polo culturale potrebbe offrire servizi specialistici e funzionali, come sale conferenze, aule studio e spazi
                                per la divulgazione culturale, fungendo da punto di collegamento con istituti accademici.</p>,
                        },
                        {
                            key: '3',
                            label: 'Biblioteca',
                            children: <p>Per quanto riguarda la Biblioteca, si propone di utilizzare lo stabile dell'ex Pretura, caratterizzato da spazi
                                ampi, luminosi e versatili, per ospitare l'intero patrimonio librario. Questa posizione strategica,
                                centralmente collocata in città, consentirebbe un facile accesso e interazione con le attività scolastiche,
                                sfruttando anche le terrazze per eventi all'aperto. Il trasferimento dell'Associazione Assj del Judo in una
                                struttura più idonea consentirebbe di liberare spazio per la Biblioteca, mentre Unitre e l'Agenzia delle
                                entrate potrebbero essere rialloggiati in locali più adeguati tra gli immobili comunali non utilizzati.
                                In sintesi, il Piano Regolatore della Cultura propone una visione innovativa per valorizzare il patrimonio
                                culturale della città, migliorando l'accessibilità e la fruizione dei servizi culturali per i cittadini e i visitatori,
                                con un occhio attento alla funzionalità e alla sostenibilità degli interventi proposti.</p>,
                        },
                        {
                            key: '4',
                            label: 'Circolino Acciaierie, Centro Giovani e Casa delle Bifore',
                            children: <p>La riqualificazione e il recupero di edifici storici come il Circolino delle Acciaierie e la Casa delle Bifore
                                rappresentano un'opportunità significativa per arricchire l'offerta culturale e sociale della città. Il Circolino
                                potrebbe diventare un polo artistico e culturale gestito da un consorzio di associazioni, offrendo spazi per
                                eventi, laboratori e attività culturali. Allo stesso modo, lo spostamento dell’Archivio Storico nel polo di
                                piazza Manzoni libererebbe l’immobile di via Ferruccio in cui ha attualmente sede e la Casa delle Bifore
                                potrebbe trasformarsi in un centro di coordinamento per i vari enti culturali della città, favorendo la
                                collaborazione e la sinergia tra di essi.
                                Queste proposte, se attuate sotto la supervisione dell'assessorato alla cultura, potrebbero contribuire in
                                modo significativo alla valorizzazione del patrimonio storico e alla promozione della cultura nel territorio.</p>,
                        },
                        {
                            key: '5',
                            label: 'Polo scientifico e Centro di Biologia Marina',
                            children: <p>Palazzo Appiani è da anni la sede di un importante Centro di Biologia Marina, che purtroppo è stato poco
                                valorizzato nelle passate amministrazioni. Tuttavia, questo Centro merita di essere ripristinato nelle sue
                                piene potenzialità, recuperando la sua funzione didattica e divulgativa e potenziandolo ulteriormente.
                                Si tratta di un polo di ricerca unico nel suo genere, in grado di attingere direttamente acqua marina e
                                specie animali e vegetali dal territorio circostante.
                                Il Centro di Biologia ospita anche un Museo con pezzi rari e pregiati, che potrebbe diventare
                                un'importante attrazione per il turismo scolastico e culturale.
                                Inoltre, sarebbe opportuno riallacciare i contatti con il CNR, che in passato aveva dei laboratori e un
                                Centro di ricerca presso Palazzo Appiani.
                                La presenza di una sala conferenze al piano terreno offre l'opportunità di organizzare seminari e convegni
                                scientifici, non solo limitati alla biologia marina ma ad un ambito più ampio.
                                Un Polo scientifico nel Centro Storico della città sarebbe un elemento distintivo e attrattivo, in grado di
                                attirare scienziati, ricercatori ed esperti da altre città.
                                34
                                È importante non trascurare o abbandonare una struttura così significativa per la diffusione della cultura
                                e della conoscenza scientifica e tecnologica. Investire nel potenziamento e nella pubblicizzazione del
                                Centro di Biologia Marina e del Museo presso Palazzo Appiani sarebbe un passo fondamentale per
                                valorizzare il patrimonio scientifico della nostra comunità.</p>,
                        },
                        {
                            key: '6',
                            label: 'Ostello artisti',
                            children: <p>L'Ostello Artisti è un progetto che mira a promuovere arte e al tempo stesso per far restituire arte alla
                                città.
                                Questi spazi, messi a disposizione dalle amministrazioni comunali, possono contribuire a promuovere
                                l'arte e a favorire la creazione di relazioni proficue nel panorama culturale cittadino.
                                La possibilità di avere immobili adatti alle attività artistiche può attrarre persone provenienti da diverse
                                parti d'Italia e d'Europa, che lavorerebbero a progetti artistici nel lungo periodo. Inoltre, l'Ostello Artisti
                                potrebbe essere un punto di riferimento per piccoli teatri e giovani compagnie che non dispongono di
                                spazi adeguati per le proprie attività.
                                Promuovere l'arte attraverso l'Ostello Artisti significa non solo offrire supporto alle associazioni artistiche,
                                ma anche contribuire alla valorizzazione culturale della città. Ad esempio, la presentazione degli
                                spettacoli proprio a Piombino potrebbe favorire la diffusione e l'apprezzamento dell'arte locale.
                                In conclusione, l'Ostello Artisti rappresenta un'opportunità per promuovere l'arte e per arricchire il tessuto
                                culturale della città, creando un ambiente favorevole alla creatività e alla collaborazione tra diverse realtà
                                artistiche.</p>,
                        },
                        {
                            key: '7',
                            label: 'Ristrutturazione immobili da dedicare alle manifestazioni artistiche',
                            children: <p>La valorizzazione del territorio attraverso la ristrutturazione di immobili per ospitare mostre ed eventi
                                culturali di alto livello rappresenta un'opportunità importante per Piombino. La creazione di una stagione
                                di mostre d'arte con opere di artisti nazionali e internazionali, l'organizzazione di premi letterari tematici
                                e l'implementazione di eventi di livello nazionale come festival della matematica, dell'astronomia, tornei
                                di scacchi o festival musicali potrebbero contribuire significativamente alla promozione della cultura e
                                all'attrattiva turistica della città. Inoltre, riprendere esperienze passate di successo come "Extempore" e
                                "Corto Nanni" potrebbe rappresentare un punto di partenza per la realizzazione di nuove iniziative
                                culturali. Piombino potrebbe diventare un punto di riferimento per l'organizzazione di festival e eventi di
                                alto livello, contribuendo così alla crescita e alla valorizzazione del territorio.
                                In ottica di riqualificazione e valorizzazione del territorio, è fondamentale individuare nuove destinazioni
                                per gli edifici attualmente in stato di degrado o sottoutilizzati. Il recupero di tali strutture potrebbe favorire
                                lo sviluppo di attività culturali, contribuendo così a ridare vitalità al tessuto sociale e a promuovere il
                                turismo culturale come volano economico per la città.</p>,
                        },
                        {
                            key: '8',
                            label: 'Parco 8 Marzo: spettacoli viaggianti e area feste',
                            children: <p>L’area del Parco 8 Marzo potrebbe essere oggetto di una riorganizzazione totale, con la creazione di una
                                zona dedicata alle feste che attualmente manca in città. Questo spazio potrebbe essere utilizzato per
                                eventi organizzati da associazioni sportive, politiche e culturali, oltre che per sagre cittadine e spettacoli
                                viaggianti.
                            </p>
                        },
                        {
                            key: '9',
                            label: 'Scuderie del Castello, Asilo Pro Patria e immobile Banda Galantara e altri',
                            children: <p>Le Scuderie del Castello, l'ex Asilo Pro Patria e l'immobile Banda Galantara rappresentano invece delle
                                opportunità per realizzare un complesso dedicato agli eventi culturali. Il loro restauro urgente potrebbe
                                trasformarli in luoghi di incontro e di sviluppo culturale, contribuendo così a arricchire l'offerta culturale
                                della città.
                                In conclusione, il recupero di edifici in disuso o in stato di degrado rappresenta un'importante opportunità
                                per promuovere la cultura, la socializzazione e il turismo nella città. Investire in progetti di riqualificazione
                                di queste strutture potrebbe portare a una rinascita del territorio e a una maggiore attrattività per residenti
                                e visitatori.
                                Il ripristino e il riutilizzo di edifici storici e spazi sottoutilizzati possono contribuire in modo significativo alla
                                riqualificazione e alla vitalità della città. Tra gli immobili identificati per potenziali restauri e riutilizzi, ci
                                sono diverse opportunità per destinare tali spazi a varie attività culturali, sociali e ricreative.
                                Gli immobili elencati, come l'Immobile magazzino alla Stazione Ferroviaria, l'Ex Macelli, l'Ex sede Vigili
                                del Fuoco, Sant’Antimo sopra i Canali, l'ex convento degli Agostiniani accanto alla Concattedrale di
                                Sant’Antimo e il Magazzino delle “Cose di Ieri”, offrono un ampio spettro di possibilità per essere
                                restaurati in modo mirato in base alle esigenze di utilizzo. La collaborazione dei tecnici comunali potrebbe
                                facilitare la selezione e il restauro di questi edifici, garantendo un approccio parametrato che massimizzi
                                il loro potenziale.
                                Inoltre, è importante considerare il riutilizzo di luoghi come il Vecchio teatrino dietro il Convento di San
                                Giovanni di Dio, il Vallone, il teatro di piazza Costituzione e la chiesa di Sant’Antimo sopra i Canali. Questi
                                spazi, se adeguatamente ripristinati e gestiti, potrebbero diventare punti focali per attività culturali, sociali
                                e di intrattenimento, arricchendo la vita della comunità e valorizzando il patrimonio storico e culturale
                                della città.
                                Concludendo, il restauro e il riutilizzo di questi immobili e luoghi rappresentano un'opportunità
                                significativa per arricchire la vita cittadina, promuovere la partecipazione comunitaria e preservare il
                                patrimonio storico e culturale. Attraverso un approccio olistico e collaborativo, è possibile realizzare
                                progetti di riqualificazione che soddisfino le esigenze della comunità e contribuiscano a una crescita
                                sostenibile e inclusiva della città.</p>,
                        }
                    ]}
                />
                <Divider className='divider' orientation="center">Trasporti</Divider>
                <Collapse
                    size="large"
                    items={[
                        {
                            key: '1',
                            label: 'Trasporti',
                            children: <p>Siamo certi che una città che, grazie alla rete ferroviaria, è in grado di far giungere le persone, intese non
                                solo come cittadini ma anche come presenze turistiche, nel cuore della città stessa possa essere ritenuta
                                di serie A.
                                A causa delle politiche sia delle amministrazioni passate sia di RFI, abbiamo visto un graduale
                                abbandono della stazione di Piombino diventata sempre meno la stazione dei Piombinesi. Questa, un
                                po’ alla volta, per la scarsità di collegamenti e di parcheggi, è stata oggetto di abbandono totale sia delle
                                infrastrutture, che si trovano in uno stato di grande degrado, sia da parte dei passeggeri che con il
                                passare del tempo hanno visto chiudere l’edicola, il bar e la biglietteria.
                                Sempre più si è affermata l’idea che la stazione dei piombinesi sia Campiglia Marittima. Niente di più
                                sbagliato! Una riqualificazione della stazione centrale, oltre che dare lustro al centro della città, servirebbe per
                                eliminare fenomeni malavitosi e di spaccio che purtroppo stanno sempre più dilagando e, certamente,
                                sarebbe di stimolo per il turista concedersi una sosta prima dell’imbarco per l’Elba. A tale scopo, una
                                forma di prima accoglienza, potrebbe essere la collocazione della Pro Loco negli uffici dell’ex biglietteria
                                all’interno della stazione.
                                Andranno poi evidenziate le carenze di servizio ferroviario, evidenti principalmente nella fascia mattutina
                                (per Campiglia Marittima dalle 9,31 si passa alle 15,31) e deve essere superato una volta per tutte il
                                concetto di “ramo secco”.
                                La linea Piombino/Campiglia è un ramo secco solo per volere politico.
                                Questo porta all’abbandono e alla soppressione di treni al benché minimo problema. Un’amministrazione
                                che pretenda il bene dei cittadini deve insistentemente farsi portavoce nei confronti di Trenitalia affinché
                                ciò non avvenga, vista anche la mancanza di una visione nazionale sul piano dei trasporti.
                                Si dovrebbero prevedere, durante il periodo estivo, delle corse ad opportuni orari serali che svolgano il
                                servizio Campiglia Marittima – Piombino e viceversa con fermata nella stazione di Populonia. Questa
                                semplice soluzione permetterebbe ai turisti che alloggiano nelle residenze turistiche di Baratti, Populonia
                                e Poggio all’agnello di recarsi in centro con mezzi pubblici incrementando l’aspetto turistico serale della
                                città senza ingolfarlo a livello di parcheggi rientrando sempre con lo stesso mezzo in tarda serata.
                                Sempre con lo scopo di aumentare la fruibilità del centro storico, dovrà essere valutata l’opportunità di
                                istituire corse di autobus che colleghino gli approdi turistici al cuore pulsante della città, luogo di
                                manifestazioni ed eventi.
                                Nell’ottica di questa revisione/riqualificazione rientra anche l’arretramento dei binari della stazione con la
                                demolizione degli edifici posti lungo via Carducci che permetterebbe un ampliamento dell’attuale piazza
                                Gramsci ed un collegamento più diretto fra la via Pacinotti e via Roma. Tutto questo andrebbe eseguito
                                senza la riduzione di lunghezza dei binari in modo tale da continuare a permettere l’arrivo dei convogli di
                                maggiori dimensioni che consentano, come adesso, il collegamento diretto (senza cambi nella stazione
                                di Campiglia Marittima) con Livorno, Pisa e Firenze.
                                Ultimo ma non per importanza, in vista anche delle irrimandabili bonifiche, un nuovo collegamento più
                                veloce con l’area portuale.
                                Questo si renderà possibile con una totale riqualificazione della stazione “Porto Vecchio di Piombino“,
                                oggi esclusa dal servizio viaggiatori.
                                Questa andrebbe ingrandita, modernizzata e attrezzata per accogliere il flusso di turisti per l’Elba.
                                Nell’ottica di migliorare/velocizzare il servizio, i viaggiatori arrivando nella suddetta stazione potrebbero
                                raggiungere il porto che da lì si trova a solo 200 metri, che potrebbero essere serviti da tapis roulant.
                                Si tratterebbe, nello specifico, di sopprimere il tratto di circa 1200m che attualmente copre la tratta
                                Piombino/Piombino Marittima.
                                Questo permetterebbe di recuperare i tempi necessari per l'inversione di marcia del treno e quelli di
                                percorrenza accorciando la durata del tragitto Campiglia Marittima/Porto di circa 15/20 minuti ed
                                istituendo, in pratica, una efficiente metropolitana di superficie.
                                Per raggiungere i moli più distanti, ad esempio quelli da cui partono le navi per Olbia nel periodo estivo,
                                si organizzerà un servizio navetta fatto con autobus, come già esistente in altri porti, come Olbia in
                                Sardegna, gestito dalle compagnie di navigazione.
                                Analogamente a quanto detto sopra, si istituirà un servizio serale estivo di autobus che svolga lungo la
                                costa est, servendo campeggi e strutture turistiche, lo stesso servizio del treno sull’altro lato del
                                promontorio.
                                Analizzando invece il servizio cittadino di autobus, ci accorgiamo che la flotta, interamente composta da
                                bus di 12 metri di lunghezza, consente il transito di tali mezzi solo nelle vie più grandi a discapito di
                                anziani e disabili che hanno difficoltà a raggiungere fermate dell’autobus distanti dalla propria abitazione.
                                La re-istituzione di autobus di minori dimensioni, tipo Pollicino, permetterebbe una maggiore
                                capillarizzazione del servizio, eventualmente anche a chiamata previa prenotazione. Saranno anche da
                                rimodulare sia i collegamenti con i quartieri più distanti, quali Riotorto e Populonia, sia con quelli più
                                vicini come Cotone e Poggetto, ma serviti da vettori extra urbani. Mentre, per andare incontro alle
                                esigenze della scuola primaria, si è pensato ad un servizio con un responsabile a bordo che prenda in
                                consegna il bambino dalla fermata del bus fino alla scuola, per gli istituti secondari saranno
                                adeguatamente rimodulati gli orari dei bus nelle fasce orarie di entrata e uscita delle scuole col fine di
                                renderle più attrattive per gli studenti residenti fuori dal comune. Sempre allo stesso scopo andranno
                                individuati adeguati spazi in prossimità degli istituti dove gli studenti possano fruire del pranzo e studiare
                                permettendogli così di frequentare attività extra scolastiche e/o sportive nel nostro comune
                                Per quanto riguarda, invece, il trasporto extraurbano, contestiamo i tagli operati da TPL Autolinee
                                Toscane a danno della nostra Provincia e dei lavoratori che utilizzano i mezzi pubblici pere recarsi presso
                                il propri posto di lavoro nella nostra città.
                                Il trasporto pubblico è un diritto e deve tutelare soprattutto le fasce deboli della popolazione e chi non ha
                                mezzi per spostarsi. Spezzare la catena dei collegamenti in una provincia già provata dal taglio di 440.000
                                chilometri di corse è inconcepibile.
                                Ci impegneremo per cercare di ripristinare le corse tagliate.
                                </p>
                        }
                    ]}
                />
                <Divider className='divider' orientation="center">Sport</Divider>
                <Collapse
                    size="large"
                    items={[
                        {
                            key: '1',
                            label: 'Sport',
                            children: <p>Lo sport occupa un ruolo molto importante nella vita dei giovani perché, grazie ad esso, sifanno nuove
                            amicizie, si abbattono le barriere culturali, si cresce e si impara ad osservare le regole e a rispettare gli
                            altri, compagni ed avversari; con lo sport si acquista fiducia in sestessi, si impara ad accettare le sconfitte,
                            a vivere in un gruppo, una comunità di persone che condivide un obiettivo.
                            Una città che crede nello sport è una città che crede nella propria comunità e nella sua crescita sociale,
                            ed è proprio questo il ruolo della pubblica amministrazione: evidenziare il ruolo sociale ed educativo
                            dello sport, al di là dei risultati agonistici.
                            Il nostro programma per lo sport abbraccia diversi aspetti che si intrecciano per la città e la popolazione.
                            Le associazioni sportive saranno chiamate ad affrontare una serie di impegni.
                            L’amministrazione si impegnerà a trovare soluzioni per aumentare ed agevolare l’accoglienza fuori
                            stagione per le manifestazioni sportive con durata superiore alla singola giornata.
                            A questo scopo potrebbe essere previsto un Ostello per lo Sport, una struttura che punti all’accoglienza
                            ricettiva a basso costo.
                            In questo modo si vuole dare il via non solo ad un maggior interesse per quanto riguarda lo sport sia dei
                            nostri atleti che dei giovani residenti nei comuni limitrofi, ma si attiverà anche un ritorno d’immagine e di
                            presenze che saranno quindi destagionalizzate facendo così conoscere il comune di Piombino anche in
                            altri periodi.
                            Vi è inoltre la necessità di dare più spazio alla domanda di sport da parte degli adulti ma soprattutto dei
                            ragazzi, e voce alle loro alle esigenze.
                            Per questo è necessario andare a una riprogrammazione degli spazi e a un censimento delle palestre.
                            L’obiettivo è quello di prevedere almeno due palestre da dedicare agli sport emergenti sul nostro
                            territorio, come le arti marziali, le scuole di danza, e la scherma, che necessità di spazi diversi dagli attuali
                            per poter crescere.
                            Con il censimento sarà possibile programmare efficacemente gli interventi di manutenzione che
                            necessitano strutture di questo tipo.
                            Pensiamo anche alla costituzione di una Consulta per lo Sport che avrà un compito importante
                            nell’organizzazione e nella gestione degli eventi sportivi, nonché nella distribuzione dei contributi alle
                            Associazioni.
                            La Consulta, nel coordinare le attività sportive, garantirà una maggiore coesione e sinergia tra le varie
                            realtà sportive presenti sul territorio.
                            La Consulta dello Sport, stabilirà criteri chiari e trasparenti per l’assegnazione dei contributi, a garanzia
                            di una distribuzione equa e basata su parametri oggettivi. Questo permetterà di favorire lo sviluppo e la
                            crescita delle varie discipline sportive, incentivando la partecipazione e l'attività sportiva a tutti i livelli.
                            Saranno ovviamente portati avanti i progetti di miglioramento e manutenzione degli attuali campi sportivi
                            e se possibile verranno introdotte nuove discipline sportive che potranno essere effettuate all’interno
                            delcomune stesso quali ad esempio percorsi di BMX e di Mountain Bike o la Pista da Skateboard.
                            Ci impegneremo per creare, insieme alle Associazioni sportive, dei centri di aggregazione e studio in
                            modo da facilitare la permanenza dopo l’attività scolastica degli atleti residenti fuori città, cosi da poter
                            agevolmente effettuare lo sport senza ulteriori spostamenti
                            Le associazioni sportive saranno incentivate anche ad assicurare un ruolo di integrazione fra gli atleti
                            provenienti da differenti realtà religiose, etniche ed economiche.
                            Inoltre un occhio attento sarà rivolto alle associazioni con attività sportiva leggera per la terza età e quelle
                            per la pesca sportiva da riva.
                            Le associazioni sportive ricopriranno un ruolo di primaria importanza, verrà pertanto aperto un canale di
                            comunicazione privilegiato ed assiduo tra le società sportive e il Comune per confrontarsi sulle varie
                            problematiche con l’obiettivo di creare una maggiore collaborazione.
                            L'Amministrazione dovrà farsi carico dell’attività sportiva giovanile, di qualsiasi disciplina, per
                            salvaguardare la salute e l’educazione dei giovani e rappresentare un punto di riferimento per la
                            continuazione delle attività oltre il periodo scolastico</p>,
                        }
                    ]}
                />
                <Divider className='divider' orientation="center">Scuola pubblica e istruzione</Divider>
                <Collapse
                    size="large"
                    items={[
                        {
                            key: '1',
                            label: 'Scuola pubblica e istruzione',
                            children: <p>La scuola pubblica è un’Istituzione fondamentale per un Paese, e dovrebbe garantire a tutti i cittadini la
                            stessa possibilità di istruirsi e crescere come persone nella loro interezza, come previsto negli articoli 3
                            e 33 della nostra Costituzione.
                            Per la nostra coalizione tali principi sono imprescindibili, ed i base a questo, prevediamo di mettere in
                            campo tutte le misure possibili per rispettare e favorire il diritto all’Istruzione.
                            La scuola pubblica non può e non deve essere mai considerata un centro di costo, sul quale intervenire
                            con tagli e riduzioni, bensì come un investimento per il futuro. Un luogo dove si formano le prossime
                            generazioni dovrebbe essere la priorità per chi Governa, e dovrebbe stare al centro di ogni azione e di
                            ogni intervento.
                            La futura amministrazione si impegnerà a mantenere e migliorare l’offerta formativa pubblica di ogni
                            ordine e grado sul nostro territorio, agendo anche nei confronti dei soggetti terzi che collaborano al
                            funzionamento dell’offerta stessa, come l’ufficio scolastico regionale o provinciale, le aziende di trasporto,
                            le associazioni presenti sul territorio.
                            La presenza di strutture scolastiche su un territorio ne garantisce la vitalità, ne accresce la rilevanza e
                            rappresenta una ricchezza da non disperdere ma, anzi, da potenziare.
                            E’ necessario organizzare e potenziare il trasporto pubblico, affinché risulti più efficiente e funzionale e
                            non renda penalizzante dal punto di vista logistico venire a studiare a Piombino per i non residenti
                            nell’area urbana del nostro Comune o nei Comuni limitrofi.
                            Tenuto conto del fatto che ormai l’offerta formativa non si limita più alle sole lezioni mattutine, ma sia
                            articola in svariate attività pomeridiane sotto forma di progetti, corsi di potenziamento e recupero, attività
                            di PCTO (ex alternanza scuola - lavoro) pensiamo che sia necessario prevedere delle strutture che
                            possano accogliere nella pausa pranzo gli studenti che attendono il rientro, e che possano rappresentare
                            anche un punto di ritrovo per studio collettivo ed attività di gruppo.
                            Tali strutture possono essere immaginate nelle già presenti sedi di alcune associazioni, come ad esempio
                            le strutture del CIASA o del Centro Giovani, coinvolte con modalità e convenzioni opportune, oppure
                            recuperando strutture già presenti ma non utilizzate o in stato di decadenza come ad esempio l’ex
                            Circolino, che nella nostra visione andrebbe recuperato e restituito alla cittadinanza.
                            Non possiamo immaginare che la Scuola possa essere slegata dalla cultura e dalle attività culturali della
                            nostra città. Sarebbe infatti opportuno riconsegnare una biblioteca moderna e funzionale alla nostra città
                            e ripensare i luoghi della cultura e degli eventi culturali. Per questo argomento rimandiamo alla voce
                            “cultura” del nostro programma ed al piano strutturale della cultura.
                            Per gli studenti sarebbe necessario infatti immaginare luoghi attrezzati di ritrovo e di condivisione, dove
                            sia possibile confrontarsi, studiare, svagarsi e socializzare, in sicurezza e tranquillità.
                            Al fine di garantire l’inclusione e l’accesso di tutti all’Istruzione pubblica, pensiamo inoltre che
                            l’amministrazione dovrebbe favorire attività di doposcuola, e dovrebbe organizzare e potenziare la rete
                            di supporto costituita da educatori, mediatori culturali, assistenti sociali e psicologi, in modo tale da
                            sostenere insegnanti e docenti curriculari nella gestione dei casi di fragilità e difficoltà di tipo linguistico,
                            psicologico, socio culturale, comportamentale ed economico.
                            Nella nostra visione, nessun alunno deve essere abbandonato o non supportato, in quanto crediamo
                            nell’equità più che nell’uguaglianza. Ogni persona deve essere messa in grado di sviluppare le proprie
                            capacità, conoscenze e competenze, e deve essere messa nelle condizioni più adatte a farlo in base alle
                            proprie condizioni ed attitudini, in modo peculiare e specifico. E per farlo è necessario attivare tutte le
                            risorse necessarie.
                            Per la nostra coalizione la Scuola dovrebbe essere uno dei fulcri centrali per le azioni di governo di una
                            città, non solo per il presente, ma anche per una visione a lungo termine di crescita e sviluppo di un
                            territorio.</p>,
                        }
                    ]}
                />
            </>
        </div>
    );
}

export default ProgramPage;
