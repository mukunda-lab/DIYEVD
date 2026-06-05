export interface ScheduleItem {
  time?: string
  activity: string
}

export interface DayEvent {
  date: string
  location?: string
  items: ScheduleItem[]
  contact?: string
}

export interface Country {
  id: string
  name: string
  flag: string
  accentColor: string
  days: DayEvent[]
  registrationEmail?: string
  registrationPhone?: string
}

export const countries: Country[] = [
  {
    id: 'espana',
    name: 'España',
    flag: '🇪🇸',
    accentColor: '#e8697a',
    days: [
      {
        date: 'Jueves 18 de junio',
        items: [
          { time: '18:00–19:00h', activity: 'Clase de Shanti Shakti Yoga' },
          { time: '19:30–20:30h', activity: 'Meditación guiada por Shakti Ma' },
        ],
      },
      {
        date: 'Viernes 19 de junio',
        items: [{ time: '19:00–20:00h', activity: 'Kirtan y Fuego Sagrado' }],
      },
      {
        date: 'Sábado 20 de junio',
        items: [{ time: '8:00–9:30h', activity: 'Clase Agni Shakti Yoga y Meditación' }],
      },
      {
        date: 'Domingo 21 de junio',
        items: [
          { time: '8:30–9:30h', activity: 'Protocolo de Yoga' },
          { time: '9:30–10:00h', activity: 'Desayuno' },
          { time: '10:00–11:00h', activity: 'Kirtan y Fuego Sagrado' },
          { time: '11:00–12:30h', activity: 'Charla (por definir)' },
          { time: '12:30–13:00h', activity: 'Cierre con Meditación' },
        ],
      },
    ],
  },
  {
    id: 'uruguay',
    name: 'Uruguay',
    flag: '🇺🇾',
    accentColor: '#4169e1',
    registrationPhone: '+598 99 767 748',
    days: [
      {
        date: 'Domingo 7 de junio',
        location: 'Sede EVD · Dr. Prudencio de Pena 2528 esq. Campbell',
        items: [{ time: '10:00h', activity: 'Clase Agni' }],
        contact: '+598 99 767 748',
      },
      {
        date: 'Domingo 14 de junio',
        location: 'Sede EVD · Dr. Prudencio de Pena 2528 esq. Campbell',
        items: [{ time: '10:00h', activity: 'Clase Padma' }],
        contact: '+598 99 767 748',
      },
      {
        date: 'Sábado 20 de junio',
        location: 'Parque',
        items: [{ time: '9:00h', activity: 'Protocolo DIY' }],
        contact: '+598 99 767 748',
      },
      {
        date: 'Domingo 21 de junio',
        location: 'Hotel Radisson · Montevideo',
        items: [
          { time: '15:00h', activity: 'Kirtan' },
          { time: '17:00h', activity: 'Shiva Tandava' },
        ],
        contact: '+598 99 767 748',
      },
      {
        date: 'Domingo 28 de junio',
        location: 'Sede EVD · Dr. Prudencio de Pena 2528 esq. Campbell',
        items: [{ time: '10:00h', activity: 'Clase Shanti' }],
        contact: '+598 99 767 748',
      },
    ],
  },
  {
    id: 'usa',
    name: 'USA · Miami',
    flag: '🇺🇸',
    accentColor: '#3b82f6',
    days: [
      {
        date: 'Domingo 21 de junio',
        location: 'Frente a la playa · Miami Beach',
        items: [{ activity: 'Clase especial de Yoga' }],
      },
    ],
  },
  {
    id: 'mexico',
    name: 'México',
    flag: '🇲🇽',
    accentColor: '#22c55e',
    registrationEmail: 'shaktiyoga@evdsky.com',
    days: [
      {
        date: 'Sábado 20 de junio · Guadalajara',
        location: 'Parque C. Eca Do Queirós #5258, Colonia Vallarta Universidad, Zapopan Jalisco',
        items: [{ time: '8:00–9:00 am', activity: 'Protocolo de Yoga + Convivio' }],
        contact: '+52 33 2475 9083',
      },
      {
        date: 'Sábado 20 de junio · Querétaro',
        location: 'Parque Carretas · Av. Plateros 508, Santiago de Querétaro',
        items: [{ time: '9:00–10:00 am', activity: 'Protocolo de Yoga + Convivio' }],
        contact: 'shaktiyoga@evdsky.com',
      },
    ],
  },
  {
    id: 'venezuela',
    name: 'Venezuela',
    flag: '🇻🇪',
    accentColor: '#facc15',
    days: [
      {
        date: 'Sábado 20 de junio · Caracas',
        location: 'Parque Francisco de Miranda (junto al Planetario Humboldt, kiosco 9-A)',
        items: [{ time: '8:00 am', activity: 'Protocolo común de Yoga · Refrigerio' }],
        contact: '+58 412 333 3462',
      },
      {
        date: 'Sábado 20 de junio · Maracay',
        location: 'Parque Santos Michelena (detrás de las canchas de fútbol de salón)',
        items: [{ time: '8:00 am', activity: 'Protocolo común de Yoga · Refrigerio' }],
        contact: '+58 424 332 9718',
      },
    ],
  },
  {
    id: 'chile',
    name: 'Chile',
    flag: '🇨🇱',
    accentColor: '#ef4444',
    days: [
      {
        date: 'Jueves 18 de junio · Santiago',
        location: 'Eduardo Castillo Vicuña #3350, Providencia',
        items: [{ time: '18:00–19:00h', activity: 'Clase Shakti Yoga' }],
        contact: '+569 9237 1109',
      },
      {
        date: 'Sábado 20 de junio · Temuco',
        location: 'Lago Calafquen #1260 (sector estadio)',
        items: [{ time: '8:00–9:30h', activity: 'Clase Shakti Yoga + Protocolo de Yoga + Refrigerio' }],
        contact: '+569 4410 8319',
      },
    ],
  },
  {
    id: 'italia',
    name: 'Italia',
    flag: '🇮🇹',
    accentColor: '#4ade80',
    days: [
      {
        date: 'Domingo 21 de junio',
        location: 'Via Pideura 27 · Brisighella (RA)',
        items: [
          { time: '8:20', activity: 'Protocolo común de la Embajada de la India' },
          { time: '9:30', activity: 'Práctica de Pranayama y breve meditación' },
          { time: '10:00', activity: 'Fuego Sagrado' },
          { time: '10:45', activity: 'Cierre y refrigerio' },
        ],
      },
    ],
  },
  {
    id: 'argentina',
    name: 'Argentina',
    flag: '🇦🇷',
    accentColor: '#60a5fa',
    registrationEmail: 'argentina@evdsky.com',
    registrationPhone: '11 2391 2594',
    days: [
      {
        date: 'Sábado 20 de junio · 10:00–11:30hs',
        location: 'Sede EVD Argentina · Maure 3015, Colegiales, CABA',
        items: [
          { activity: 'Práctica de Surya Namaskar' },
          { activity: 'Asanas solares — Agni Shakti Yoga' },
          { activity: 'Pranayama' },
          { activity: 'Meditación con tono solfeggio 528 Hz' },
          { activity: 'Cierre con jugos detox' },
        ],
        contact: '11 2391 2594',
      },
    ],
  },
]
