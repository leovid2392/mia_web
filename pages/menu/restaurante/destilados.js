import Hero from '../../../components/Hero'
import Layout from '../../../components/layout'
import MenuItems from '../../../components/MenuItems'
import MenuItemsDrinks from '../../../components/MenuItemDrinks'

// import itemNamePage from '../../../components/itemNamePage'
import Paragraph from '../../../components/Paragraph'

import hero1 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'
import hero2 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'
import hero3 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'

import menuStyles from '../../../styles/MenuPage.module.css'
import TitlePage from '../../../components/TitlePage'

export default function Destilados() {
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
        <TitlePage text='destilados' />
      </div>
      <Paragraph
        text='LOS PRECIOS SON EN PESOS
E INCLUYEN 16% DE IVA'
      />
      <Paragraph text='SERVICIO DE BOTELLAS INCLUYE 2 RED BULL' />
      <MenuItemsDrinks title='tequila' data={tequilaData} />
      <MenuItemsDrinks title='botellas magnum' data={botellasMagnumData} />
      <MenuItemsDrinks title='gin' data={ginData} />
    </Layout>
  )
}
const tequilaData = [
  {
    id: 1,
    category: '',
    itemName: 'MAESTRO DOBEL BLANCO 700 ML',
    cupPrice: '280',
    bottlePrice: '3,500',
    img: '#',
  },
  {
    id: 2,
    category: '',
    itemName: 'MAESTRO DOBEL REPOSADO 700 ML',
    cupPrice: '320',
    bottlePrice: '4,000',
    img: '#',
  },
  {
    id: 3,
    category: '',
    itemName: 'MAESTRO DOBEL AÑEJO 700 ML',
    cupPrice: '420',
    bottlePrice: '5,000',
    img: '#',
  },
  {
    id: 4,
    category: '',
    itemName: 'MAESTRO DOBEL DIAMANTE 700 ML',
    cupPrice: '380',
    bottlePrice: '4,500',
    img: '#',
  },
  {
    id: 5,
    category: '',
    itemName: '1800 CRISTALINO 700 ML',
    cupPrice: '420',
    bottlePrice: '5,000',
    img: '#',
  },
  {
    id: 6,
    category: '',
    itemName: '1800 MILENIO 750 ML',
    cupPrice: '1,050',
    bottlePrice: '14,000',
    img: '#',
  },
  {
    id: 7,
    category: '',
    itemName: 'MAESTRO DOBEL 50 CRISTALINO 750 ML',
    cupPrice: '1,150',
    bottlePrice: '14,600',
    img: '#',
  },
  {
    id: 8,
    category: '',
    itemName: 'MAESTRO DOBEL 50 EXTRA AÑEJO 750 ML',
    cupPrice: '3,800',
    bottlePrice: '47,200',
    img: '#',
  },
  {
    id: 9,
    category: '',
    itemName: 'CENTENARIO REPOSADO 700 ML',
    cupPrice: '220',
    bottlePrice: '3,000',
    img: '#',
  },
  {
    id: 10,
    category: '',
    itemName: 'CENTENARIO LEYENDA EXTRA AÑEJO 750 ML',
    cupPrice: '980',
    bottlePrice: '11,000',
    img: '#',
  },
  {
    id: 11,
    category: '',
    itemName: 'RVA. DE LA FAMILIA PLATINO 750 ML',
    cupPrice: '380',
    bottlePrice: '4,500',
    img: '#',
  },
  {
    id: 12,
    category: '',
    itemName: 'RVA. DE LA FAMILIA REPOSADO 750 ML',
    cupPrice: '420',
    bottlePrice: '5,000',
    img: '#',
  },
  {
    id: 13,
    category: '',
    itemName: 'RVA. DE LA FAMILIA EXTRA AÑEJO 750 ML',
    cupPrice: '980',
    bottlePrice: '11,000',
    img: '#',
  },
  {
    id: 14,
    category: '',
    itemName: 'CLASE AZUL PLATA 750 ML',
    cupPrice: '840',
    bottlePrice: '10,600',
    img: '#',
  },
  {
    id: 15,
    category: '',
    itemName: 'CLASE AZUL REPOSADO 750 ML',
    cupPrice: '1,050',
    bottlePrice: '13,500',
    img: '#',
  },
  {
    id: 16,
    category: '',
    itemName: 'CLASE AZUL ULTRA AÑEJO 750 ML',
    cupPrice: '',
    bottlePrice: '79,000',
    img: '#',
  },
  {
    id: 17,
    category: '',
    itemName: 'DON JULIO 70 | 700 ML',
    cupPrice: '560',
    bottlePrice: '6,500',
    img: '#',
  },
  {
    id: 18,
    category: '',
    itemName: 'DON JULIO 1942 | 700 ML',
    cupPrice: '1,150',
    bottlePrice: '15,000',
    img: '#',
  },
  {
    id: 19,
    category: '',
    itemName: 'HERRADURA REPOSADO | 700 ML',
    cupPrice: '280',
    bottlePrice: '3,500',
    img: '#',
  },
  {
    id: 20,
    category: '',
    itemName: 'HERRADURA ULTRA 700 ML',
    cupPrice: '380',
    bottlePrice: '4,500',
    img: '#',
  },
  {
    id: 21,
    category: '',
    itemName: 'PATRON SILVER 750 ML',
    cupPrice: '320',
    bottlePrice: '4,000',
    img: '#',
  },
  {
    id: 22,
    category: '',
    itemName: 'PATRON REPOSADO 750 ML',
    cupPrice: '380',
    bottlePrice: '4,500',
    img: '#',
  },
  {
    id: 23,
    category: '',
    itemName: 'PATRON AÑEJO 750 ML',
    cupPrice: '420',
    bottlePrice: '5,000',
    img: '#',
  },
  {
    id: 24,
    category: '',
    itemName: 'GRAN PATRON BURDEOS 750 ML',
    cupPrice: '2,720',
    bottlePrice: '34,000',
    img: '#',
  },
  {
    id: 25,
    category: '',
    itemName: 'GRAN PATRON PIEDRA 750 ML',
    cupPrice: '2,500',
    bottlePrice: '31,000',
    img: '#',
  },
  {
    id: 26,
    category: '',
    itemName: 'JOSE CUERVO TRADICIONAL 950 ML',
    cupPrice: '220',
    bottlePrice: '3,000',
    img: '#',
  },
  {
    id: 27,
    category: '',
    itemName: 'TIERRA NOBLE BLANCO 750 ML',
    cupPrice: '280',
    bottlePrice: '3,500',
    img: '#',
  },
  {
    id: 28,
    category: '',
    itemName: 'TIERRA NOBLE REPOSADO 750 ML',
    cupPrice: '320',
    bottlePrice: '4,000',
    img: '#',
  },
  {
    id: 29,
    category: '',
    itemName: 'TIERRA NOBLE CRISTALINO 750 ML',
    cupPrice: '360',
    bottlePrice: '4,500',
    img: '#',
  },
  {
    id: 30,
    category: '',
    itemName: 'TIERRA NOBLE AÑEJO 750 ML',
    cupPrice: '380',
    bottlePrice: '4,500',
    img: '#',
  },
  {
    id: 31,
    category: '',
    itemName: 'TIERRA NOBLE EXTRA AÑEJO 750 ML',
    cupPrice: '980',
    bottlePrice: '10,500',
    img: '#',
  },
  {
    id: 32,
    category: '',
    itemName: 'AVION CRISTALINO 750 ML',
    cupPrice: '620',
    bottlePrice: '7,500',
    img: '#',
  },
  {
    id: 33,
    category: '',
    itemName: 'AVION RESERVA 44 700 ML',
    cupPrice: '820',
    bottlePrice: '9,000',
    img: '#',
  },
  {
    id: 34,
    category: '',
    itemName: 'LOS GONZALEZ BLANCO 800 ML',
    cupPrice: '320',
    bottlePrice: '4,000',
    img: '#',
  },
  {
    id: 35,
    category: '',
    itemName: 'LOS GONZALEZ AÑEJO 800 ML',
    cupPrice: '380',
    bottlePrice: '4,500',
    img: '#',
  },
  {
    id: 36,
    category: '',
    itemName: 'TEREMANA BLANCO 750 ML',
    cupPrice: '280',
    bottlePrice: '3,500',
    img: '#',
  },
  {
    id: 37,
    category: '',
    itemName: 'TEREMANA REPOSADO 750 ML',
    cupPrice: '320',
    bottlePrice: '4,000',
    img: '#',
  },
  {
    id: 38,
    category: '',
    itemName: 'SANTANERA 750 ML',
    cupPrice: '620',
    bottlePrice: '7,500',
    img: '#',
  },
]
const botellasMagnumData = [
  {
    id: 1,
    category: '',
    itemName: 'MAESTRO DOBEL DIAMANTE 1750 ML',
    cupPrice: '',
    bottlePrice: '9,800',
    img: '#',
  },
  {
    id: 2,
    category: '',
    itemName: 'BELVEDERE 1750 ML',
    cupPrice: '',
    bottlePrice: '12,800',
    img: '#',
  },
  {
    id: 3,
    category: '',
    itemName: 'BELVEDERE 6000 ML',
    cupPrice: '',
    bottlePrice: '30,000',
    img: '#',
  },
  {
    id: 4,
    category: '',
    itemName: 'GREY GOOSE 1750 ML',
    cupPrice: '',
    bottlePrice: '12,800',
    img: '#',
  },
  {
    id: 5,
    category: '',
    itemName: 'GREY GOOSE ',
    cupPrice: '4500 ML',
    bottlePrice: '24,500',
    img: '#',
  },
]
const ginData = [
  {
    id: 1,
    category: '',
    itemName: 'BEEFEATER LONDON DRY 750 ML',
    cupPrice: '240 ',
    bottlePrice: '3,000',
    img: '#',
  },
  {
    id: 2,
    category: '',
    itemName: 'BEEFEATER PINK 700 ML',
    cupPrice: '280',
    bottlePrice: '3,500',
    img: '#',
  },
  {
    id: 3,
    category: '',
    itemName: 'BEEFEATER BLACKBERRY 700 ML',
    cupPrice: '280',
    bottlePrice: '3,500',
    img: '#',
  },
  {
    id: 4,
    category: '',
    itemName: 'BOMBAY SAPPHIRE 750 ML',
    cupPrice: '280',
    bottlePrice: '3,500',
    img: '#',
  },
  {
    id: 5,
    category: '',
    itemName: 'HENDRICKS 750 ML',
    cupPrice: '380',
    bottlePrice: '4,500',
    img: '#',
  },
  {
    id: 6,
    category: '',
    itemName: 'GINSTONE 750 ML',
    cupPrice: '280',
    bottlePrice: '3,500',
    img: '#',
  },
  {
    id: 7,
    category: '',
    itemName: 'MONKEY 47 500 ML',
    cupPrice: '380',
    bottlePrice: '4,500',
    img: '#',
  },
  {
    id: 8,
    category: '',
    itemName: 'BODDLES MULBERRY 750 ML',
    cupPrice: '280',
    bottlePrice: '3,500',
    img: '#',
  },
  {
    id: 9,
    category: '',
    itemName: 'MARTIN MILLER 700 ML',
    cupPrice: '380',
    bottlePrice: '4,500',
    img: '#',
  },
]
