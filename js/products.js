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
        treatmentName: 'Vippe extensions',
        treatmentDescription: '1:1 styling er en klassisk metode som består i å feste en falsk øyevippe til en ekte vippe. Effekten her er veldig      naturlig, og øyet er litt skissert. Synlig her er først og fremst forlengelse, krølling og mørklegging av øyevipper, men det er ingen fortykningseffekt. Det er et godt valg for folk som ønsker å forsiktig understreke utseendet, uten den synlige effekten av falske øyevipper. Det vil fungere spesielt godt med naturlig ganske tykke øyevipper.',
      },
      {
        dataId: ++dataId,
        treatmentName: 'Vippeløft',
        treatmentDescription: 'Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  Content here, content here',
      },
    ]
  },
  {
    id: ++id,
    name: 'Bryn',
    type: 'Bryn',
    image: '../images/eyebrows.jpg',
    excerpt: 'Excerpt om bryn',
    treatments: [
      {
        dataId: ++dataId,
        treatmentName: 'Øyebryn design med farging',
        treatmentDescription: 'Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  Content here, content here',
      },
      {
        dataId: ++dataId,
        treatmentName: 'Brynlaminering',
        treatmentDescription: 'Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  Content here, content here',
      }
    ]
  },
  {
    id: ++id,
    name: 'Ansiktsbehandling',
    type: 'Ansiktsbehandling',
    image: '../images/face.jpg',
    excerpt: 'Excerpt om Ansiktsbehandling m/ultralyd',
    treatments: [
      {
        dataId: ++dataId,
        treatmentName: 'Dyprens',
        treatmentDescription: 'Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  Content here, content here',
      },
      {
        dataId: ++dataId,
        treatmentName: 'Ansiktsbehandling',
        treatmentDescription: 'Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  Content here, content here',
      },
      {
        dataId: ++dataId,
        treatmentName: 'Ansiktsmassasje',
        treatmentDescription: 'Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  Content here, content here',
      },
      {
        dataId: ++dataId,
        treatmentName: 'No needle mesoterapi',
        treatmentDescription: 'Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  Content here, content here',
      },
      {
        dataId: ++dataId,
        treatmentName: 'Ultralyd',
        treatmentDescription: 'Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  Content here, content here',
      },
      {
        dataId: ++dataId,
        treatmentName: 'Kjemisk peeling',
        treatmentDescription: 'Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  Content here, content here',
      },
      {
        dataId: ++dataId,
        treatmentName: 'Kavitasjon peeling',
        treatmentDescription: 'Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  Content here, content here',
      }
    ]
  },
];