let id = 1;
const products = [
  {
    id: id,
    name: 'Vippe extensions',
    type: 'Vipper',
    image: '../images/lashes1.jpg',
    excerpt: 'Noe for alle kvinner som ønsker seg å få lengre vipper',
    description: '1:1 styling er en klassisk metode som består i å feste en falsk øyevippe til en ekte vippe. Effekten her er veldig      naturlig, og øyet er litt skissert. Synlig her er først og fremst forlengelse, krølling og mørklegging av øyevipper, men det er ingen fortykningseffekt. Det er et godt valg for folk som ønsker å forsiktig understreke utseendet, uten den synlige effekten av falske øyevipper. Det vil fungere spesielt godt med naturlig ganske tykke øyevipper.'
  },
  {
    id: ++id,
    name: 'Bryn',
    type: 'Ansiktsbehandling',
    image: '../images/eyebrows.jpg',
    excerpt: 'Excerpt om bryn',
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
];

console.log(products);



