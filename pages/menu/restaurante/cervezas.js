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
        <TitlePage text='cervezas' />
      </div>
      <Paragraph
        text='LOS PRECIOS SON EN PESOS
E INCLUYEN 16% DE IVA'
      />
      <MenuItems title='artesanal' data={cervezasData} />
    </Layout>
  )
}

const cervezasData = [
  {
    id: 1,
    itemName: 'Wendlandt Vaquita Marina',
    description: '',
    price: '180',
  },
  {
    id: 2,
    itemName: 'Wendlandt Perro del Mar',
    description: '',
    price: '180',
  },
  {
    id: 3,
    itemName: 'Wendlandt Foca Parlante',
    description: '',
    price: '180',
  },
  {
    id: 4,
    itemName: 'Wendlandt Vaquita Veraniega',
    description: '',
    price: '180',
  },
  {
    id: 5,
    itemName: 'Sta Julieta',
    description: '',
    price: '180',
  },
  {
    id: 6,
    itemName: 'Mia',
    description: '',
    price: '160',
  },
  {
    id: 7,
    itemName: 'Xela Ipa',
    description: '',
    price: '180',
  },
  {
    id: 8,
    itemName: 'Xela Pilsner',
    description: '',
    price: '180',
  },
  {
    id: 9,
    itemName: 'Transpeninsular carretera km 3',
    description: '',
    price: '180',
  },
  {
    id: 10,
    itemName: 'Lager Local',
    description: '',
    price: '220',
  },
  {
    id: 11,
    itemName: 'Sur 69',
    description: '',
    price: '220',
  },
  {
    id: 12,
    itemName: 'Famous Peanut Butter',
    description: '',
    price: '220',
  },
  {
    id: 13,
    itemName: 'Marzen',
    description: '',
    price: '260',
  },
  {
    id: 14,
    itemName: 'Schwarz',
    description: '',
    price: '260',
  },
  {
    id: 15,
    itemName: 'Haka Negui Consup',
    description: '',
    price: '260',
  },
  {
    id: 16,
    itemName: 'Misterio',
    description: '',
    price: '180',
  },
  {
    id: 17,
    itemName: 'La Lupulosa',
    description: '',
    price: '180',
  },
  {
    id: 18,
    itemName: 'Cyprez Stout',
    description: '',
    price: '220',
  },
]
