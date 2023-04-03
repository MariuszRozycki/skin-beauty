let id = 1;
let dataId = 0;
const products = [
  {
    id: id,
    name: 'Vipper',
    type: 'Vipper',
    image: '../images/lashes1.jpg',
    excerpt: 'Noe for alle kvinner som ønsker seg å få lengre vipper',
    treatments: [
      {
        dataId: ++dataId,
        treatment: `
      <li class="treatment-name" data-id=${dataId}>Vippe extentions</li>
      <li><p class="treatment-content--description" data-id=${dataId}>1:1 styling er en klassisk metode som består i å feste en falsk øyevippe til en ekte vippe. Effekten her er veldig      naturlig, og øyet er litt skissert. Synlig her er først og fremst forlengelse, krølling og mørklegging av øyevipper, men det er ingen fortykningseffekt. Det er et godt valg for folk som ønsker å forsiktig understreke utseendet, uten den synlige effekten av falske øyevipper. Det vil fungere spesielt godt med naturlig ganske tykke øyevipper.</p></li>
      `
      },
      {
        dataId: ++dataId,
        treatment: `
      <li class="treatment-name" data-id=${dataId}>Vippeløft</li>
      <li><p class="treatment-content--description" data-id=${dataId}>Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'</p></li>
      `
      },
    ]
  },
  {
    id: ++id,
    name: 'Bryn',
    type: 'Ansiktsbehandling',
    image: '../images/eyebrows.jpg',
    excerpt: 'Excerpt om bryn',
    description: 'Dypt rengjørende ansiktsbehandling av huden, som gjøres for hånd for å få huden ren. Behandlingen inkluderer  peeling, rensing av huden, serum, maske og krem etter hudtype.',
    treatments: [
      {
        dataId: ++dataId,
        treatment: `
      <li class="treatment-name" data-id=${dataId}>Øyebryn design med farging</li>
      <li><p class="treatment-content--description" data-id=${dataId}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of.</p></li>
      `
      },
      {
        dataId: ++dataId,
        treatment: `
      <li class="treatment-name" data-id=${dataId}>Brynlaminering</li>
      <li><p class="treatment-content--description" data-id=${dataId}>Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'</p></li>
      `
      }
    ]
  },
  {
    id: ++id,
    name: 'Ansiktsbehandling m/ultralyd',
    type: 'Ansiktsbehandling',
    image: '../images/face.jpg',
    excerpt: 'Excerpt om Ansiktsbehandling m/ultralyd',
    description: 'Ultralydsbehandling er en effektiv og skånsom dyp rengjøring og peeling av huden, som samtidig aktiverer hudens funksjoner.',
    treatments: [
      {
        dataId: ++dataId,
        treatment: `
      <li class="treatment-name" data-id=${dataId}>Dyprens</li>
      <li><p class="treatment-content--description" data-id=${dataId}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of.</p></li>
      `
      },
      {
        dataId: ++dataId,
        treatment: `
      <li class="treatment-name" data-id=${dataId}>Ansiktsbehandling</li>
      <li><p class="treatment-content--description" data-id=${dataId}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of.</p></li>
      `
      },
      {
        dataId: ++dataId,
        treatment: `
      <li class="treatment-name" data-id=${dataId}>Ansiktsmassasje</li>
      <li><p class="treatment-content--description" data-id=${dataId}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of.</p></li>
      `
      },
      {
        dataId: ++dataId,
        treatment: `
      <li class="treatment-name" data-id=${dataId}>No needle mesoterapi</li>
      <li><p class="treatment-content--description" data-id=${dataId}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of.</p></li>
      `
      },
      {
        dataId: ++dataId,
        treatment: `
      <li class="treatment-name" data-id=${dataId}>Ansiktsbehandling med ultralyd</li>
      <li><p class="treatment-content--description" data-id=${dataId}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of.</p></li>
      `
      },
      {
        dataId: ++dataId,
        treatment: `
      <li class="treatment-name" data-id=${dataId}>Kjemisk peeling</li>
      <li><p class="treatment-content--description" data-id=${dataId}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of.</p></li>
      `
      },
      {
        dataId: ++dataId,
        treatment: `
      <li class="treatment-name" data-id=${dataId}>Kavitasjon peeling</li>
      <li><p class="treatment-content--description" data-id=${dataId}>Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'</p></li>
      `
      }
    ]
  },
];

console.log(products);



