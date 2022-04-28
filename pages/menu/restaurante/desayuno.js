import Hero from '../../../components/Hero'
import Layout from '../../../components/layout'
import MenuItems from '../../../components/MenuItems'

import TitlePage from '../../../components/TitlePage'

import Paragraph from '../../../components/Paragraph'

import hero1 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'
import hero2 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'
import hero3 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'
import menuStyles from '../../../styles/MenuPage.module.css'

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
        <TitlePage text='desayunos' />
      </div>
      <Paragraph
        text='LOS PRECIOS SON EN PESOS
E INCLUYEN 16% DE IVA'
      />
      <MenuItems title='bowls' data={bowlsData} />
      <MenuItems title='tradicionales' data={tradicionalesData} />
      <MenuItems title='principales' data={principalesData} />
      <MenuItems title='huevos' data={huevosData} />
    </Layout>
  )
}

const bowlsData = [
  {
    id: 1,
    itemName: 'BOWL DE FRUTA',
    description:
      'Manzana, melón valenciano, melón chino, plátano, papaya, kiwi y fresa',
    price: '150',
  },
  {
    id: 2,
    itemName: 'BOWL DE FRUTA CON YOGURT Y GRANOLA',
    description:
      'Manzana, melón valenciano, melón chino, plátano papaya, kiwi, fresa, granola, y yogurt griego sin azúcar.',
    price: '180',
  },
  {
    id: 3,
    itemName: 'BOWL DE AVENA',
    description:
      'Avena cocida en agua con fresa, granola y yogurt griego. Fruta extra $30 pesos',
    price: '150',
  },
]

const tradicionalesData = [
  {
    id: 1,
    itemName: 'ENFRIJOLADAS',
    description:
      'Rellenas de pavo deshebrado con queso Oaxaca y bañadas con salsa de frijol',
    price: '190',
  },
  {
    id: 2,
    itemName: 'SOPE DE CECINA',
    description:
      'Sope de masa nixtamalizada, con base de frijol refrito, cecina, queso Oaxaca, aguacate y cilantro',
    price: '180',
  },
  {
    id: 3,
    itemName: 'CHILAQUILES',
    description:
      'Totopo de tortilla bañado con salsa roja o verde, acompañado de crema, rodaja de cebolla y cilantro. Extra de Pollo, pavo o huevo ($30 pesos)',
    price: '180',
  },
  {
    id: 4,
    itemName: 'HOT CAKES',
    description: 'Acompañados de tocino, nutella, fresa o miel maple',
    price: '180',
  },
]
const principalesData = [
  {
    id: 1,
    itemName: 'TOAST DE AGUACATE',
    description:
      'Pan de centeno horneado en casa, aguacate, aceite de olivo extra virgen, tomate uva y flor de sal',
    price: '160',
  },
  {
    id: 2,
    itemName: 'TOAST DE MANZANA',
    description:
      'Pan integral horneado en casa, cebolla caramelizada, tomate deshidratado al sol y queso emmental',
    price: '220',
  },
  {
    id: 3,
    itemName: 'CROQUE MADAME',
    description:
      'Pan de masa madre, jamón de pavo ahumado, huevo pochado y queso emmental',
    price: '220',
  },
  {
    id: 4,
    itemName: 'MOLLETES',
    description:
      'Bolillo hecho en casa, frijoles aromatizados con hoja de aguacate, queso manchego, pico de gallo',
    price: '180',
  },
]
const huevosData = [
  {
    id: 1,
    itemName: 'HUEVOS MIA',
    description:
      'Espejo de frijol aromatizado con hoja de aguacate, huevo revuelto con cebolla y chaya, chiltomate y queso Cotija',
    price: '180',
  },
  {
    id: 2,
    itemName: 'HUEVOS RANCHEROS',
    description:
      'Huevos fritos montados sobre tortilla y frijol aromatizado con hoja de aguacate, bañados con salsa ranchera',
    price: '200',
  },
  {
    id: 3,
    itemName: 'HUEVOS MOTULEÑOS',
    description:
      'Huevos fritos montados en tortilla caliente, salsa de tomate, plátano macho, chícharos y jamón de pierna',
    price: '200',
  },
  {
    id: 4,
    itemName: 'HUEVOS CAMPESINOS',
    description:
      'Huevos fritos sobre papa hash brown de la casa hecha al momento. Acompañado de pan hecho en casa',
    price: '180',
  },
  {
    id: 5,
    itemName: 'OMELETTE AL GUSTO',
    description: 'Con jamón, tocino, champiñón o espinaca',
    price: '200',
  },
  {
    id: 6,
    itemName: 'OMELETTE DE SALMÓN',
    description:
      'Finas láminas de salmón aromatizadas con eneldo, alcaparras y queso emmental',
    price: '220',
  },
  {
    id: 7,
    itemName: 'OMELETTE VEGETARIANO',
    description:
      'Clásico omelette relleno de tomate deshidratado, zucchini, cebolla salteada, queso emmental y aromatizado con albahaca',
    price: '220',
  },
]
