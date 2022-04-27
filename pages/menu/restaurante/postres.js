import Hero from '../../../components/Hero'
import Layout from '../../../components/layout'
import MenuItems from '../../../components/MenuItems'

import TitlePage from '../../../components/TitlePage'

import Paragraph from '../../../components/Paragraph'

import hero1 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'
import hero2 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'
import hero3 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'

export default function Desayuno() {
  return (
    <Layout>
      <Hero
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
      />
      <TitlePage text='postres' />
      <Paragraph
        text='LOS PRECIOS SON EN PESOS
E INCLUYEN 16% DE IVA'
      />
      <MenuItems title='postres' data={postresData} />
      <MenuItems title='café' data={cafeData} />
      <MenuItems title='digestivos' data={digestivosData} />
      <MenuItems title='vino de postre | 80 ML' data={vinoDePostre80mlData} />
    </Layout>
  )
}

const postresData = [
  {
    id: 1,
    itemName: 'Mousse de Coco',
    description: 'Cremoso de coco y pulpa de mango aromatizado con jengibre',
    price: '240',
  },
  {
    id: 2,
    itemName: 'Crème Brûlée',
    description: 'Acompañado con crocante de almendra',
    price: '240',
  },
  {
    id: 3,
    itemName: 'Pastelito Tibio de Mole con Chocolate ',
    description: 'Plátanos fritos, helado de plátano y crocante de cacao',
    price: '290',
  },
  {
    id: 4,
    itemName: 'Mousse de 3 Chocolates',
    description:
      'Pastel frío de tres chocolates con helado de vainilla. Con tierra de chocolate, almendra y frutos rojos',
    price: '290',
  },
]
const cafeData = [
  {
    id: 1,
    itemName: 'Americano',
    description: '',
    price: '70',
  },
  {
    id: 2,
    itemName: 'Cappuccino/Latte',
    description: '',
    price: '90',
  },
  {
    id: 3,
    itemName: 'Espresso',
    description: '',
    price: '70',
  },
  {
    id: 4,
    itemName: 'Té o Infusiones',
    description: '',
    price: '70',
  },
]
const digestivosData = [
  {
    id: 1,
    itemName: 'Carajillo Nixta',
    description: '',
    price: '325',
  },
  {
    id: 2,
    itemName: 'Strega',
    description: '',
    price: '290',
  },
  {
    id: 3,
    itemName: 'Sambuca Negro/Blanco',
    description: '',
    price: '290',
  },
  {
    id: 4,
    itemName: `Bailey's`,
    description: '',
    price: '290',
  },
  {
    id: 5,
    itemName: 'Chinchón Dulce',
    description: '',
    price: '290',
  },
  {
    id: 6,
    itemName: `Taylor's 30`,
    description: '',
    price: '900',
  },
  {
    id: 7,
    itemName: `Taylor's 40`,
    description: '',
    price: '1,100',
  },
]
const vinoDePostre80mlData = [
  {
    id: 1,
    itemName: 'Oremus Tokaji Late',
    description: '',
    price: '290',
  },
  {
    id: 2,
    itemName: 'Chateau Les Mingets',
    description: '',
    price: '370',
  },
  {
    id: 3,
    itemName: 'Donnafugata Passito de Panteleria',
    description: '',
    price: '400',
  },
  {
    id: 4,
    itemName: 'Recioto Della Valpolicella Bertani',
    description: '',
    price: '400',
  },
]
