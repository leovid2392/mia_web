import Hero from '../../../components/Hero'
import Layout from '../../../components/layout'
import MenuItems from '../../../components/MenuItems'

import TitlePage from '../../../components/TitlePage'

import Paragraph from '../../../components/Paragraph'

import hero1 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'
import hero2 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'
import hero3 from '../../../public/images/menuDesayuno/hmia-6146_small750x500.jpg'

import menuStyles from '../../../styles/MenuPage.module.css'

export default function Cenas() {
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
        <TitlePage text='cenas' />
      </div>
      <Paragraph
        text='LOS PRECIOS SON EN PESOS
E INCLUYEN 16% DE IVA'
      />
      <MenuItems title='entradas' data={entradasData} />
      <MenuItems title='principales' data={principalesData} />
      <MenuItems title='pizzas' data={pizzaData} />
    </Layout>
  )
}

const entradasData = [
  {
    id: 1,
    itemName: 'Crema de Tomate',
    description:
      'Jitomates rostizados a las finas hierbas, servida con crotones a la mantequilla y tomates cherrys rostizados',
    price: '200',
  },
  {
    id: 2,
    itemName: 'Callo de Hacha',
    description: 'Sobre risotto al champagne',
    price: '380',
  },
  {
    id: 3,
    itemName: 'Camarones al Coco',
    description: 'Con salsa de mango, toque de jengibre y menta',
    price: '380',
  },
  {
    id: 4,
    itemName: 'Mejillones Meuniere',
    description: 'Con cebolla, ajo, perejil y vino blanco',
    price: '280',
  },
  {
    id: 5,
    itemName: 'Tartar de Atún y Foie Gras',
    description: 'Delicada combinación de lomo de atún e hígado de pato',
    price: '455',
  },
  {
    id: 6,
    itemName: 'Portobello Confit',
    description:
      'Horneado lentamente por cinco horas, montado sobre pan campestre con mousse de hongos y trufa negra',
    price: '280',
  },
  {
    id: 7,
    itemName: 'Ensalada Mía',
    description:
      'Lechuga mixta, arúgula, durazno, almendra tostada, zucchini al grill, tomate cherry, arúgula, queso de cabra, nuez caramelizada y aderezo de queso roquefort, reducción de manzana y vino tinto',
    price: '260',
  },
  {
    id: 8,
    itemName: 'Ensalada de Betabel',
    description:
      'Betabel rostizado a las finas hierbas, acompañado de cremoso de queso de cabra, miel de agave, reducción de balsámico y nuez caramelizada',
    price: '240',
  },
  {
    id: 9,
    itemName: 'Cangrejo Concha Suave',
    description:
      'Cangrejo frito servido con puré de camote, perlas de aguacate y pepitas',
    price: '380',
  },
  {
    id: 10,
    itemName: 'Tartar de Salmón Ora King',
    description:
      'Servido con alcaparras, echallots, y toque de aceite italiano de trufa blanca',
    price: '420',
  },
]

const principalesData = [
  {
    id: 1,
    itemName: 'Pollo Zurich',
    description:
      'Finas tiras de pechuga de pollo bañadas en cremosa salsa de champiñones frescos, acompañado de pasta fresca hecha en casa Spätzle.',
    price: '410',
  },
  {
    id: 2,
    itemName: 'Mero Miso | Morita',
    description:
      'Marinado en salsa tradicional de chile morita con un toque de miso, salteado con esquites perfumados con epazote, cremoso de aguacate con coco, alioli de limón, cebolla curtida y reducción de cerveza obscura',
    price: '490',
  },
  {
    id: 3,
    itemName: 'Pescado con Hongos Silvestres',
    description:
      'Pesca del día en salsa de variedad de hongos silvestres, puré de papa y un toque de aceite de trufa',
    price: '510',
  },
  {
    id: 4,
    itemName: 'Black Cod Chardonnay',
    description:
      'Filete de bacalao fresco en salsa blanca de Chardonnay y queso mascarpone, acompañado de tomate cherry, espárragos y cebolla cambray',
    price: '990',
  },
  {
    id: 5,
    itemName: 'Salmón Ora King en Pipián de Melón',
    description:
      'Servido en un delicioso pipián de melón melón acompañado con "risotto" de quinoa',
    price: '680',
  },
  {
    id: 6,
    itemName: 'Camarones Tamarindo Chipotle',
    description: 'Servidos con arroz basmati',
    price: '650',
  },
  {
    id: 7,
    itemName: `Risotto 'MIA' de Mariscos`,
    description:
      'Camarones jumbo del Golfo de México, chipirones, mejillón verde neo zelandés y pesca local sobre delicioso risotto preparado con tomate Cherry, espárragos, cebollas cambray, queso parmesano y vino blanco',
    price: '750',
  },
  {
    id: 8,
    itemName: 'Atún Sellado en Costra de Ajonjolí ',
    description:
      'Atún fresco, servido sobre cama de verduras, exquisita salsa de cítricos y mayonesa de wasabi',
    price: '680',
  },
  {
    id: 9,
    itemName: 'Pato a la Jamaica y Fresa',
    description:
      'Pato confitado en deliciosa salsa de Jamaica y fresa, acompañado con puré de camote',
    price: '690',
  },
  {
    id: 10,
    itemName: 'Hamburguesa 230 gr.',
    description:
      'Carne Wagyu australiana servida en pan negro, alioli de trufa negra, jitomate deshidratado, arúgula baby y queso de oveja semicurado español,acompañada de papas cambray al romero',
    price: '480',
  },
  {
    id: 11,
    itemName: 'Short Rib',
    description:
      'Cocinado lentamente al horno con cerveza oscura, ajo, vino tinto, sellado con mostaza, acompañado de puré de papa y vegetales al grill',
    price: '950',
  },
  {
    id: 12,
    itemName: 'Filete de Res Roquefort',
    description:
      'Black Angus certificado canadiense en salsa roquefort, acompañado con puré de papa rústico y verduras a la mantequilla',
    price: '1100',
  },
  {
    id: 13,
    itemName: 'Chamorro de Cordero',
    description:
      'Preparado en su jugo a cocción lenta, acompañado de Cous-Cous marroquí',
    price: '950',
  },
  {
    id: 14,
    itemName: 'Rib Eye Black Angus 1000 gr.(para 2 personas)',
    description:
      'Jugoso corte de un kilo Black Angus americano certificado, servido al término de su gusto acompañado de papas a la francesa o puré de papa rustico y verduras al grill',
    price: '2200',
  },
  {
    id: 15,
    itemName: 'Pasta de Langosta Caribeña',
    description:
      'Cola de langosta caribeña de pesca local, tomate cherry, ajo, perejil, tomate deshidratado perfumado aceite italiano de trufa blanca y albahaca',
    price: '1100',
  },
  {
    id: 16,
    itemName: 'Robalo en Queso de Cabra',
    description:
      'Tierno filete de Robalo bañado en salsa de queso francés de cabra y vino seco, sobre pure rustico de papa y espárragos a la mantequilla',
    price: '510',
  },
]
const pizzaData = [
  {
    id: 1,
    itemName: 'Campagnola',
    description: 'Corazón de alcachofa, hongos, palmito y trufa',
    price: '450',
  },
  {
    id: 2,
    itemName: 'Pizza Clásica',
    description: 'Hawaina | Pepperoni | Margarita | Vegetariana',
    price: '350',
  },
  {
    id: 3,
    itemName: 'Scandinava',
    description:
      'Queso Mozzarella, provolone ahumado queso de Cabra, aceitunas negras y salmón ahumado',
    price: '500',
  },
  {
    id: 4,
    itemName: 'Pastor',
    description:
      'Delicia mexicana de carne de cerdo al pastor con piña rostizada',
    price: '450',
  },
  {
    id: 5,
    itemName: 'Suprema',
    description: 'Arúgula, jamón serrano, queso burrata y láminas de parmesano',
    price: '500',
  },
  {
    id: 6,
    itemName: 'Marinara',
    description:
      'Salsa de tomate, mozzarella, arúgula, tomate cherry y camarón jumbo',
    price: '480',
  },
  {
    id: 7,
    itemName: 'Pizza de Langosta',
    description:
      'Salsa de tomate, queso mozzarella, Aceite de trufa blanca, tomate Cherry y cola de langosta',
    price: '1100',
  },
]
