import Hero from '../../../components/Hero'
import Layout from '../../../components/layout'
import MenuItems from '../../../components/MenuItems'

import TitlePage from '../../../components/TitlePage'

import Paragraph from '../../../components/Paragraph'

import hero1 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'
import hero2 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'
import hero3 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'

import menuStyles from '../../../styles/MenuPage.module.css'

export default function Lunch() {
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
        <TitlePage text='lunch' />
      </div>
      <Paragraph
        text='LOS PRECIOS SON EN PESOS
E INCLUYEN 16% DE IVA'
      />
      <MenuItems title='entradas' data={entradasData} />
      <MenuItems title='principales' data={principalesData} />
      <MenuItems title='tacos' data={tacosData} />
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
      'Acompañado de ensalada de aguacate, tomate cherry,mango y Quinoa peruana',
    price: '680',
  },
  {
    id: 2,
    itemName: 'Hamburguesa Angus',
    description: '220 g de carne black angus con papas y pepinillo',
    price: '430',
  },
  {
    id: 3,
    itemName: 'Atún Sellado en Costra de Ajonjolí ',
    description:
      'Bañado con salsa de cítricos al jengibre, acompañado de verduras paja salteadas con un toque de salsa de soya y aceite de ajonjolí',
    price: '550',
  },
  {
    id: 4,
    itemName: 'Pepito de Arrachera Angus',
    description:
      'Jugosa arrachera marinada sobre guacamole y frijoles refritos, servida en pan de la casa, acompañado de chiles toreados',
    price: '400',
  },
  {
    id: 5,
    itemName: 'Costillar Baby Back BBQ',
    description:
      '400 g, de costilla de cerdo bañadas en salsa BBQ tamarindo-chipotle',
    price: '450',
  },
  {
    id: 6,
    itemName: 'Rib Eye Black Angus 500 g',
    description:
      'Corte jugoso asado al término de su preferencia, acompañado de puré de papa o papas a la francesa',
    price: '900',
  },
  {
    id: 7,
    itemName: 'Pescado Fresco a la Talla (2 personas)',
    description:
      'Pesca del día marinado en mayonesa y adobo de tres chiles. Acompañado de tortillas recién hechas y salsa tatemada',
    price: '1350',
  },
  {
    id: 8,
    itemName: 'Tomahawk Black Angus (2 personas)',
    description:
      'Asado al término de tu preferencia, acompañado de puré de papa o papas a la francesa',
    price: '2600',
  },
  {
    id: 9,
    itemName: `Botana 'MIA' (2 personas)`,
    description:
      'Chorizo Cantimpalo español, arrachera Angus, tacos dorados,pechuga de pollo a la parrilla, quesadillas, nopal asado, cebollitas cambray, tortillas recien hechas, txistorra, queso panela, salsa y guacamole.',
    price: '1395',
  },
]

const tacosData = [
  {
    id: 1,
    itemName: 'Tacos de Rabo de Res',
    description: 'Servidos con cebolla, cilantro y salsa taquera',
    price: '330',
  },
  {
    id: 2,
    itemName: 'Tacos de Lechón',
    description: 'Con cebolla morada encurtida y cremoso de aguacate',
    price: '330',
  },
  {
    id: 3,
    itemName: 'Tacos de Pato',
    description: 'Salsa tatemada y cebolla encurtida',
    price: '370',
  },
  {
    id: 4,
    itemName: 'Tacos Baja de Camarón',
    description: 'Camarón jumbo rebosado, cremoso de aguacate y salsa mexicana',
    price: '370',
  },
  {
    id: 5,
    itemName: 'Tacos de Cochinita',
    description: 'Con guacamole y salsa Xni pec',
    price: '290',
  },
  {
    id: 6,
    itemName: 'Surtido de Pesca',
    description: 'Ensalada de col morada, salsa mexicana y cremoso de aguacate',
    price: '370',
  },
]
