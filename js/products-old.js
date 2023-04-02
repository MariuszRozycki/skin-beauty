let id = 1;
const products = [
  {
    id: id,
    name: 'Vippe extensions, nytt sett (klassisk)',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Noe for alle kvinner som ønsker seg å få lengre vipper',
    description: '1:1 styling er en klassisk metode som består i å feste en falsk øyevippe til en ekte vippe. Effekten her er veldig      naturlig, og øyet er litt skissert. Synlig her er først og fremst forlengelse, krølling og mørklegging av øyevipper, men det er ingen fortykningseffekt. Det er et godt valg for folk som ønsker å forsiktig understreke utseendet, uten den synlige effekten av falske øyevipper. Det vil fungere spesielt godt med naturlig ganske tykke øyevipper.'
  },
  {
    id: ++id,
    name: 'Vippe extensions, nytt sett mix (lett volum)',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Noe delikat, men samtidig vil skjønnheten din bli enda bedre fremhevet',
    description: '2D-metoden for vippeforlengelse og 3D-metoden er forskjellige lysvolumer. Denne vippeforlengelsen består av å lime 2-3 falske øyevipper på en ekte øyenvippe. I dette tilfellet får vi ikke bare lengde og krøll, men også volum.'
  },
  {
    id: ++id,
    name: 'Vippextention, nytt sett (volum)',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Excerpt om Vippextention, nytt sett (volum)',
    description: '2D-metoden for vippeforlengelse og 3D-metoden er forskjellige lysvolumer. Denne vippeforlengelsen består av å lime 2-3 falske øyevipper på en ekte øyenvippe. I dette tilfellet får vi ikke bare lengde og krøll, men også volum.'
  },
  {
    id: ++id,
    name: 'Vippe extensions, nytt sett ( mega volum )',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Excerpt om Vippe extensions, nytt sett ( mega volum )',
    description: '2D-metoden for vippeforlengelse og 3D-metoden er forskjellige lysvolumer. Denne vippeforlengelsen består av å lime 2-3 falske øyevipper på en ekte øyenvippe. I dette tilfellet får vi ikke bare lengde og krøll, men også volum.'
  },
  {
    id: ++id,
    name: 'Vippeextensions påfyll (klassisk)',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Excerpt om Vippeextensions påfyll (klassisk)',
    description: 'Vippeextensions påfyll (klassisk). Denne vippeforlengelsen består av å lime 2-3 falske øyevipper på en ekte øyenvippe. I dette tilfellet får vi ikke bare lengde og krøll, men også volum.'
  },
  {
    id: ++id,
    name: 'Vippe Extensions, påfyll (volum)',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Excerpt om Vippe Extensions, påfyll (volum)',
    description: 'Vippe Extensions, påfyll (volum). Denne vippeforlengelsen består av å lime 2-3 falske øyevipper på en ekte øyenvippe. I dette tilfellet får vi ikke bare lengde og krøll, men også volum.'
  },
  {
    id: ++id,
    name: 'Nytt sett volum vippe-extensions ink farging og forming av bryn',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Excerpt om Nytt sett volum vippe-extensions ink farging og forming av bryn',
    description: 'Nytt sett volum vippe-extensions ink farging og forming av bryn. Denne vippeforlengelsen består av å lime 2-3 falske øyevipper på en ekte øyenvippe. I dette tilfellet får vi ikke bare lengde og krøll, men også volum.'
  },
  {
    id: ++id,
    name: 'Rask påfyll (klassisk)',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Excerpt om Rask påfyll (klassisk)',
    description: 'Rask påfyll (klassisk). Denne vippeforlengelsen består av å lime 2-3 falske øyevipper på en ekte øyenvippe. I dette tilfellet får vi ikke bare lengde og krøll, men også volum.'
  },
  {
    id: ++id,
    name: 'Rask påfyll mix/lett volum',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Excerpt om Rask påfyll mix/lett volum',
    description: 'Rask påfyll mix/lett volum. Denne vippeforlengelsen består av å lime 2-3 falske øyevipper på en ekte øyenvippe. I dette tilfellet får vi ikke bare lengde og krøll, men også volum.'
  },
  {
    id: ++id,
    name: 'Rask påfyll (volum)',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Excerpt om Rask påfyll (volum)',
    description: 'Rask påfyll (volum). Denne vippeforlengelsen består av å lime 2-3 falske øyevipper på en ekte øyenvippe. I dette tilfellet får vi ikke bare lengde og krøll, men også volum.'
  },
  {
    id: ++id,
    name: 'Fjerning av vippeextensions',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Excerpt om Fjerning av vippeextensions',
    description: 'Fjerning av vippeextensions. Denne vippeforlengelsen består av å lime 2-3 falske øyevipper på en ekte øyenvippe. I dette tilfellet får vi ikke bare lengde og krøll, men også volum.'
  },
  {
    id: ++id,
    name: 'Vippeløft inkl. farge av vipper',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Excerpt om Vippeløft inkl. farge av vipper',
    description: 'Vippeløft inkl. farge av vipper. Denne vippeforlengelsen består av å lime 2-3 falske øyevipper på en ekte øyenvippe. I dette tilfellet får vi ikke bare lengde og krøll, men også volum.'
  },
  {
    id: ++id,
    name: 'Vippeløft inkl. farge og form av bryn og vipper',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Excerpt om Vippeløft inkl. farge av vipper',
    description: 'Vippeløft inkl. farge av vipper. Denne vippeforlengelsen består av å lime 2-3 falske øyevipper på en ekte øyenvippe. I dette tilfellet får vi ikke bare lengde og krøll, men også volum.'
  },
  {
    id: ++id,
    name: 'Farging av vipper og bryn, samt forming av bryn',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Excerpt om Farging av vipper og bryn, samt forming av bryn',
    description: 'Farging av vipper og bryn, samt forming av bryn. Denne vippeforlengelsen består av å lime 2-3 falske øyevipper på en ekte øyenvippe. I dette tilfellet får vi ikke bare lengde og krøll, men også volum.'
  },
  {
    id: ++id,
    name: 'Farging og forming av bryn med voksing og napping',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Excerpt om Farging og forming av bryn med voksing og napping',
    description: 'Farging og forming av bryn med voksing og napping. Denne vippeforlengelsen består av å lime 2-3 falske øyevipper på en ekte øyenvippe. I dette tilfellet får vi ikke bare lengde og krøll, men også volum.'
  },
  {
    id: ++id,
    name: 'Farging av vipper',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Excerpt om Farging av vipper',
    description: 'Farging av vipper. Denne vippeforlengelsen består av å lime 2-3 falske øyevipper på en ekte øyenvippe. I dette tilfellet får vi ikke bare lengde og krøll, men også volum.'
  },
  {
    id: ++id,
    name: 'Farging av bryn',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Excerpt om Farging av bryn',
    description: 'Farging av bryn. Denne vippeforlengelsen består av å lime 2-3 falske øyevipper på en ekte øyenvippe. I dette tilfellet får vi ikke bare lengde og krøll, men også volum.'
  },
  {
    id: ++id,
    name: 'Forming av bryn med voksing',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Excerpt om Forming av bryn med voksing',
    description: 'Forming av bryn med voksing. Denne vippeforlengelsen består av å lime 2-3 falske øyevipper på en ekte øyenvippe. I dette tilfellet får vi ikke bare lengde og krøll, men også volum.'
  },
  {
    id: ++id,
    name: 'Påfyll mix vippe extensions etter3 uker',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Excerpt om Påfyll mix vippe extensions etter3 uker',
    description: 'Påfyll mix vippe extensions etter3 uker. Denne vippeforlengelsen består av å lime 2-3 falske øyevipper på en ekte øyenvippe. I dette tilfellet får vi ikke bare lengde og krøll, men også volum.'
  },
  {
    id: ++id,
    name: 'Nytt sett klassisk vippe-extensions ink farging og forming av bryn',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Excerpt om Nytt sett klassisk vippe-extensions ink farging og forming av bryn',
    description: 'Nytt sett klassisk vippe-extensions ink farging og forming av bryn. Denne vippeforlengelsen består av å lime 2-3 falske øyevipper på en ekte øyenvippe. I dette tilfellet får vi ikke bare lengde og krøll, men også volum.'
  },
  {
    id: ++id,
    name: 'Farge og forming av bryn',
    type: 'Vipper/bryn',
    image: '../images/women-lashes/pexels-tubarones-photography-3065453-1.jpg',
    excerpt: 'Excerpt om Farge og forming av bryn',
    description: 'Farge og forming av bryn. Denne vippeforlengelsen består av å lime 2-3 falske øyevipper på en ekte øyenvippe. I dette tilfellet får vi ikke bare lengde og krøll, men også volum.'
  },
  {
    id: ++id,
    name: 'Dyprens',
    type: 'Ansiktsbehandling',
    image: '../images/face.jpg',
    excerpt: 'Excerpt om dyprens',
    description: 'Dypt rengjørende ansiktsbehandling av huden, som gjøres for hånd for å få huden ren. Behandlingen inkluderer  peeling, rensing av huden, serum, maske og krem etter hudtype.'
  },
  {
    id: ++id,
    name: 'Ansiktsbehandling m/ultralyd',
    type: 'Ansiktsbehandling',
    image: '../images/face.jpg',
    excerpt: 'Excerpt om Ansiktsbehandling m/ultralyd',
    description: 'Ultralydsbehandling er en effektiv og skånsom dyp rengjøring og peeling av huden, som samtidig aktiverer hudens funksjoner.'
  },
  {
    id: ++id,
    name: 'Ansiktsbehandling',
    type: 'Ansiktsbehandling',
    image: '../images/face.jpg',
    excerpt: 'Excerpt om Ansiktsbehandling',
    description: 'Rengjøring, peeling, damp, massasje og maske. Tilpasses behovet til huden din. Maks 60 min.'
  },
  {
    id: ++id,
    name: 'Deluxe ansiktsbehandling',
    type: 'Ansiktsbehandling',
    image: '../images/face.jpg',
    excerpt: 'Excerpt om deluxe ansiktsbehandling',
    description: 'Rengjøring, peeling, damp, lang massasje og maske. Tilpasses behovet til huden din. Maks 90 min.'
  },
  {
    id: ++id,
    name: 'Ansiktsmassasje 30 min',
    type: 'Ansiktsbehandling',
    image: '../images/face.jpg',
    excerpt: 'Excerpt om ansiktsmassasje',
    description: 'Facial massage 30 minutes includes facial, neck and decollete massage. Includes peeling, face mask and cream matched to skin type at the end..'
  },
  {
    id: ++id,
    name: 'Ansiktsmassasje 60 min',
    type: 'Ansiktsbehandling',
    image: '../images/face.jpg',
    excerpt: 'Excerpt om ansiktsmassasje',
    description: 'Facial massage 60 minutes includes facial, neck and decollete massage. Includes peeling, face mask and cream matched to skin type at the end.'
  },
  {
    id: ++id,
    name: 'Ansiktsmassasje 3 behandlinger',
    type: 'Ansiktsbehandling',
    image: '../images/face.jpg',
    excerpt: 'Excerpt om ansiktsmassasje',
    description: 'Facial massage 60 minutes includes facial, neck and decollete massage. Includes peeling, face mask and cream matched to skin type at the end.'
  },
  {
    id: ++id,
    name: 'No needle Mesoterapi',
    type: 'Ansiktsbehandling',
    image: '../images/face.jpg',
    excerpt: 'Excerpt om ansiktsmassasje',
    description: 'No Needle Mesoterapi er en smertefri teknikk hvor man ved hjelp av ultralyd tilfører en coctail med aktive næringsstoffer som virker som en energibombe på hudcellene i det mellomste laget av huden. Behandlingen strammer opp, reduserer linjer, rynker og stimulerer stamcellene. Anbefales som en kur 4 - 6 behandlinger for optimal effekt. Behandlingen inkluderer enzyme peeling, meso coctail Klapp, maske og krem etter hudtype.'
  },
  {
    id: ++id,
    name: 'No needle Mesoterapi 3 behandlinger',
    type: 'Ansiktsbehandling',
    image: '../images/face.jpg',
    excerpt: 'Excerpt om ansiktsmassasje',
    description: 'No Needle Mesoterapi er en smertefri teknikk hvor man ved hjelp av ultralyd tilfører en coctail med aktive næringsstoffer som virker som en energibombe på hudcellene i det mellomste laget av huden. Behandlingen strammer opp, reduserer linjer, rynker og stimulerer stamcellene. Anbefales som en kur 4 - 6 behandlinger for optimal effekt. Behandlingen inkluderer enzyme peeling, meso coctail Klapp, maske og krem etter hudtype.'
  },
];

console.log(products);



