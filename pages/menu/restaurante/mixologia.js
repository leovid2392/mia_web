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
      <TitlePage text='cocktails' />
      <Paragraph
        text='LOS PRECIOS SON EN PESOS
E INCLUYEN 16% DE IVA'
      />
      <MenuItems title='' data={cocktailsData} />
    </Layout>
  )
}

const cocktailsData = [
  {
    id: 1,
    itemName: 'ALBA',
    description:
      'Vodka Stolichnaya, Soda de Lima, Puré de Pepino, Limón Amarillo, Miel de Agave',
    price: '320',
  },
  {
    id: 2,
    itemName: 'OCASO',
    description:
      'Ginebra Mexicana Ginstone, Vermú Botánico de Autor, Limón Amarillo, Miel de Agave',
    price: '320',
  },
  {
    id: 3,
    itemName: 'ATARDECER',
    description:
      'Mezcal Amarás Espadín Joven, Infusión de Té Negro, Limón Amarillo, Miel de Agave',
    price: '320',
  },
  {
    id: 4,
    itemName: 'CREPÚSCULO',
    description:
      'Whisky Bushmills Black Bush, Licor Francés Chambord, Arándano, Limón Amarillo, Miel de Agave',
    price: '320',
  },
  {
    id: 4,
    itemName: 'MIXOLOGÍA',
    description: 'Autor, Personalizado. Destilado/Licor +$89',
    price: '320',
  },
]
