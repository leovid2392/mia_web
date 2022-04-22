import Hero from '../../../components/Hero'
import Layout from '../../../components/layout'
import MenuItems from '../../../components/MenuItems'

import TitlePage from '../../../components/TitlePage'

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
      <TitlePage text='desayunos' />
      <MenuItems title='bowls' data={bowlsData} />
    </Layout>
  )
}

const bowlsData = [
  {
    id: 1,
    itemName: 'BOWL DE FRUTA',
    description:
      'Manzana, melón valenciano, melón chino, plátano, papaya, kiwi, fresa, granola y yogurt griego sin azúcar',
    price: '150',
  },
]
