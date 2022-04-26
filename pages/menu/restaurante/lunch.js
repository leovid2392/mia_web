import Hero from '../../../components/Hero'
import Layout from '../../../components/layout'
import MenuItems from '../../../components/MenuItems'

import TitlePage from '../../../components/TitlePage'

import Paragraph from '../../../components/Paragraph'

import hero1 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'
import hero2 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'
import hero3 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'

export default function Lunch() {
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
      <TitlePage text='lunch' />
      <Paragraph
        text='LOS PRECIOS SON EN PESOS
E INCLUYEN 16% DE IVA'
      />
      <MenuItems title='entradas' data={entradasData} />
      <MenuItems title='principales' data={principalesData} />
    </Layout>
  )
}

const entradasData = [
  {
    id: 1,
    itemName: 'Tacos de Jícama rellenos de Sashimi de Atún',
    description:
      'Tortilla de Jícama, atún aliñado con aceite de ajonjolí, pepino, guacamole y mayonesa de habanero',
    price: '360',
  },
  {
    id: 2,
    itemName: 'Tiradito de Pesca del Día',
    description:
      'Marinado en lima, aceite de oliva, sal de mar, pimienta fresca molida y ralladura de lima, acompañado de salsa Ponzu-Lima.',
    price: '420',
  },
  {
    id: 3,
    itemName: 'Guacamole',
    description:
      'Pulpa de aguacate con un toque de jugo de limón, aceite de olivo extra virgen y tomate cherry de colores',
    price: '280',
  },
  {
    id: 4,
    itemName: 'Ceviche Verde de Pescado',
    description:
      'Fresca pesca del día encurtida en limón servido en aioli de cilantro y jalapeño, aguacate y pepino',
    price: '360',
  },
  {
    id: 5,
    itemName: 'Ceviche de Atún',
    description: 'Atún fresco, salsa agridulce y germen de soya',
    price: '380',
  },
  {
    id: 6,
    itemName: 'Tartar de Salmón Ora King',
    description:
      'Aceite de trufa blanca, Echallots, alcaparras, mostaza Dijon, servido con crotón de la casa.',
    price: '420',
  },
  {
    id: 7,
    itemName: 'Aguachile Rojo de Camarón del Golfo',
    description:
      'Camarón rosa de Campeche curtido en jugo de lima en salsa de pimiento rojo rostizado y chile serrano asado, acompañado de pepino',
    price: '420',
  },
  {
    id: 8,
    itemName: 'Frito del Mar',
    description:
      'Camarón U12, pesca del día y calamar americano rebosados en tempura de cerveza oscura, acompañados de mayonesa de Sriracha',
    price: '390',
  },
  {
    id: 9,
    itemName: 'Siete Mares',
    description:
      'Deliciosa combinación de camarón jumbo, mejillón verde chileno, calamar americano, pesca del día, zanahoria y papas baby en robusto fondo de mariscos de chile chipotle y epazote',
    price: '390',
  },
  {
    id: 10,
    itemName: 'Ensalada Fresca de Tomates',
    description:
      'Queso mozzarella fresco, tomate cherry, aliñados con pesto, aceite de olivo extra virgen, albahaca, sal de mar y pimienta',
    price: '240',
  },
  {
    id: 11,
    itemName: 'Ensalada de Betabel Rostizado',
    description:
      'Cremoso de queso de cabra dulce, nuez garapiñada y reducción de balsámico.',
    price: '240',
  },
  {
    id: 12,
    itemName: 'Tiradito de Atún',
    description:
      'Laminas de lomo de atún, cremoso de aguacate, cremoso de habanero, pepino, salsa de soya y toque de aceite de ajonjolí',
    price: '420',
  },
  {
    id: 13,
    itemName: 'Cevivhe Mixto Peruano',
    description:
      'Pescado y camarón marinado en jugo de limón y aceite de oliva, cebolla morada, ají, granos de elote y tostones de camote amarillo',
    price: '420',
  },
]

const principalesData = [
  {
    id: 1,
    itemName: 'Salmón y Quinoa',
    description:
      'Tortilla de Jícama, atún aliñado con aceite de ajonjolí, pepino, guacamole y mayonesa de habanero',
    price: '360',
  },
  {
    id: 2,
    itemName: '',
    description: '',
    price: '',
  },
  {
    id: 3,
    itemName: '',
    description: '',
    price: '',
  },
  {
    id: 4,
    itemName: '',
    description: '',
    price: '',
  },
  {
    id: 5,
    itemName: '',
    description: '',
    price: '',
  },
]
