let id = 1;
let dataId = 0;

const products = [
  {
    id: id,
    name: 'Vipper',
    type: 'Vipper',
    image: '../../images/lashes1.jpg',
    excerpt: `Oppnå en uimotståelig øyekontakt med våre luksuriøse vippebehandlinger.`,
    treatments: [
      {
        dataId: ++dataId,
        treatmentName: 'Vippe extensions',
        treatmentDescription: '1:1 styling er en klassisk metode som består i å feste en falsk øyevippe til en ekte vippe. Effekten her er veldig      naturlig, og øyet er litt skissert. Synlig her er først og fremst forlengelse, krølling og mørklegging av øyevipper, men det er ingen fortykningseffekt. Det er et godt valg for folk som ønsker å forsiktig understreke utseendet, uten den synlige effekten av falske øyevipper. Det vil fungere spesielt godt med naturlig ganske tykke øyevipper.',
      },
      {
        dataId: ++dataId,
        treatmentName: 'Vippeløft',
        treatmentDescription: `Vippeløft er en behandling for å løfte og gi volum til naturlige vipper uten å bruke vippeextensions. Under behandlingen løftes vippene fra roten ved hjelp av en spesiell gel-formula og en spesiell bøy på vippekanten som gir en naturlig og vakker bøy. 
        <br><br>

        Resultatet er at vippene ser lengre, fyldigere og mer definerte ut, og effekten kan vare i 6-8 uker avhengig av individuelle faktorer som vippenes vekstsyklus og pleie. Vippeløft er en populær behandling for de som ønsker å forbedre utseendet til naturlige vipper uten å bruke falske vipper.`,
      },
    ]
  },
  {
    id: ++id,
    name: 'Bryn',
    type: 'Bryn',
    image: '../../images/eyebrows.jpg',
    excerpt: `Gi ansiktet ditt et løft med våre profesjonelle brynbehandlinger og opplev en forvandling du vil elske.`,
    treatments: [
      {
        dataId: ++dataId,
        treatmentName: 'Øyebryn design med farging',
        treatmentDescription: `Øyebryn design med farging er en skjønnhetsbehandling som involverer å forme og farge øyebrynene for å forbedre deres utseende og ramme inn ansiktet på en flatterende måte. Behandlingen inkluderer vanligvis en konsultasjon for å diskutere ønsket øyebrynsform og farge før selve behandlingen starter.
        <br><br>

        Under behandlingen vil en profesjonell øyebrynsdesigner bruke en kombinasjon av teknikker for å forme øyebrynene. Deretter vil øyebrynene farges for å matche hårfargen eller gi et mer definert utseende.
        <br><br>

        Farging av øyebrynene kan bidra til å gi øyebrynene et fyldigere og mer definert utseende, og kan være spesielt nyttig for personer med sparsomme eller lyse øyebryn. Denne behandlingen kan også hjelpe med å gi en mer symmetrisk og balansert utseende til ansiktet.`,
      },
      {
        dataId: ++dataId,
        treatmentName: 'Brynlaminering',
        treatmentDescription: `Brynlaminering er en skjønnhetsbehandling som involverer å forme, løfte og glatte øyebrynshårene ved hjelp av spesielle produkter. Under behandlingen vil en profesjonell bruke en serie av spesielle produkter for å forme øyebrynshårene og holde dem på plass i ønsket retning.
        <br><br>

        Først vil øyebrynene renses og forberedes for behandling. Deretter vil et spesielt lim påføres for å forme hårene til ønsket form. En annen løftende og fuktighetsgivende behandling vil deretter påføres for å gi hårene en mykere og mer definert tekstur. Til slutt vil en nøytraliserende lotion påføres for å sette brynene på plass og fullføre behandlingen.
        <br><br>

        Brynlaminering kan gi øyebrynene et fyldigere og mer definert utseende, og kan hjelpe med å dekke sparsomme områder og gi et mer symmetrisk utseende. Behandlingen kan også gi øyebrynene en mer "naturlig" utseende enn andre alternativer som microblading eller tatovering.`,
      }
    ]
  },
  {
    id: ++id,
    name: 'Ansikt',
    type: 'Ansiktsbehandling',
    image: '../../images/face.jpg',
    excerpt: `Opplev øyeblikket av ren forkjælelse - bestill din ansiktsbehandling i dag!`,
    treatments: [
      {
        dataId: ++dataId,
        treatmentName: 'Dyprens',
        treatmentDescription: `Dyprens er en hudpleiebehandling som har som mål å rense huden i dybden. Behandlingen innebærer vanligvis å bruke spesielle produkter og teknikker for å fjerne overflødig olje, smuss, døde hudceller og urenheter som kan føre til tilstoppede porer, kviser og andre hudproblemer.<br><br>

        Vanligvis inkluderer dyprens en kombinasjon av rensing, eksfoliering, utklemming av urenheter og påføring av en beroligende maske. Prosessen kan hjelpe med å forbedre hudens tekstur og glød, redusere synligheten av porer og minimere utseendet av kviser og hudormer.<br><br>

        Det er viktig å velge riktig type dyprens for din spesifikke hudtype og hudtilstand, og det kan være lurt å konsultere med en hudpleieekspert før du gjennomfører en dyprens-behandling.`,
      },
      {
        dataId: ++dataId,
        treatmentName: 'Ansiktsmassasje',
        treatmentDescription: `Ansiktsmassasje er en skjønnhetsbehandling som involverer massering av ansiktet for å forbedre blodsirkulasjonen, stimulere lymfesystemet og fremme avslapning og velvære.
        Under en ansiktsmassasje vil en profesjonell massør bruke ulike teknikker og spesielle kremer for å massere ansiktet, nakken og skuldrene.<br><br>

        Ansiktsmassasje kan bidra til å redusere stress, lindre spenninger i musklene, redusere hevelser og øke blodsirkulasjonen til ansiktet. Behandlingen kan også bidra til å forbedre hudens utseende ved å øke kollagenproduksjonen, som kan hjelpe med å redusere synlige aldringstegn som rynker og fine linjer.<br><br>

        Ansiktsmassasje kan tilpasses individuelle behov og preferanser, og kan være en beroligende og avslappende opplevelse for mange mennesker.`,
      },
      {
        dataId: ++dataId,
        treatmentName: 'No needle mesoterapi',
        treatmentDescription: `No needle mesoterapi, også kjent som needle-free mesotherapy, er en skjønnhetsbehandling som innebærer å injisere aktive ingredienser, vitaminer og andre næringsstoffer i huden uten bruk av nåler.<br> 
        I stedet bruker man avansert teknologi som elektroporering og elektroosmose for å åpne opp små kanaler i huden og levere ingrediensene til de dypere lagene av huden.<br><br>

        Denne metoden gir mange av fordelene som tradisjonell mesoterapi, men uten smerte eller risiko for infeksjoner eller arrdannelse som kan oppstå fra nålebehandlinger.<br><br>

        No needle mesoterapi kan bidra til å forbedre hudens tekstur, tone og glød, og kan brukes til å behandle en rekke hudproblemer, inkludert aldringstegn, ujevn hudtone, tørr hud og akne.
        Det er viktig å merke seg at resultatene kan variere fra person til person, vanligvis ses forbedringer etter første behandling.<br><br>

        Anbefales som en kur 4 - 6 behandlinger for optimal effekt.
        Behandlingen inkluderer enzyme peeling, meso coctail, maske og krem etter hudtype.`
      },
      {
        dataId: ++dataId,
        treatmentName: 'Kjemisk peeling',
        treatmentDescription: `Kjemisk peeling er en kosmetisk behandling som brukes for å forbedre hudens utseende og tekstur ved å fjerne de øverste lagene av huden ved hjelp av en kjemisk løsning. Dette gir en jevnere og mer strålende hudoverflate, og kan også bidra til å redusere synlige aldringstegn som rynker, fine linjer og solskader.
        Under en kjemisk peeling vil en profesjonell påføre en kjemisk løsning på huden, som vil forårsake en kontrollert skade på de øverste lagene av huden. Dette vil føre til at de døde hudcellene blir fjernet og stimulere ny cellevekst og kollagenproduksjon.<br><br>
        
        Det finnes ulike typer kjemiske peelinger som varierer i styrke og virkning. Overfladiske peelinger brukes vanligvis for å behandle overfladiske rynker, ujevn hudtone og solskader, mens dypere peelinger kan brukes for å behandle mer alvorlige hudproblemer som arr, pigmentflekker og dypere rynker.
        Fordelene med kjemisk peeling inkluderer forbedring av hudens tekstur og utseende, reduksjon av synlige aldringstegn, behandling av akne og pigmentflekker, og økt produksjon av kollagen for en fastere og mer elastisk hud.<br><br>
        
        Anbefales som en kur 5-8 behandlinger med en frekvens på hver 14.-21. dag for optimal effekt.
        Det anbefales også å unngå eksponering for sollys og bruke solkrem etter behandlingen for å beskytte den nyfrelste huden.`,
      },
      {
        dataId: ++dataId,
        treatmentName: 'Kavitasjon peeling',
        treatmentDescription: `Kavitasjon peeling, også kjent som ultralyd peeling, er en kosmetisk behandling som bruker høyfrekvente ultralydbølger for å fjerne døde hudceller og urenheter fra huden. Behandlingen utføres ved hjelp av en spesiell apparat som sender ut ultralydbølger som skaper en kavitasjonseffekt, som igjen løser opp og fjerner urenheter og døde hudceller fra huden.<br><br>

        Kavitasjon peeling kan være et godt alternativ for personer som ønsker en mild og skånsom peeling, spesielt for de med sensitiv hud eller som ønsker å unngå mer aggressive behandlinger som kjemisk peeling. Kavitasjon peeling kan også bidra til å øke effekten av andre hudbehandlinger ved å gjøre huden mer mottakelig for absorpsjon av næringsstoffer fra hudpleieprodukter.<br><br>
        
        Fordelene med kavitasjon peeling inkluderer en renere og glattere hudoverflate, økt cellefornyelse og en forbedret tekstur og hudtone. Behandlingen kan også bidra til å redusere synlige aldringstegn som fine linjer og rynker.
        Det anbefales også å unngå eksponering for sollys og bruke solkrem etter behandlingen for å beskytte den nyfrelste huden.`,
      },
      {
        dataId: ++dataId,
        treatmentName: 'Microneedling',
        treatmentDescription: `Microneedling (også kjent som dermaroller og dermapen) er et populært alternativ når du ønsker en oppstrammende behandling for å bedre hudens elastisitet og redusere fine linjer, rynker, pigmentflekker, arr, porer, brannskader og strekkmerker.
        <br><br>

        Etter hvert som vi mennesker blir eldre, reduseres det kollagenet som naturlig finnes i huden. Dette fører til at vi får linjer og rynker og at huden blir slappere og kanskje litt mer livløs og gusten enn før. Hvis dette er noe som plager deg, kan du vurdere å prøve microneedling som er en behandling for å stimulere huden til å danne nytt kollagen.
        Dermed får dette en fornyet effekt på huden din, og den blir fastere og får færre linjer.
        <br><br>

        I denne behandlingen brukes en spesiallaget penn eller rulle med små nåler som lager tusenvis av mikrohull i det ytterste hudlaget. Huden må reparere disse små hullene, og for å få til det, går kroppen i reparasjonsmodus og øker produksjonen av kollagen og elastin.
        <br><br>

        Microneedling kan utføres på ulike deler av kroppen, inkludert ansikt, hals, hender og rygg.
        <br><br>

        Det anbefales fire til seks behandlinger med noen ukers mellomrom.
        `,
      }
    ]
  },
];