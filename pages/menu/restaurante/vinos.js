import Hero from '../../../components/Hero'
import Layout from '../../../components/layout'
import MenuItems from '../../../components/MenuItems'

import TitlePage from '../../../components/TitlePage'

import Paragraph from '../../../components/Paragraph'

import hero1 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'
import hero2 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'
import hero3 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'

import menuStyles from '../../../styles/MenuPage.module.css'
import MenuItemsVino from '../../../components/MenuItemVino'

export default function Desayuno() {
  return (
    <Layout>
      {/* <Hero
        sliderData={[
          {
            id: 1,
            image: hero1,
          },
          {
            id: 2,
            image: hero2,
          },
          {
            id: 3,
            image: hero3,
          },
        ]}
      /> */}
      <div className={menuStyles.titlePage}>
        <TitlePage text='Carta de vinos' />
      </div>
      <Paragraph
        text='LOS PRECIOS SON EN PESOS
E INCLUYEN 16% DE IVA'
      />
      <MenuItemsVino
        title='white wine'
        size='Por copa de 150 ml'
        data={whiteWine150mlData}
      />
      <MenuItemsVino
        title='blush wine'
        size='Por copa de 150 ml'
        data={blushWine150mlData}
      />
      <MenuItemsVino
        title='red wine'
        size='Por copa de 150 ml'
        data={redWine150mlData}
      />
      <MenuItemsVino
        title='sparkling wine'
        size='Por copa de 150 ml'
        data={sparklingWine150mlData}
      />
      <Paragraph text='To maintain the quality and freshness, these wine are Served with (coravin)' />
      <Paragraph
        text='Dollar´s exchange rate could vary slightly versus Mexican pesos
'
      />
      {/* // Half bottle, magnun and other sizes>>>>>>>>>>>>>>>>>>>>> */}
      <MenuItemsVino
        title='white wine'
        size='Half bottle, magnum and others sizes'
        data={halfBottleWhiteWineData}
      />
      <MenuItemsVino
        title='red wine'
        size='Half bottle, magnum and others sizes'
        data={halfBottleRedWineData}
      />
      <MenuItemsVino
        title='blush wine'
        size='Half bottle, magnum and others sizes'
        data={halfBottleBlushWineData}
      />
      <MenuItemsVino
        title='champagne and sparkling wine'
        size='Half bottle, magnum and others sizes'
        data={halfBottleChampagneSparklingWineData}
      />
      {/* champagneAndSparklingWine750mlData>>>>>>>>>>>>>>>>>>>>> */}
      <MenuItemsVino
        title='champagne and sparkling wine | 750 ml'
        size=''
        data={champagneAndSparklingWine750mlData}
      />
      <MenuItemsVino
        title='blush wine | 750 ml'
        size=''
        data={blushWine750mlData}
      />
      <MenuItemsVino
        title='méxico'
        size='white wine'
        data={mexicoWhiteWineData}
      />
      <MenuItemsVino
        title='chile'
        size='white wine'
        data={chileWhiteWineData}
      />
      <MenuItemsVino
        title='argentina'
        size='white wine'
        data={argentinaWhiteWineData}
      />
      <MenuItemsVino
        title='United states'
        size='white wine'
        data={unitedStatesWhiteWineData}
      />
      <MenuItemsVino
        title='france'
        size='white wine'
        data={franceWhiteWineData}
      />
      <MenuItemsVino
        title='italy'
        size='white wine'
        data={ItalyWhiteWineData}
      />
      <MenuItemsVino
        title='spain'
        size='white wine'
        data={spainWhiteWineData}
      />
      <MenuItemsVino
        title='rest of the world'
        size='white wine'
        data={restOfTheWorldWhiteWineData}
      />
      {/* /* paises>>>>>>>>>>>>>>>>>>>>>red wine */}
      <MenuItemsVino title='méxico' size='red wine' data={mexicoRedWineData} />

      <MenuItemsVino title='chile' size='red wine' data={chileRedWineData} />
      <MenuItemsVino
        title='argentina'
        size='red wine'
        data={argentinaRedWineData}
      />
      <MenuItemsVino
        title='rest of the world'
        size='red wine'
        data={restOfTheWorldRedWineData}
      />
      <MenuItemsVino
        title='united states'
        size='red wine'
        data={unitedStatesRedWineData}
      />
      <MenuItemsVino title='france' size='red wine' data={franceRedWineData} />
      <MenuItemsVino title='italy' size='red wine' data={italyRedWineData} />
      <MenuItemsVino title='spain' size='red wine' data={spainRedWineData} />
    </Layout>
  )
}

const whiteWine150mlData = [
  {
    id: 1,
    itemName: 'Aliwen Undurraga | Sauvignon Blanc, Valle De Maipo, Chile, 2021',
    description: '',
    priceUs: '11',
    priceMxn: '220',
  },
  {
    id: 2,
    itemName: 'Duckhorn | Sauvignon Blanc, Napa Valley, USA, 2018',
    description: '',
    priceUs: '28',
    priceMxn: '550',
  },
  {
    id: 3,
    itemName: 'Terre De Fohn | Pinot Grigio, Trentino, Italia, 2019',
    description: '',
    priceUs: '12',
    priceMxn: '220',
  },
  {
    id: 4,
    itemName: 'Casa Madero Reserva | Chardonnay, Valle de Parras, México, 2018',
    description: '',
    priceUs: '12',
    priceMxn: '220',
  },
  {
    id: 5,
    itemName: 'Lagrimas Viresa | Verdejo , Baja California , Mexico 2019',
    description: '',
    priceUs: '12',
    priceMxn: '220',
  },
]
const blushWine150mlData = [
  {
    id: 1,
    itemName: 'Casa Madero Rose, Syrah Parras Coahuila, Mexico, 2020',
    description: '',
    priceUs: '12',
    priceMxn: '220',
  },
  {
    id: 2,
    itemName: 'Izadi Larosa, Garnacha , Rioja, España 2020',
    description: '',
    priceUs: '12',
    priceMxn: '220',
  },
]
const redWine150mlData = [
  {
    id: 1,
    itemName: 'Señorita Cometa | Petit Verdot Baja California , Mexico 2018 ',
    description: '',
    priceUs: '12',
    priceMxn: '220',
  },
  {
    id: 2,
    itemName: 'Indigo eyes | Pinot Noir, California, USA, 2018',
    description: '',
    priceUs: '13',
    priceMxn: '220',
  },
  {
    id: 3,
    itemName: 'Surco 2.7| Cabernet Sauvignon, Baja California , Mexico, 2019,',
    description: '',
    priceUs: '13',
    priceMxn: '240',
  },
  {
    id: 4,
    itemName: 'Alta Vista Vive | Malbec, Mendoza, Argentina, 2018',
    description: '',
    priceUs: '13',
    priceMxn: '240',
  },
  {
    id: 5,
    itemName:
      'Duckhorn | Cabernet Sauvignon, Napa Valley, USA, 2016, (Coravin)',
    description: '',
    priceUs: '55',
    priceMxn: '990',
  },
  {
    id: 6,
    itemName: 'Goldeneye | Pinot Noir, Anderson Valley, USA, 2016, (Coravin)',
    description: '',
    priceUs: '54',
    priceMxn: '950',
  },
  {
    id: 7,
    itemName:
      'Ancon| Nebiolo Cabernet,Baja California, Mexico, 2018, (Coravin)',
    description: '',
    priceUs: '39',
    priceMxn: '680',
  },
]

const sparklingWine150mlData = [
  {
    id: 1,
    itemName: 'Louis Perdrier Brut | Chardonnay, Bourgogne, Francia, NV',
    description: '',
    priceUs: '13',
    priceMxn: '250',
  },
  {
    id: 2,
    itemName:
      'Villa Sandi Il Fresco rose | Pinot Blanc Pinit nero Veneto Italia, NV',
    description: '',
    priceUs: '13',
    priceMxn: '250',
  },
  {
    id: 3,
    itemName: 'Chandon Brut | Chardonnay, Mendoza, Argentina, NV',
    description: '',
    priceUs: '19',
    priceMxn: '350',
  },
  {
    id: 4,
    itemName: 'La Giogisa Frizzante | Moscato, Veneto, Italia, NV',
    description: '',
    priceUs: '12',
    priceMxn: '220',
  },
]

// Half bottle, magnun and other sizes>>>>>>>>>>>>>>>>>>>>>

const halfBottleWhiteWineData = [
  {
    id: 1,
    itemName:
      'Casa Madero Reserva 375 ml | Chardonnay, Valle de Parras, México, 2018',
    description: '',
    priceUs: '28',
    priceMxn: '520',
  },
]
const halfBottleRedWineData = [
  {
    id: 1,
    itemName: 'Louis Latour 375 ml| Pinot Noir Borgoña, Francia',
    description: '',
    priceUs: '37',
    priceMxn: '770',
  },
  {
    id: 2,
    itemName:
      'La Casona 375 ml | Cabernet Sauvignon Merlot, Encinillas, México, 2016',
    description: '',
    priceUs: '47',
    priceMxn: '850',
  },
  {
    id: 3,
    itemName: 'Asis 375 ml | Merlot Shiraz, Encinillas, México 2016',
    description: '',
    priceUs: '47',
    priceMxn: '850',
  },
  {
    id: 4,
    itemName: 'Norton Reserva 375 ml | Malbec, Mendoza, Argentina, 2019',
    description: '',
    priceUs: '27',
    priceMxn: '480',
  },
  {
    id: 5,
    itemName:
      'Valdubón Roble 500 ml | Tempranillo, Ribera del Duero, España, 2014',
    description: '',
    priceUs: '31',
    priceMxn: '550',
  },
  {
    id: 6,
    itemName:
      'Ventisquero 375 ml | Cabernet Sauvignon, Valle Central, Chile, 2015',
    description: '',
    priceUs: '22',
    priceMxn: '400',
  },
]

const halfBottleBlushWineData = [
  {
    id: 1,
    itemName: 'Kruger 1500 ml | Sangiovese, Valle de Guadalupe, México, 2019',
    description: '',
    priceUs: '144',
    priceMxn: '2,600',
  },
  {
    id: 2,
    itemName:
      'Domaines Ott By Ott 3000 ml | Blend, Côtes de Provence, Francia, 2018',
    description: '',
    priceUs: '368',
    priceMxn: '9,000',
  },
  {
    id: 3,
    itemName: `Whispering Angel Château d'Esclans 1500 ml | Blend, Côtes de Provence, Francia, 2019`,
    description: '',
    priceUs: '473',
    priceMxn: '4,500',
  },
  {
    id: 4,
    itemName: `Whispering Angel Château d'Esclans 6000 ml | Blend, Côtes de Provence, Francia, 2019`,
    description: '',
    priceUs: '1,026',
    priceMxn: '19,500',
  },
  {
    id: 5,
    itemName:
      'Corona del Valle Rose 1500 ml | Grenache, Valle de Guadalupe, Mexico, 2019',
    description: '',
    priceUs: '158',
    priceMxn: '3,000',
  },
  {
    id: 6,
    itemName:
      'Corona del Valle Sauvignon Blanc 1500 ml | Valle de Guadalupe , Mexico, 2019',
    description: '',
    priceUs: '136',
    priceMxn: '2,500',
  },
]

const halfBottleChampagneSparklingWineData = [
  {
    id: 1,
    itemName: `Adami Garbel 375 ml | Prosecco, Veneto, Italia, NV`,
    description: '',
    priceUs: '37',
    priceMxn: '660',
  },
  {
    id: 2,
    itemName: `Segura Viuda Brut Reserva 375 ml | Cava, Catalunya, España, NV`,
    description: '',
    priceUs: '30',
    priceMxn: '570',
  },
  {
    id: 3,
    itemName: `Moët & Chandon Brut Imperial 375 ml | Champagne Blend, Epernay, Francia, NV`,
    description: '',
    priceUs: '85',
    priceMxn: '1,600',
  },
  {
    id: 4,
    itemName: `Veuve Clicquot Brut luminus 1500 ml| Champagne Blend, Reims, Francia, NV`,
    description: '',
    priceUs: '567',
    priceMxn: '9,800',
  },
  {
    id: 5,
    itemName: `Moët & Chandon Brut Imperial 1500 ml | Champagne Blend, Epernay, Francia, NV`,
    description: '',
    priceUs: '567',
    priceMxn: '8,500',
  },
  {
    id: 6,
    itemName: `Moët & Chandon Brut Imperial 3000 ml | Champagne Blend, Epernay, Francia, NV`,
    description: '',
    priceUs: '894',
    priceMxn: '18.000',
  },
  {
    id: 7,
    itemName: `Moët & Chandon Ice Imperial 3000 ml | Champagne Blend, Epernay, Francia, NV`,
    description: '',
    priceUs: '1,260',
    priceMxn: '23,800',
  },
]

/* champagneAndSparklingWine750mlData>>>>>>>>>>>>>>>>>>>>> */

const champagneAndSparklingWine750mlData = [
  {
    id: 1,
    itemName: `Moët & Chandon Brut Imperial | Champagne Blend, Epernay, Francia, NV`,
    description: '',
    priceUs: '184',
    priceMxn: '3,900',
  },
  {
    id: 2,
    itemName: `Moët & Chandon Nectar Imperial | Champagne Blend, Epernay, Francia, NV`,
    description: '',
    priceUs: '205',
    priceMxn: '4,200',
  },
  {
    id: 3,
    itemName: `Moët & Chandon Ice Imperial | Champagne Blend, Epernay, Francia, NV (On Ice)`,
    description: '',
    priceUs: '242',
    priceMxn: '4,600',
  },
  {
    id: 4,
    itemName: `Veuve Clicquot Brut | Champagne Blend, Reims, Francia, NV`,
    description: '',
    priceUs: '195',
    priceMxn: '3,900',
  },
  {
    id: 5,
    itemName: `Nicolas Feuillatte Brut | Champagne Blend, Epernay, Francia, NV`,
    description: '',
    priceUs: '184',
    priceMxn: '3,900',
  },
  {
    id: 6,
    itemName: `Louis Roederer Brut Premier | Champagne Blend, Reims, Francia, NV`,
    description: '',
    priceUs: '200',
    priceMxn: '4,200',
  },
  {
    id: 7,
    itemName: `Taittinger Brut | Champagne Blend, Reims, Francia, NV`,
    description: '',
    priceUs: '216',
    priceMxn: '4,400',
  },
  {
    id: 8,
    itemName: `Dom Perignon | Champagne Blend, Epernay, Francia, 2008`,
    description: '',
    priceUs: '530',
    priceMxn: '12.000',
  },
  {
    id: 9,
    itemName: `Krug Grande Cuvée | Champagne Blend, Epernay, Francia, NV`,
    description: '',
    priceUs: '568',
    priceMxn: '11,500',
  },
  {
    id: 10,
    itemName: `Cristal Louis Roederer Brut | Champagne Blend, Reims, Francia, 2007`,
    description: '',
    priceUs: '763',
    priceMxn: '14,500',
  },
  {
    id: 11,
    itemName: `Moët & Chandon Imperial Brut Rosé | Champagne Blend, Epernay, Francia, NV`,
    description: '',
    priceUs: '205',
    priceMxn: '4,300',
  },
  {
    id: 12,
    itemName: `Moët & Chandon Rosé Ice Imperial | Champagne Blend, Epernay, Francia, NV (On Ice)`,
    description: '',
    priceUs: '242',
    priceMxn: '4,800',
  },
  {
    id: 13,
    itemName: `Nicolas Feuillatte Brut Rosé | Champagne Blend, Epernay, Francia, NV`,
    description: '',
    priceUs: '221',
    priceMxn: '4,300',
  },
  {
    id: 14,
    itemName: `Louis Roederer Brut Premier Rosé | Champagne Blend, Reims, Francia, NV`,
    description: '',
    priceUs: '268',
    priceMxn: '5,300',
  },
  {
    id: 15,
    itemName: `Dom Perignon Rosé | Champagne Blend, Epernay, Francia, 2008`,
    description: '',
    priceUs: '763',
    priceMxn: '15,000',
  },
  {
    id: 16,
    itemName: `Henri Giraud Esprit (Nature) | Champagne Blend, Reims , Francia, NV`,
    description: '',
    priceUs: '221',
    priceMxn: '4,200',
  },
  {
    id: 17,
    itemName: `Louis Perdrier Brut | Chardonnay, Bourgogne, Francia, NV
`,
    description: '',
    priceUs: '53',
    priceMxn: '1,000',
  },
  {
    id: 18,
    itemName: `Villa Sandi Rose | Pinot Blanc , Pinot Nero, Veneto, Italia, NV`,
    description: '',
    priceUs: '58',
    priceMxn: '1,100',
  },
  {
    id: 19,
    itemName: `Il Follo, Prosecco Extra Dry | Glera, Veneto, Italia, NV`,
    description: '',
    priceUs: '53',
    priceMxn: '1,100',
  },
  {
    id: 20,
    itemName: `Ga' Furlan, Prosecco Brut | Glera, Veneto, Italia, NV`,
    description: '',
    priceUs: '58',
    priceMxn: '1,100',
  },
  {
    id: 21,
    itemName: `Segura Viudas Brut | Xarelo-Parellada-Macabeo, Catalunya, España, NV`,
    description: '',
    priceUs: '71',
    priceMxn: '1,350',
  },
  {
    id: 22,
    itemName: `Ana De Codorniu Brut | Chardonnay Xarelo-Parellada-Macabeo, Catalunya, España, NV`,
    description: '',
    priceUs: '63',
    priceMxn: '1,200',
  },
  {
    id: 23,
    itemName: `Chandon Brut | Champagne blend, mendoza, Argentina, NV`,
    description: '',
    priceUs: '90',
    priceMxn: '1,700',
  },
  {
    id: 24,
    itemName: `La Giogisa Frizzante | Moscato, Veneto, Italia, NV`,
    description: '',
    priceUs: '53',
    priceMxn: '1,000',
  },
]

const blushWine750mlData = [
  {
    id: 1,
    itemName: `Paoloni Montefiori Rosato | Sangiovese, Valle de Guadalupe, México, 2018 `,
    description: '',
    priceUs: '71',
    priceMxn: '1,350',
  },
  {
    id: 2,
    itemName: `Kruger | Sangiovese, Valle de Guadalupe, México, 2019`,
    description: '',
    priceUs: '76',
    priceMxn: '1,450',
  },
  {
    id: 3,
    itemName: `Corona del Valle | Grenache, Valle de Guadalupe, México, 2019 `,
    description: '',
    priceUs: '73',
    priceMxn: '1,400',
  },
  {
    id: 4,
    itemName: `Izadi Rose | Grenache, Rioja, España, 2019`,
    description: '',
    priceUs: '50',
    priceMxn: '950',
  },
  {
    id: 5,
    itemName: `Casa madero Rose | Syrah, Parras Coahuila, Mexico, 2020`,
    description: '',
    priceUs: '47',
    priceMxn: '950',
  },
  {
    id: 6,
    itemName: `Château Des Ferrages Mathilde Chapoutier | CS-CF-Merlot, Provence, Francia, 2018 `,
    description: '',
    priceUs: '63',
    priceMxn: '1,250',
  },
  {
    id: 7,
    itemName: `Los Vascos Rose |Syrah Cabernet Sauvignon, Colchahua, Chile, 2017`,
    description: '',
    priceUs: '76',
    priceMxn: '950',
  },
  {
    id: 8,
    itemName: `Miraval Rosé | Blend, Provence, Francia, 2018`,
    description: '',
    priceUs: '110',
    priceMxn: '2,100',
  },
  {
    id: 9,
    itemName: `Whispering Angel Château d'Esclans | Blend, Côtes de Provence, Francia, 2018 `,
    description: '',
    priceUs: '121',
    priceMxn: '2.300',
  },
  {
    id: 10,
    itemName: `Domaine Delaporte, Sancerre Rosé | Pinot Noir, Loire, Francia, 2019`,
    description: '',
    priceUs: '121',
    priceMxn: '2,300',
  },
  {
    id: 11,
    itemName: `Rock Angel, Château d'Esclans | Blend,Provance, Francia, 2017`,
    description: '',
    priceUs: '152',
    priceMxn: '2,900',
  },
  {
    id: 12,
    itemName: `Domaine Ott Château Romassan | Cinsault-Grenache-Mourvedre, Bandol, Francia, 2017 `,
    description: '',
    priceUs: '136',
    priceMxn: '2,600',
  },
  {
    id: 13,
    itemName: 'Charlatan | Garnacha , Cigales , España',
    description: '',
    priceUs: '71',
    priceMxn: '1,350',
  },
  {
    id: 14,
    itemName: `Bertani Rosé | Merlot-Molinara, Veneto, Italia, 2018 `,
    description: '',
    priceUs: '50',
    priceMxn: '950',
  },
  {
    id: 15,
    itemName: `Ros'Alba Pierpaolo | Pinot Nero, Friuli-Venezia, Italia, 2019 `,
    description: '',
    priceUs: '55',
    priceMxn: '1,050',
  },
  {
    id: 16,
    itemName: `Chivite San Martín| Tempranillo, Navarra, España, 2019`,
    description: '',
    priceUs: '58',
    priceMxn: '1,100',
  },
  {
    id: 17,
    itemName: `Sutter Home | White Zinfandel, California, USA, 2018`,
    description: '',
    priceUs: '47',
    priceMxn: '900',
  },
  {
    id: 18,
    itemName: `Clos Cibonne Tradittion Rose Cru Classe | Tiburen , Côtes de Provence , Francia 2018`,
    description: '',
    priceUs: '121',
    priceMxn: '2,300',
  },
  {
    id: 19,
    itemName: `Rumor | Blend , Côtes de Provence , Francia 2019`,
    description: '',
    priceUs: '143',
    priceMxn: '2,800',
  },
]

/* paises>>>>>>>>>>>>>>>>>>>>>white wine */

const mexicoWhiteWineData = [
  {
    id: 1,
    itemName: `Del Viko | Colombard,Chenin Blanc, Valle de Guadalupe, México, 2019 `,
    description: '',
    priceUs: '63',
    priceMxn: '1,200',
  },
  {
    id: 2,
    itemName: `Henry Lurton | Chenin Blanc, Valle de Guadalupe, México, 2019 `,
    description: '',
    priceUs: '61',
    priceMxn: '1,200',
  },
  {
    id: 3,
    itemName: `Lagrimas| Chardonnay, Baja california, México, 2019`,
    description: '',
    priceUs: '57',
    priceMxn: '1,100',
  },
  {
    id: 4,
    itemName: `Lagrimas Sauvignon Blanc, Baja California, México, 2017`,
    description: '',
    priceUs: '57',
    priceMxn: '1,100',
  },
  {
    id: 5,
    itemName: `Sophie | Chenin Blanc-Viogner-Sauvignon Blanc, Aguascalientes, México, 2018`,
    description: '',
    priceUs: '58',
    priceMxn: '1,150',
  },
  {
    id: 6,
    itemName: `Mil Uno | Viura , Valle de Guadalupe, México, 2018`,
    description: '',
    priceUs: '68',
    priceMxn: '1,250',
  },
  {
    id: 7,
    itemName: `Corona del Valle | Sauvignon Blanc, Valle de Guadalupe, México, 2018`,
    description: '',
    priceUs: '71',
    priceMxn: '1,350',
  },
  {
    id: 8,
    itemName: `Atempo, De Cote Casa Vin, Ezequiel Montes | Sauvignon Blanc, Qro, México, 2018 `,
    description: '',
    priceUs: '66',
    priceMxn: '1,250',
  },
  {
    id: 9,
    itemName: `Tres Raíces | Sauvignon Blanc Dolores Hidalgo Gto, México, 2019`,
    description: '',
    priceUs: '58',
    priceMxn: '1,100',
  },
  {
    id: 10,
    itemName: `Casa Madero Reserva | Chardonnay, Valle de Parras, México, 2019 `,
    description: '',
    priceUs: '50',
    priceMxn: '950',
  },
  {
    id: 11,
    itemName: `Blanquísimo | Chardonnay, Chihuahua, México, 2017`,
    description: '',
    priceUs: '55',
    priceMxn: '1,050',
  },
  {
    id: 12,
    itemName: `Casa Madero Gran Reserva | Chardonnay, Valle de Parras, México, 2020`,
    description: '',
    priceUs: '71',
    priceMxn: '1,350',
  },
  {
    id: 13,
    itemName: `Venus Cava Maciel | Chardonnay, Valle de Guadalupe, México, 2019 `,
    description: '',
    priceUs: '63',
    priceMxn: '1,250',
  },
  {
    id: 14,
    itemName: `Bajalupano | Chardonnay, Valle de Guadalupe, México, 2019`,
    description: '',
    priceUs: '63',
    priceMxn: '1,250',
  },
  {
    id: 15,
    itemName: `Fincas Blanco | Grenache, Moscatel, Valle de Guadalupe, México, 2018 `,
    description: '',
    priceUs: '71',
    priceMxn: '1,450',
  },
  {
    id: 16,
    itemName: `Lagrimas| Verdejo, Baja california, México, 2019`,
    description: '',
    priceUs: '54',
    priceMxn: '1,050',
  },
]

const chileWhiteWineData = [
  {
    id: 1,
    itemName: `Cousiño Macul | sauvignon blanc, Valle central , Chile, 2019 `,
    description: '',
    priceUs: '58',
    priceMxn: '950',
  },
  {
    id: 2,
    itemName: `Montes Alpha | Sauvignon Blanc, Valle de casa Blanca, Chile, 20`,
    description: '',
    priceUs: '58',
    priceMxn: '1,100',
  },
  {
    id: 3,
    itemName: `Puerto Viejo Reserva | Chardonnay, Valle del Maule, Chile, 2019 `,
    description: '',
    priceUs: '45',
    priceMxn: '850',
  },
  {
    id: 4,
    itemName: `Montes Alpha | Chardonnay, Valle de casa Blanca, Chile, 2018`,
    description: '',
    priceUs: '68',
    priceMxn: '1,300',
  },
]

const argentinaWhiteWineData = [
  {
    id: 1,
    itemName: `Alta Vista Premium | Torrontés, Salta, Argentina, 2016`,
    description: '',
    priceUs: '66',
    priceMxn: '1,250',
  },
  {
    id: 2,
    itemName: `Norton | Chardonnay Mendoza Argentina`,
    description: '',
    priceUs: '68',
    priceMxn: '1,300',
  },
]

const unitedStatesWhiteWineData = [
  {
    id: 1,
    itemName: `Eroica Château Ste. Michelle & Dr Loosen | Riesling, Columbia Valley, USA, 2014 `,
    description: '',
    priceUs: '110',
    priceMxn: '2,100',
  },
  {
    id: 2,
    itemName: `Château Ste. Michelle | Dry Riesling, Columbia Valley, USA, 2018`,
    description: '',
    priceUs: '63',
    priceMxn: '1,200',
  },
  {
    id: 3,
    itemName: `Josh | Sauvignon Blanc, California, USA, 2017`,
    description: '',
    priceUs: '58',
    priceMxn: '1,100',
  },
  {
    id: 4,
    itemName: `Roth | Sauvignon Blanc, Sonoma County, USA, 2017`,
    description: '',
    priceUs: '84',
    priceMxn: '1.700',
  },
  {
    id: 5,
    itemName: `Ferrari Carano | Sauvignon Blanc, Sonoma County, USA, 2017 `,
    description: '',
    priceUs: '81',
    priceMxn: '1,540',
  },
  {
    id: 6,
    itemName: `Matanzas Creek Winery | Sauvignon Blanc, Sonoma, USA, 2017`,
    description: '',
    priceUs: '137',
    priceMxn: '2,700',
  },
  {
    id: 7,
    itemName: `Château Montelena | Sauvignon Blanc, Calistoga, USA, 2016 `,
    description: '',
    priceUs: '164',
    priceMxn: '3,500',
  },
  {
    id: 8,
    itemName: `Duckhorn | Sauvignon Blanc, Napa Valley, USA, 2018`,
    description: '',
    priceUs: '116',
    priceMxn: '2,200',
  },
  {
    id: 9,
    itemName: `Chalk Hill | Chardonnay, Sonoma County, USA, 2018`,
    description: '',
    priceUs: '97',
    priceMxn: '2,400',
  },
  {
    id: 10,
    itemName: `Duckhorn | Chardonnay, Napa Valley, USA, 2017 `,
    description: '',
    priceUs: '142',
    priceMxn: '2,700',
  },
  {
    id: 11,
    itemName: `Bogle | Chardonnay, california , USA, 2017`,
    description: '',
    priceUs: '61',
    priceMxn: '1,350',
  },
  {
    id: 12,
    itemName: `Château Ste. Michelle | Chardonnay, Columbia Valley, USA, 2015 `,
    description: '',
    priceUs: '71',
    priceMxn: '1,350',
  },
  {
    id: 13,
    itemName: `Forman Vineyard Estate Bottled | Chardonnay, Napa Valley, USA, 2018`,
    description: '',
    priceUs: '248',
    priceMxn: '4,700',
  },
]

const franceWhiteWineData = [
  {
    id: 1,
    itemName: `Albert Mann | Riesling, Alsace, Francia, 2019`,
    description: '',
    priceUs: '121',
    priceMxn: '2,300',
  },
  {
    id: 2,
    itemName: `Sancerre Bourgeois | Family Petit Bourgeois Blanc Sauvignon Blanc, Loire, Francia, 2018`,
    description: '',
    priceUs: '66',
    priceMxn: '1,250',
  },
  {
    id: 3,
    itemName: `Sancerre Pascal Jolivet | Sauvignon Blanc, Loire, Francia, 2017`,
    description: '',
    priceUs: '115',
    priceMxn: '2,200',
  },
  {
    id: 4,
    itemName: `Pouilly Fumé Pascal Jolivet | Sauvignon Blanc, Loire, Francia, 2016 `,
    description: '',
    priceUs: '163',
    priceMxn: '2,600',
  },
  {
    id: 5,
    itemName: `Louis Jadot | Chardonnay, Bourgogne, Francia, 2016 - 2018`,
    description: '',
    priceUs: '58',
    priceMxn: '1,200',
  },
  {
    id: 6,
    itemName: `Louis Latour | Chardonnay, Chablis, Francia, 2015 - 2017`,
    description: '',
    priceUs: '110',
    priceMxn: '2,100',
  },
  {
    id: 7,
    itemName: `Domaine Pinson | Chardonnay, Chablis, Francia, 2018`,
    description: '',
    priceUs: '123',
    priceMxn: '2,350',
  },
  {
    id: 8,
    itemName: `Domaine Laroche Saint Martin | Chardonnay, Chablis, Francia, 2017`,
    description: '',
    priceUs: '100',
    priceMxn: '1,900',
  },
  {
    id: 9,
    itemName: `Macon Pouilly Francois d'Allaines | Chardonnay, Bourgogne, Francia, 2016 `,
    description: '',
    priceUs: '89',
    priceMxn: '1,900',
  },
  {
    id: 10,
    itemName: `Seguin manuel Poully-Fuisé | Chardonnay, Bourgogne, Francia,`,
    description: '',
    priceUs: '169',
    priceMxn: '3,200',
  },
  {
    id: 11,
    itemName: `Domaine Robert Denogent Les sardines | Chardonnay, Mâcon Village, Francia, 2017`,
    description: '',
    priceUs: '126',
    priceMxn: '2,400',
  },
]

const ItalyWhiteWineData = [
  {
    id: 1,
    itemName: `Bosio Asti DOCG | Moscato, Piemonte, Italia, 2018`,
    description: '',
    priceUs: '45',
    priceMxn: '850',
  },
  {
    id: 2,
    itemName: `Pelissero Ridadin | Riesling, Piemonte, Italia, 2015`,
    description: '',
    priceUs: '89',
    priceMxn: '1,800',
  },
  {
    id: 3,
    itemName: `Terre del fohn | Pinot Grigio,Tentrino, Alto Adige, Italia, 2019 `,
    description: '',
    priceUs: '58',
    priceMxn: '1,000',
  },
  {
    id: 4,
    itemName: `Bertani Valente | Pinot Grigio, Veneto, Italia, 2018`,
    description: '',
    priceUs: '47',
    priceMxn: '950',
  },
  {
    id: 5,
    itemName: `Pierpaolo Pecorari | Pinot Grigio, Venezia, Giulia, Italia, 2019`,
    description: '',
    priceUs: '58',
    priceMxn: '1,150',
  },
  {
    id: 6,
    itemName: `Bosio Gavi DOCG | Cortese, Piemonte, Italia, 2017`,
    description: '',
    priceUs: '45',
    priceMxn: '950',
  },
  {
    id: 7,
    itemName: `De Falco | Falanghina, Campania, Italia, 2020`,
    description: '',
    priceUs: '63',
    priceMxn: '1,200',
  },
  {
    id: 8,
    itemName: `Andrea Felici Classico Superiore | Verdicchio Dei Castelli , Marche, Italia, 2018`,
    description: '',
    priceUs: '63',
    priceMxn: '1,050',
  },
]

const spainWhiteWineData = [
  {
    id: 1,
    itemName: `Zarrac Berri, Txakoli Aitzalde | Hondarabi Zuri, Getariano Txakolina, España, 2019 `,
    description: '',
    priceUs: '61',
    priceMxn: '1,150',
  },
  {
    id: 2,
    itemName: `Pablo Padin, Eiral | Albariño, Rías Baixas, España, 2019`,
    description: '',
    priceUs: '47',
    priceMxn: '900',
  },
  {
    id: 3,
    itemName: `El Coto | Viura, Rioja, España, 2018 `,
    description: '',
    priceUs: '47',
    priceMxn: '900',
  },
  {
    id: 4,
    itemName: `Monteabellón | Verdejo, Rueda, España, 2018`,
    description: '',
    priceUs: '45',
    priceMxn: '950',
  },
  {
    id: 5,
    itemName: `Alba De Ventus | Albariño, Rías Baixas, España, 2018`,
    description: '',
    priceUs: '58',
    priceMxn: '1,250',
  },
  {
    id: 6,
    itemName: `Paco & Lola | Albariño, Rías Baixas, España, 2018 `,
    description: '',
    priceUs: '58',
    priceMxn: '1,450',
  },
  {
    id: 7,
    itemName: `Attis | Albariño, Rías Baixas, España, 2019`,
    description: '',
    priceUs: '68',
    priceMxn: '1,450',
  },
]

const restOfTheWorldWhiteWineData = [
  {
    id: 1,
    itemName: `Peter Lehmann Hill & Valley | Riesling, Barossa, Australia, 2016 `,
    description: '',
    priceUs: '68',
    priceMxn: '1,300',
  },
  {
    id: 2,
    itemName: `Dr. Loosen Bros. | Riesling, Mosel, Alemania, 2017`,
    description: '',
    priceUs: '65',
    priceMxn: '1,250',
  },
  {
    id: 3,
    itemName: `Fritz Haag | Riesling-Juffer Troken, Mosel, Alemania, 2017`,
    description: '',
    priceUs: '63',
    priceMxn: '1,500',
  },
  {
    id: 4,
    itemName: `Sileni Estates Cellar Selection | Sauvignon Blanc, Marlborough, New Zeland, 2018 `,
    description: '',
    priceUs: '79',
    priceMxn: '1,500',
  },
  {
    id: 5,
    itemName: `Quinta De Aveleda | Loureiro Albariño, Vinho Verde, Portugal, 2019`,
    description: '',
    priceUs: '47',
    priceMxn: '900',
  },
]

/* paises>>>>>>>>>>>>>>>>>>>>>red wine */
const mexicoRedWineData = [
  {
    id: 1,
    itemName: `Casa Baloyán Tres Tintos | Bordeaux Blend, Valle de Guadalupe, México, 2016 `,
    description: '',
    priceUs: '63',
    priceMxn: '1,250',
  },
  {
    id: 2,
    itemName: `Único Santo Tomás | CS-Merlot, Valle Santo Tomás, México, 2012 - 2013 `,
    description: '',
    priceUs: '162',
    priceMxn: '2,900',
  },
  {
    id: 3,
    itemName: `Duetto | Tempranillo-Cabernet, Sto. Tomás y Sn. Vicente, México, 2013`,
    description: '',
    priceUs: '147',
    priceMxn: '2,900',
  },
  {
    id: 4,
    itemName: `F. Rubio Tinto Reserva | CS-Merlot-Malbec, Valle de Guadalupe, México, 2016 `,
    description: '',
    priceUs: '155',
    priceMxn: '2,950',
  },
  {
    id: 5,
    itemName: `La Casona Hacienda Encinillas | CS-Merlot, Chihuahua, México, 2017 Megacero`,
    description: '',
    priceUs: '71',
    priceMxn: '1,500',
  },
  {
    id: 6,
    itemName: `Hacienda Encinillas | Merlot-Shiraz-CS, Chihuahua, México, 2017 Jardín Secreto`,
    description: '',
    priceUs: '100',
    priceMxn: '1,900',
  },
  {
    id: 7,
    itemName: `Adobe de Guadalupe | Blend, Valle de Guadalupe, México, 2016 Gabriel Adobe`,
    description: '',
    priceUs: '71',
    priceMxn: '1,350',
  },
  {
    id: 8,
    itemName: `Guadalupe | Blend, Valle de Guadalupe, México, 2014`,
    description: '',
    priceUs: '121',
    priceMxn: '2,300',
  },
  {
    id: 9,
    itemName: `Tres Raíces | Tempranillo, Dolores Hidalgo Gto, México, 2018 `,
    description: '',
    priceUs: '105',
    priceMxn: '2,000',
  },
  {
    id: 10,
    itemName: `Mil Uno | Tempranillo, Valle De Guadalupe, México, 2017`,
    description: '',
    priceUs: '71',
    priceMxn: '1,250',
  },
]

const chileRedWineData = [
  {
    id: 1,
    itemName: `Ventisquero | Pinot Noir, Valle de Casa Blanca, Chile, 2018 `,
    description: '',
    priceUs: '45',
    priceMxn: '850',
  },
  {
    id: 2,
    itemName: `Montes Alpha | Pinot Noir, Valle de Casa Blanca, Chile, 2018 `,
    description: '',
    priceUs: '68',
    priceMxn: '1,300',
  },
  {
    id: 3,
    itemName: `Montes Alpha | Merlot, Valle de Colchagua, Chile, 2014`,
    description: '',
    priceUs: '68',
    priceMxn: '1,300',
  },
  {
    id: 4,
    itemName: `Sibaris Undurraga Gran Reserva | Carmenere, Valle de Colchagua, Chile, 2015 `,
    description: '',
    priceUs: '47',
    priceMxn: '900',
  },
  {
    id: 5,
    itemName: `Montes Alpha | Carmenere, Valle de Colchagua, Chile, 2018`,
    description: '',
    priceUs: '68',
    priceMxn: '1,300',
  },
  {
    id: 6,
    itemName: `Koyle Gran Reserva | Carmenere, Alto Colchagua, Chile, 2013`,
    description: '',
    priceUs: '58',
    priceMxn: '1,100',
  },
  {
    id: 7,
    itemName: `Montes Alpha | Syrah, Valle de Colchagua, Chile, 2016`,
    description: '',
    priceUs: '68',
    priceMxn: '1,300',
  },
  {
    id: 8,
    itemName: `Montes Alpha | Cabernet Sauvignon, Valle de Colchagua, Chile, 2017`,
    description: '',
    priceUs: '68',
    priceMxn: '1,300',
  },
  {
    id: 9,
    itemName: `Château Los Boldos Vieilles Vignes | Cabernet S, Cachapoal Andes, Chile, 2014 `,
    description: '',
    priceUs: '84',
    priceMxn: '1,600',
  },
  {
    id: 10,
    itemName: `Ventisquero | Cabernet Sauvignon, Valle del Maipo, Chile, 2016 - 2017`,
    description: '',
    priceUs: '45',
    priceMxn: '850',
  },
  {
    id: 11,
    itemName: `Château Los Boldos Assemblage | Cabernet-Syrah, Cachapoal Andes, Chile, 2016`,
    description: '',
    priceUs: '65',
    priceMxn: '1,250',
  },
]

const argentinaRedWineData = [
  {
    id: 1,
    itemName: `Alta Vista Vive | Malbec, Mendoza, Argentina, 2018 `,
    description: '',
    priceUs: '55',
    priceMxn: '1,050',
  },
  {
    id: 2,
    itemName: `Catena Zapata | Malbec, Mendoza, Argentina, 2017`,
    description: '',
    priceUs: '71',
    priceMxn: '1,400',
  },
  {
    id: 3,
    itemName: `Navarro correas col privada| Malbec, cabernet Mendoza, Argentina, 2017`,
    description: '',
    priceUs: '71',
    priceMxn: '1,350',
  },
  {
    id: 4,
    itemName: `Norton Privada| Malbec, cabernet,Merlot, Mendoza, Argentina, 2018 `,
    description: '',
    priceUs: '71',
    priceMxn: '1,800',
  },
  {
    id: 5,
    itemName: `Rutini | Cabernet-Malbec, Luján de Cuyo, Argentina, 2017`,
    description: '',
    priceUs: '75',
    priceMxn: '1,400',
  },
  {
    id: 6,
    itemName: `Escorihuela Gascón | Cabernet Sauvignon, Mendoza, Argentina, 2015 - 2016`,
    description: '',
    priceUs: '76',
    priceMxn: '1,450',
  },
  {
    id: 7,
    itemName: `Terrazas | Malbec, , Mendoza,Argentina, 2018`,
    description: '',
    priceUs: '91',
    priceMxn: '1,250',
  },
  {
    id: 8,
    itemName: `Zuccardi Q | Cabernet Sauvignon, Mendoza, Argentina, 2007 - 2011`,
    description: '',
    priceUs: '84',
    priceMxn: '1,600',
  },
  {
    id: 9,
    itemName: `Bramare | Cabernet Sauvignon, Luján de Cuyo, Argentina, 2012 `,
    description: '',
    priceUs: '131',
    priceMxn: '2,500',
  },
  {
    id: 10,
    itemName: `Fabré Montmayou Reserva | Malbec, Luján de Cuyo, Argentina, 2011`,
    description: '',
    priceUs: '73',
    priceMxn: '1,400',
  },
]

const restOfTheWorldRedWineData = [
  {
    id: 1,
    itemName: `Montes Toscanini | Carlos Montes, Cabernet S. Tannat, Canelones, Uruguay, 2016 `,
    description: '',
    priceUs: '58',
    priceMxn: '1,000',
  },
  {
    id: 2,
    itemName: `Montes Toscanini | Gran Tannat, Canelones, Uruguay, 2015`,
    description: '',
    priceUs: '147',
    priceMxn: '2,800',
  },
  {
    id: 3,
    itemName: `Peter Lehmann Hill & Valley | Syrah, Barossa, Australia, 2013 `,
    description: '',
    priceUs: '76',
    priceMxn: '1,450',
  },
  {
    id: 4,
    itemName: `Flor de Crasto | Touriga, Douro, Portugal, 2014`,
    description: '',
    priceUs: '66',
    priceMxn: '1,250',
  },
  {
    id: 5,
    itemName: `Doña Ermelinda Reserva | Castelao, Touriga, Trincadera, Palmena, Portugal, 2016 `,
    description: '',
    priceUs: '76',
    priceMxn: '1,250',
  },
  {
    id: 6,
    itemName: `Doña Ermelinda | Syrah, Palmena, Portugal, 2016`,
    description: '',
    priceUs: '87',
    priceMxn: '1,500',
  },
]

const unitedStatesRedWineData = [
  {
    id: 1,
    itemName: `Bogle | Pinot Noir, California, USA, 2018`,
    description: '',
    priceUs: '76',
    priceMxn: '1,300',
  },
  {
    id: 2,
    itemName: `La Crema | Pinot Noir, Sonoma Coast, USA, 2015`,
    description: '',
    priceUs: '139',
    priceMxn: '2,650',
  },
  {
    id: 3,
    itemName: `Adelsheim | Pinot Noir, Willamette Valley, Oregón, USA, 2017`,
    description: '',
    priceUs: '126',
    priceMxn: '2,400',
  },
  {
    id: 4,
    itemName: `Lost & Found | Pinot Noir, Russian River Valley, USA, 2013`,
    description: '',
    priceUs: '216',
    priceMxn: '4,100',
  },
  {
    id: 5,
    itemName: `Buena Vista | Pinot Noir, Central Coast, USA, 2018`,
    description: '',
    priceUs: '96',
    priceMxn: '1,900',
  },
  {
    id: 6,
    itemName: `Goldeneye | Pinot Noir, Anderson Valley, USA, 2016`,
    description: '',
    priceUs: '221',
    priceMxn: '4,200',
  },
  {
    id: 7,
    itemName: `Silver Oak | Cabernet Sauvignon, Alexander Valley, USA, 2017`,
    description: '',
    priceUs: '326',
    priceMxn: '6,400',
  },
  {
    id: 8,
    itemName: `Duckhorn Three Palms | Merlot, Napa Valley, USA, 2018 `,
    description: '',
    priceUs: '342',
    priceMxn: '6,500',
  },
  {
    id: 9,
    itemName: `Predator Old Vine | Zinfandel, Lodi, USA, 2015`,
    description: '',
    priceUs: '79',
    priceMxn: '1,500',
  },
  {
    id: 10,
    itemName: `Seghesio Family Vineyards | Zinfandel, Sonoma, USA, 2016`,
    description: '',
    priceUs: '129',
    priceMxn: '2,450',
  },
  {
    id: 11,
    itemName: `Ridge Three Valleys | Zinfandel-Petit Syrah, Sonoma Valley, 2014 `,
    description: '',
    priceUs: '153',
    priceMxn: '2,900',
  },
  {
    id: 12,
    itemName: `Buena Vista | Cabernet Sauvignon, Central Coast, 2018 `,
    description: '',
    priceUs: '79',
    priceMxn: '1,900',
  },
  {
    id: 13,
    itemName: `Crossbarn | Cabernet Sauvignon, Napa Valley, USA, 2018`,
    description: '',
    priceUs: '216',
    priceMxn: '4,100',
  },
  {
    id: 14,
    itemName: `Rhiannon | Blend, California, USA, 2015`,
    description: '',
    priceUs: '84',
    priceMxn: '1,600',
  },
  {
    id: 15,
    itemName: `Château Ste. Michelle | Cabernet Sauvignon, Columbia, Valley, USA, 2015`,
    description: '',
    priceUs: '76',
    priceMxn: '1,450',
  },
  {
    id: 16,
    itemName: `Raymond Reserve | Cabernet Sauvignon, Napa Valley, USA, 2017`,
    description: '',
    priceUs: '131',
    priceMxn: '2,900',
  },
  {
    id: 17,
    itemName: `Hess | Cabernet Sauvignon, Nort Coast, USA, 2018 `,
    description: '',
    priceUs: '147',
    priceMxn: '1,800',
  },
  {
    id: 18,
    itemName: `Duckhorn | Cabernet Sauvignon, Napa Valley, USA, 2016`,
    description: '',
    priceUs: '289',
    priceMxn: '5,500',
  },
  {
    id: 19,
    itemName: `Shafer One Point Five | Cabernet Sauvignon, Stag's Leap, USA, 2017 `,
    description: '',
    priceUs: '379',
    priceMxn: '7,200',
  },
  {
    id: 20,
    itemName: `Camomi | Cabernet Sauvignon, Napa Valley, USA, 2017`,
    description: '',
    priceUs: '87',
    priceMxn: '1,650',
  },
  {
    id: 21,
    itemName: `Mad For It Nuit Apres Nuit | Grenache Syrah, California, USA, 2016 `,
    description: '',
    priceUs: '90',
    priceMxn: '1,700',
  },
  {
    id: 22,
    itemName: `Dutcher Crossing | Propriertor's Syrah, Sonoma County, USA, 2014 `,
    description: '',
    priceUs: '147',
    priceMxn: '2,800',
  },
  {
    id: 23,
    itemName: `Decoy | Cabernet Sauvignon, Sonoma County, USA, 2016`,
    description: '',
    priceUs: '100',
    priceMxn: '1,900',
  },
  {
    id: 24,
    itemName: `Decoy | Merlot, Sonoma County, USA, 2017`,
    description: '',
    priceUs: '100',
    priceMxn: '1,900',
  },
]
const franceRedWineData = [
  {
    id: 1,
    itemName: `Beaujolais Villages Georges Duboeuf | Gamay, Beajulais, Bourgogne, Francia, 2018 `,
    description: '',
    priceUs: '47',
    priceMxn: '900',
  },
  {
    id: 2,
    itemName: `Domaine Jean Paul Thevenet Morgon | Gamay Vieilles Vignes, Francia, 2017`,
    description: '',
    priceUs: '171',
    priceMxn: '3,250',
  },
  {
    id: 3,
    itemName: `Beaujolais Villages Louis Jadot | Gamay, Beaujolais, Francia, 2019`,
    description: '',
    priceUs: '47',
    priceMxn: '1,000',
  },
  {
    id: 4,
    itemName: `Louis Jadot Bourgogne | Pinot Noir, Bourgogne, Francia, 2018`,
    description: '',
    priceUs: '59',
    priceMxn: '1,200',
  },
  {
    id: 5,
    itemName: `Clos Cibone Tradition Rouge Cru Classe,| Tiburen , Côtes de Provence , Francia 2017`,
    description: '',
    priceUs: '248',
    priceMxn: '4,700',
  },
  {
    id: 6,
    itemName: `Château Chantalouette | Merlot, Pomerol, Francia, 2012`,
    description: '',
    priceUs: '100',
    priceMxn: '1,900',
  },
  {
    id: 7,
    itemName: `Calcaire Château Hateau Les Croisilles | Malbec, Cahors, Francia, 2016`,
    description: '',
    priceUs: '108',
    priceMxn: '2,050',
  },
  {
    id: 8,
    itemName: `Crozes Hermitage Paul Jaboulet | Syrah, Côtes du Rhôn, Francia, 2015 `,
    description: '',
    priceUs: '79',
    priceMxn: '1,500',
  },
  {
    id: 9,
    itemName: `Thunevin Calvet | Granache Cotes De Rousillon Red`,
    description: '',
    priceUs: '163',
    priceMxn: '3,100',
  },
  {
    id: 10,
    itemName: `Château La Roque Pic Sain- Loup | Grenache-Syrah-Mourvedre, Languedoc, Francia, 2018`,
    description: '',
    priceUs: '95',
    priceMxn: '1.800',
  },
  {
    id: 11,
    itemName: `Coudoulet De Beaucastel | Rhône Blend, Côte Du Rhône, Francia, 2014`,
    description: '',
    priceUs: '106',
    priceMxn: '2,020',
  },
  {
    id: 12,
    itemName: `Domaine Sauger Cheverny | Pinot Noir-Gamay, Côtes Du Provance, Francia, 2017`,
    description: '',
    priceUs: '79',
    priceMxn: '1,500',
  },
  {
    id: 13,
    itemName: `Jean-Pierre Moueix | Merlot-Cabernet Franc, Bordeaux, Francia 2016`,
    description: '',
    priceUs: '71',
    priceMxn: '1,350',
  },
  {
    id: 14,
    itemName: `Mouton Cadet Vintage Edition | Bordeaux Blend, Bordeaux, Francia, 2014 - 2015`,
    description: '',
    priceUs: '74',
    priceMxn: '1,400',
  },
  {
    id: 15,
    itemName: `Clarendelle Haut Brion | Bordeaux Blend, Bordeaux, Francia, 2013`,
    description: '',
    priceUs: '71',
    priceMxn: '1,350',
  },
  {
    id: 16,
    itemName: `Domaine Du Vieux Télégraphe | Blend, Châteauneuf Du Pape, Francia, 2016`,
    description: '',
    priceUs: '252',
    priceMxn: '5,400',
  },
  {
    id: 17,
    itemName: `Domaine Du Vieux Télégramme | Blend, Châteauneuf Du Pape, Francia, 2016`,
    description: '',
    priceUs: '163',
    priceMxn: '3,100',
  },
]

const italyRedWineData = [
  {
    id: 1,
    itemName: `Miral Cantine Fina DOC | Nero d'avola, Sicilia, Italia, 2018 `,
    description: '',
    priceUs: '45',
    priceMxn: '1,050',
  },
  {
    id: 2,
    itemName: `Nifo, Orgánico | Aglianico, Campania, Italia, 2018
`,
    description: '',
    priceUs: '50',
    priceMxn: '950',
  },
  {
    id: 3,
    itemName: `Luma | Nero di Avola, Sicilia, Italia, 2018 Varvaglione`,
    description: '',
    priceUs: '69',
    priceMxn: '1,300',
  },
  {
    id: 4,
    itemName: `Papale Oro | Primitivo, Puglia, Italia, 201`,
    description: '',
    priceUs: '116',
    priceMxn: '2,200',
  },
  {
    id: 5,
    itemName: `Bertani Valpolicella Ripasso | Valpolicella Blend, Veneto, Italia, 2013`,
    description: '',
    priceUs: '76',
    priceMxn: '1,450',
  },
  {
    id: 6,
    itemName: `Rufina Chianti Frascole DOCG | Sangiovese-Canaiolo-Colorino, Toscana, Italia, 2016 `,
    description: '',
    priceUs: '75',
    priceMxn: '1,200',
  },
  {
    id: 7,
    itemName: `Luma | Syrah, Sicilia,Italia, 2018`,
    description: '',
    priceUs: '72',
    priceMxn: '1,350',
  },
  {
    id: 8,
    itemName: `La Massa Fattoria | Sangiovese-CS-Merlot-Alicante, Toscana, Italia, 2015`,
    description: '',
    priceUs: '105',
    priceMxn: '2,000',
  },
]

const spainRedWineData = [
  {
    id: 1,
    itemName: `Viña Ardanza Reserva| Tempranillo, Rioja, España, 2017`,
    description: '',
    priceUs: '126',
    priceMxn: '2,400',
  },
  {
    id: 2,
    itemName: `Cims de Porrera | Tempranillo, Priorat, España, 2009`,
    description: '',
    priceUs: '274',
    priceMxn: '5,200',
  },
  {
    id: 3,
    itemName: `Gran Reserva 904 | Tempranillo, Rioja, España, 2010`,
    description: '',
    priceUs: '197',
    priceMxn: '3,750',
  },
  {
    id: 4,
    itemName: `La Cueva del Contador | Tempranillo, Rioja, España, 2014`,
    description: '',
    priceUs: '200',
    priceMxn: '3,800',
  },
  {
    id: 5,
    itemName: `Gaudium Marques de Cáceres | Tempranillo, Rioja, España, 2014`,
    description: '',
    priceUs: '237',
    priceMxn: '4,500',
  },
  {
    id: 6,
    itemName: `Malpuesto | Tempranillo, Rioja, España, 2017`,
    description: '',
    priceUs: '142',
    priceMxn: '2,700',
  },
  {
    id: 7,
    itemName: `Vega Sicilia Valbuena 5 | Tempranillo,Ribera del Duero, España, 2014`,
    description: '',
    priceUs: '447',
    priceMxn: '8,500',
  },
  {
    id: 8,
    itemName: `Valdubón Crianza | Tempranillo, Ribera del Duero, España, 2015`,
    description: '',
    priceUs: '63',
    priceMxn: '1,200',
  },
  {
    id: 9,
    itemName: `Carmelo Rodero Cosecha | Tempranillo, Ribera del Duero, España, 2018`,
    description: '',
    priceUs: '71',
    priceMxn: '1,350',
  },
  {
    id: 10,
    itemName: `Carmelo Rodero Crianza | Tempranillo-Garnacha, Ribera del Duero, España, 2016 `,
    description: '',
    priceUs: '124',
    priceMxn: '2,350',
  },
  {
    id: 11,
    itemName: `Carmelo Rodero Pago de Valtarreña | Tempranillo, Ribera del Duero, España, 2016 `,
    description: '',
    priceUs: '237',
    priceMxn: '4,500',
  },
  {
    id: 12,
    itemName: `Monteabellón 14 meses | Tempranillo, Ribera del Duero, España, 2015`,
    description: '',
    priceUs: '69',
    priceMxn: '1,300',
  },
  {
    id: 13,
    itemName: `Majuelos de Callejo Crianza | Tempranillo, Ribera del Duero, España, 2015 `,
    description: '',
    priceUs: '129',
    priceMxn: '2,450',
  },
  {
    id: 14,
    itemName: `Emilio Moro Malleolus | Tempranillo, Ribera del Duero, España, 2016`,
    description: '',
    priceUs: '126',
    priceMxn: '2,400',
  },
  {
    id: 15,
    itemName: `Damana Cosecha | Tempranillo, Ribera del Duero, España, 2018`,
    description: '',
    priceUs: '63',
    priceMxn: '1,200',
  },
  {
    id: 16,
    itemName: `Hacienda Solano Viñas Viejas | Tempranillo, Ribera del Duero, España, 2017`,
    description: '',
    priceUs: '129',
    priceMxn: '2,450',
  },
  {
    id: 17,
    itemName: `Bozeto De Exopto Cosecha | Tempranillo, Rioja, España, 2019`,
    description: '',
    priceUs: '63',
    priceMxn: '1,200',
  },
  {
    id: 18,
    itemName: ``,
    description: '',
    priceUs: '',
    priceMxn: '',
  },
  {
    id: 19,
    itemName: ``,
    description: '',
    priceUs: '',
    priceMxn: '',
  },
  {
    id: 20,
    itemName: ``,
    description: '',
    priceUs: '',
    priceMxn: '',
  },
]
