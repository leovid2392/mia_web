import Hero from '../../../components/Hero'
import Layout from '../../../components/layout'
import MenuItems from '../../../components/MenuItems'
import MenuItemsDrinks from '../../../components/MenuItemDrinks'

// import itemNamePage from '../../../components/itemNamePage'
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
      <itemNamePage text='pizza garden' />
      <Paragraph
        text='LOS PRECIOS SON EN PESOS
E INCLUYEN 16% DE IVA'
      />
      <MenuItems title='entradas' data={entradasData} />
      <MenuItems title='pastas' data={pastasData} />
      <MenuItems title='pizzas' data={pizzaData} />
      <MenuItems title='postres' data={postresData} />
      {/* <MenuItemsDrinks title='Whisky & Whiskey' data={whiskyData} />
      <MenuItemsDrinks title='vodka' data={vodkaData} />
      <MenuItemsDrinks title='gin' data={ginData} />
      <MenuItemsDrinks title='ron' data={ronData} />
      <MenuItemsDrinks title='brandy' data={brandyData} />
      <MenuItemsDrinks title='mezcal' data={mezcalData} />
      <MenuItemsDrinks title='cerveza' data={beerData} />
      <MenuItemsDrinks title='bebidas suaves' data={softData} />
      <MenuItemsDrinks title='cocktails' data={cocktailsData} />
      <MenuItemsDrinks title='champagne' data={champagneData} />
      <MenuItemsDrinks title='vino' data={wineData} />
      <MenuItemsDrinks title='tequila' data={tequilaData} /> */}
    </Layout>
  )
}

const entradasData = [
  {
    id: 1,
    category: 'entradas',
    itemName: 'Ensalada de Pulpo',
    description:
      'Pulpo hervido con tomate cherry y arúgula, bañada de vinagreta de limón',
    price: '280',
    img: '#',
  },
  {
    id: 2,
    category: 'entradas',
    itemName: 'Ensalada Caprese',
    description:
      'Clásica ensalada de queso mozzarella fresco con rodajas de tomate fresco, orégano y albahaca fresca con salsa de pesto',
    price: '250',
    img: '#',
  },
  {
    id: 3,
    category: 'entradas',
    itemName: 'Tabla de Quesos y Carnes Frías',
    description:
      'Variedad de carnes frías y quesos italianos selectos, acompañados de tomate deshidratado, aceitunas verdes, uvas, miel y pan casero',
    price: '400',
    img: '#',
  },
]
const pastasData = [
  {
    id: 1,
    category: 'pasta',
    itemName: 'Pomodoro',
    description:
      'Con salsa de tomate de la abuela y albahaca fresca. Penne, Spaghetti, Fettuccine',
    price: '250',
    img: '#',
  },
  {
    id: 2,
    category: 'pasta',
    itemName: 'Bolognese',
    description: 'La tradicional salsa con carne. Penne, Spaghetti, Fettuccine',
    price: '280',
    img: '#',
  },
  {
    id: 3,
    category: 'pasta',
    itemName: 'Lasagna',
    description: 'La tradicional de carne con pasta fresca',
    price: '310',
    img: '#',
  },
  {
    id: 4,
    category: 'pasta',
    itemName: 'Ravioli con Queso Ricotta y Espinacas',
    description: 'En salsa de mantequilla y salvia',
    price: '280',
    img: '#',
  },
  {
    id: 5,
    category: 'pasta',
    itemName: 'Gnocchi',
    description:
      'De papa en salsa de queso gorgonzola, nueces tostadas y nuez moscada',
    price: '260',
    img: '#',
  },
  {
    id: 6,
    category: 'pasta',
    itemName: 'Carbonara',
    description:
      'Spaghetti con crema de huevo, queso parmesano, tocino y pimienta negra',
    price: '260',
    img: '#',
  },
  {
    id: 7,
    category: 'pasta',
    itemName: 'Frutti Di Mare',
    description: 'Camarón, pulpo, calamar, mejillón, almeja',
    price: '375',
    img: '#',
  },
]
const pizzaData = [
  {
    id: 10,
    category: 'pizza',
    itemName: 'Margherita',
    description: 'Salsa de tomate, queso mozzarella y albahaca fresca',
    price: '300',
    img: '#',
  },
  {
    id: 11,
    category: 'pizza',
    itemName: 'Pepperoni',
    description: 'Salsa de tomate, queso mozzarella y pepperoni',
    price: '325',
    img: '#',
  },
  {
    id: 12,
    category: 'pizza',
    itemName: 'Hawaiana',
    description:
      'Salsa de tomate, queso mozzarella, jamón de pierna y piña en trozos',
    price: '315',
    img: '#',
  },
  {
    id: 13,
    category: 'pizza',
    itemName: 'Camarón',
    description: 'Queso mozzarella, camarones y tomate Cherry',
    price: '400',
    img: '#',
  },
  {
    id: 14,
    category: 'pizza',
    itemName: 'Hongos',
    description:
      'Salsa de tomate, queso mozzarella, champiñones, portobello y setas con aceite de trufa',
    price: '325',
    img: '#',
  },
  {
    id: 15,
    category: 'pizza',
    itemName: 'Cochinita Pibil',
    description:
      'Salsa de tomate, queso mozzarella, cochinita pibil, frijoles negros de la Olla y cebolla encurtida',
    price: '315',
    img: '#',
  },
  {
    id: 16,
    category: 'pizza',
    itemName: 'Pesto',
    description:
      'Salsa pesto, queso mozzarella, tomate cherry y hojas de albahaca fresca',
    price: '315',
    img: '#',
  },
  {
    id: 17,
    category: 'pizza',
    itemName: 'Diavola',
    description:
      'Salsa de tomate, queso mozzarella y salchicha italiana picante',
    price: '315',
    img: '#',
  },
  {
    id: 18,
    category: 'pizza',
    itemName: 'Cuatro Quesos',
    description: 'Mozzarella, queso de cabra fresco, gorgonzola y parmesano',
    price: '400',
    img: '#',
  },
  {
    id: 19,
    category: 'pizza',
    itemName: 'Vegetariana',
    description:
      'Salsa de tomate, queso mozzarella, berenjena, calabaza y pimiento morrón asados, espinacas y champiñones',
    price: '315',
    img: '#',
  },
  {
    id: 21,
    category: 'pizza',
    itemName: 'Bomba',
    description:
      'Queso mozzarella, gorgonzola, salchicha italiana picante y champiñones',
    price: '385',
    img: '#',
  },
]
const postresData = [
  {
    id: 22,
    category: 'desserts',
    itemName: 'Panna Cotta',
    description: '',
    price: '280',
    img: '#',
  },
  {
    id: 23,
    category: 'desserts',
    itemName: 'Tiramisú',
    description: '',
    price: '300',
    img: '#',
  },
  {
    id: 24,
    category: 'desserts',
    itemName: 'Salami de Chocolate',
    description: '',
    price: '280',
    img: '#',
  },
]

// const whiskyData = [
//   {
//     id: 40,
//     category: 'whisky',
//     itemName: 'Buchanans 18 Años',
//     cupPrice: '780',
//     bottlePrice: '8,500',
//     img: '#',
//   },
//   {
//     id: 41,
//     category: 'whisky',
//     itemName: 'Johnnie Walker Black Label',
//     cupPrice: '380',
//     bottlePrice: '4,500',
//     img: '#',
//   },
//   {
//     id: 42,
//     category: 'whisky',
//     itemName: 'Chivas Regal 18 Años',
//     cupPrice: '780',
//     bottlePrice: '8,500',
//     img: '#',
//   },
//   {
//     id: 43,
//     category: 'whisky',
//     itemName: 'Hibiki',
//     cupPrice: '780',
//     bottlePrice: '8,500',
//     img: '#',
//   },
//   {
//     id: 44,
//     category: 'whisky',
//     itemName: 'Nuboshi',
//     cupPrice: '680',
//     bottlePrice: '7,500',
//     img: '#',
//   },
//   {
//     id: 45,
//     category: 'whisky',
//     itemName: 'Jack Daniels',
//     cupPrice: '260',
//     bottlePrice: '3,000',
//     img: '#',
//   },
//   {
//     id: 46,
//     category: 'whisky',
//     itemName: 'Jim Bean',
//     cupPrice: '260',
//     bottlePrice: '3,000',
//     img: '#',
//   },
//   {
//     id: 47,
//     category: 'whisky',
//     itemName: 'Bushmills Black Bush',
//     cupPrice: '280',
//     bottlePrice: '3,500',
//     img: '#',
//   },
//   {
//     id: 48,
//     category: 'whisky',
//     itemName: 'Bushmills Malt 10',
//     cupPrice: '320',
//     bottlePrice: '4,000',
//     img: '#',
//   },
//   {
//     id: 49,
//     category: 'whisky',
//     itemName: 'Chivas Regal 12 Años',
//     cupPrice: '380',
//     bottlePrice: '4,500',
//     img: '#',
//   },
//   {
//     id: 50,
//     category: 'whisky',
//     itemName: 'The Macallan 18',
//     cupPrice: '2,200',
//     bottlePrice: '22,000',
//     img: '#',
//   },
//   {
//     id: 51,
//     category: 'whisky',
//     itemName: 'Buchanans 12 Años',
//     cupPrice: '380',
//     bottlePrice: '4,500',
//     img: '#',
//   },
//   {
//     id: 52,
//     category: 'whisky',
//     itemName: 'The Macallan 12',
//     cupPrice: '420',
//     bottlePrice: '5,000',
//     img: '#',
//   },
// ]
// const vodkaData = [
//   {
//     id: 1,
//     category: 'vodka',
//     itemName: 'Absolut Azul',
//     cupPrice: '260',
//     bottlePrice: '3,000',
//     img: '#',
//   },
//   {
//     id: 2,
//     category: 'vodka',
//     itemName: 'Belvedere',
//     cupPrice: '380',
//     bottlePrice: '4,500',
//     img: '#',
//   },
//   {
//     id: 3,
//     category: 'vodka',
//     itemName: 'Ciroc',
//     cupPrice: '300',
//     bottlePrice: '4,000',
//     img: '#',
//   },
//   {
//     id: 4,
//     category: 'vodka',
//     itemName: 'Grey Goose',
//     cupPrice: '300',
//     bottlePrice: '4,000',
//     img: '#',
//   },
//   {
//     id: 5,
//     category: 'vodka',
//     itemName: 'Stolichnaya',
//     cupPrice: '260',
//     bottlePrice: '3,000',
//     img: '#',
//   },
//   {
//     id: 6,
//     category: 'vodka',
//     itemName: `Tito's`,
//     cupPrice: '300',
//     bottlePrice: '4,000',
//     img: '#',
//   },
// ]
// const ginData = [
//   {
//     id: 7,
//     category: 'gin',
//     itemName: 'Beefeater',
//     cupPrice: '260',
//     bottlePrice: '3,000',
//     img: '#',
//   },
//   {
//     id: 8,
//     category: 'gin',
//     itemName: 'Bombay Saphire',
//     cupPrice: '260',
//     bottlePrice: '3,000',
//     img: '#',
//   },
//   {
//     id: 9,
//     category: 'gin',
//     itemName: `Hendrick's`,
//     cupPrice: '400',
//     bottlePrice: '5,000',
//     img: '#',
//   },
//   {
//     id: 10,
//     category: 'gin',
//     itemName: 'Ginstone',
//     cupPrice: '280',
//     bottlePrice: '3,500',
//     img: '#',
//   },
//   {
//     id: 11,
//     category: 'gin',
//     itemName: 'Monkey 47',
//     cupPrice: '680',
//     bottlePrice: '7,500',
//     img: '#',
//   },
// ]
// const ronData = [
//   {
//     id: 12,
//     category: 'ron',
//     itemName: 'Matusalem Clásico',
//     cupPrice: '260',
//     bottlePrice: '3,000',
//     img: '#',
//   },
//   {
//     id: 13,
//     category: 'ron',
//     itemName: 'Matusalem Gran Reserva',
//     cupPrice: '280',
//     bottlePrice: '3,500',
//     img: '#',
//   },
//   {
//     id: 14,
//     category: 'ron',
//     itemName: 'Havana 7',
//     cupPrice: '280',
//     bottlePrice: '3,500',
//     img: '#',
//   },
//   {
//     id: 15,
//     category: 'ron',
//     itemName: 'Bacardi Blanco',
//     cupPrice: '260',
//     bottlePrice: '3,000',
//     img: '#',
//   },
//   {
//     id: 16,
//     category: 'ron',
//     itemName: 'Zacapa 12 Años',
//     cupPrice: '300',
//     bottlePrice: '4,000',
//     img: '#',
//   },
//   {
//     id: 17,
//     category: 'ron',
//     itemName: 'Zacapa 23 Años',
//     cupPrice: '480',
//     bottlePrice: '5,500',
//     img: '#',
//   },
// ]
// const brandyData = [
//   {
//     id: 18,
//     category: 'brandy',
//     itemName: 'Torres 10',
//     cupPrice: '260',
//     bottlePrice: '3,000',
//     img: '#',
//   },
//   {
//     id: 19,
//     category: 'brandy',
//     itemName: 'Remy Martyn V.S.O.P',
//     cupPrice: '420',
//     bottlePrice: '5,000',
//     img: '#',
//   },
//   {
//     id: 20,
//     category: 'brandy',
//     itemName: 'Hennessy V.S.O.P',
//     cupPrice: '420',
//     bottlePrice: '5,000',
//     img: '#',
//   },
// ]

// const mezcalData = [
//   {
//     id: 21,
//     category: 'mezcal',
//     itemName: 'Creyente Espadin Joven',
//     cupPrice: '280',
//     bottlePrice: '3,500',
//     img: '#',
//   },
//   {
//     id: 22,
//     category: 'mezcal',
//     itemName: 'Creyente Cuishe',
//     cupPrice: '320',
//     bottlePrice: '4,000',
//     img: '#',
//   },
//   {
//     id: 23,
//     category: 'mezcal',
//     itemName: 'Creyente Tobalá',
//     cupPrice: '380',
//     bottlePrice: '4,500',
//     img: '#',
//   },
//   {
//     id: 24,
//     category: 'mezcal',
//     itemName: '400 Conejos Joven',
//     cupPrice: '280',
//     bottlePrice: '3,500',
//     img: '#',
//   },
//   {
//     id: 25,
//     category: 'mezcal',
//     itemName: '400 Conejos Reposado',
//     cupPrice: '300',
//     bottlePrice: '4,000',
//     img: '#',
//   },
//   {
//     id: 26,
//     category: 'mezcal',
//     itemName: '400 Conejos Tobalá',
//     cupPrice: '320',
//     bottlePrice: '4,000',
//     img: '#',
//   },
//   {
//     id: 27,
//     category: 'mezcal',
//     itemName: 'Amores Cupreata',
//     cupPrice: '380',
//     bottlePrice: '4,500',
//     img: '#',
//   },
//   {
//     id: 28,
//     category: 'mezcal',
//     itemName: 'Amores Espadin Joven',
//     cupPrice: '280',
//     bottlePrice: '3,500',
//     img: '#',
//   },
//   {
//     id: 29,
//     category: 'mezcal',
//     itemName: 'Amores Espadin Reposado',
//     cupPrice: '320',
//     bottlePrice: '4,000',
//     img: '#',
//   },
//   {
//     id: 30,
//     category: 'mezcal',
//     itemName: 'Amores Logia Cenizo',
//     cupPrice: '320',
//     bottlePrice: '4,000',
//     img: '#',
//   },
//   {
//     id: 31,
//     category: 'mezcal',
//     itemName: 'Chacolo Vol. 2 Brocha',
//     cupPrice: '520',
//     bottlePrice: '6,000',
//     img: '#',
//   },
//   {
//     id: 32,
//     category: 'mezcal',
//     itemName: '11:11 Deseo Tobalá',
//     cupPrice: '320',
//     bottlePrice: '4,000',
//     img: '#',
//   },
//   {
//     id: 33,
//     category: 'mezcal',
//     itemName: 'Montelobos Espadín Joven',
//     cupPrice: '280',
//     bottlePrice: '3,500',
//     img: '#',
//   },
//   {
//     id: 34,
//     category: 'mezcal',
//     itemName: 'Espíritu Lauro Tepeztate',
//     cupPrice: '680',
//     bottlePrice: '7,500',
//     img: '#',
//   },
//   {
//     id: 35,
//     category: 'mezcal',
//     itemName: 'Ojo de Tigre Espadín Joven',
//     cupPrice: '280',
//     bottlePrice: '3,500',
//     img: '#',
//   },
//   {
//     id: 36,
//     category: 'mezcal',
//     itemName: 'Carreño Tobasishe Joven',
//     cupPrice: '720',
//     bottlePrice: '8,000',
//     img: '#',
//   },
//   {
//     id: 37,
//     category: 'mezcal',
//     itemName: 'Carreño Ensamble 7 Joven',
//     cupPrice: '780',
//     bottlePrice: '8,500',
//     img: '#',
//   },
//   {
//     id: 38,
//     category: 'mezcal',
//     itemName: 'Carreño Tobalá',
//     cupPrice: '720',
//     bottlePrice: '8,000',
//     img: '#',
//   },
//   {
//     id: 39,
//     category: 'mezcal',
//     itemName: 'Carreño Tepeztate',
//     cupPrice: '720',
//     bottlePrice: '8,000',
//     img: '#',
//   },
// ]
// const beerData = [
//   {
//     id: 53,
//     category: 'cerveza',
//     itemName: 'XX Lager',
//     cupPrice: '',
//     bottlePrice: '100',
//     img: '#',
//   },
//   {
//     id: 54,
//     category: 'cerveza',
//     itemName: 'XX Ambar',
//     cupPrice: '',
//     bottlePrice: '100',
//     img: '#',
//   },
//   {
//     id: 55,
//     category: 'cerveza',
//     itemName: 'Tecate Light',
//     cupPrice: '',
//     bottlePrice: '100',
//     img: '#',
//   },
//   {
//     id: 56,
//     category: 'cerveza',
//     itemName: 'Bohemia Pilsner',
//     cupPrice: '',
//     bottlePrice: '120',
//     img: '#',
//   },
//   {
//     id: 57,
//     category: 'cerveza',
//     itemName: 'Bohemia Vienna',
//     cupPrice: '',
//     bottlePrice: '120',
//     img: '#',
//   },
//   {
//     id: 58,
//     category: 'cerveza',
//     itemName: 'Amstel Ultra',
//     cupPrice: '',
//     bottlePrice: '120',
//     img: '#',
//   },
//   {
//     id: 59,
//     category: 'cerveza',
//     itemName: 'Heineken',
//     cupPrice: '',
//     bottlePrice: '120',
//     img: '#',
//   },
//   {
//     id: 60,
//     category: 'cerveza',
//     itemName: 'Heineken 0.0',
//     cupPrice: '',
//     bottlePrice: '85',
//     img: '#',
//   },
//   {
//     id: 61,
//     category: 'cerveza',
//     itemName: 'Strogbow',
//     cupPrice: '',
//     bottlePrice: '100',
//     img: '#',
//   },
//   {
//     id: 62,
//     category: 'cerveza',
//     itemName: 'Hard Seltzer Amstel Ultra',
//     cupPrice: '',
//     bottlePrice: '100',
//     img: '#',
//   },
// ]
// const softData = [
//   {
//     id: 63,
//     category: 'softDrinks',
//     itemName: 'Refrescos Coca Cola Company',
//     cupPrice: '',
//     bottlePrice: '85',
//     img: '#',
//   },
//   {
//     id: 64,
//     category: 'softDrinks',
//     itemName: 'Ginger Ale',
//     cupPrice: '',
//     bottlePrice: '85',
//     img: '#',
//   },
//   {
//     id: 65,
//     category: 'softDrinks',
//     itemName: 'Agua Tónica',
//     cupPrice: '',
//     bottlePrice: '85',
//     img: '#',
//   },
//   {
//     id: 66,
//     category: 'softDrinks',
//     itemName: 'Tehuacan Brillante',
//     cupPrice: '',
//     bottlePrice: '85',
//     img: '#',
//   },
//   {
//     id: 67,
//     category: 'softDrinks',
//     itemName: 'Evian',
//     cupPrice: '',
//     bottlePrice: '190',
//     img: '#',
//   },
//   {
//     id: 68,
//     category: 'softDrinks',
//     itemName: 'Santa Maria',
//     cupPrice: '',
//     bottlePrice: '85',
//     img: '#',
//   },
//   {
//     id: 69,
//     category: 'softDrinks',
//     itemName: 'Perrier',
//     cupPrice: '',
//     bottlePrice: '190',
//     img: '#',
//   },
//   {
//     id: 70,
//     category: 'softDrinks',
//     itemName: 'San Pellegrino',
//     cupPrice: '',
//     bottlePrice: '160',
//     img: '#',
//   },
//   {
//     id: 71,
//     category: 'softDrinks',
//     itemName: 'Kombuchas Mandolin',
//     cupPrice: '',
//     bottlePrice: '100',
//     img: '#',
//   },
//   {
//     id: 72,
//     category: 'softDrinks',
//     itemName: 'Red Bull',
//     cupPrice: '',
//     bottlePrice: '140',
//     img: '#',
//   },
//   {
//     id: 73,
//     category: 'softDrinks',
//     itemName: 'Jugos',
//     cupPrice: '',
//     bottlePrice: '85',
//     img: '#',
//   },
//   {
//     id: 74,
//     category: 'softDrinks',
//     itemName: 'Jugos Naturales',
//     cupPrice: '',
//     bottlePrice: '100',
//     img: '#',
//   },
// ]
// const cocktailsData = [
//   {
//     id: 63,
//     category: 'softDrinks',
//     itemName: 'Refrescos Coca Cola Company',
//     cupPrice: '',
//     bottlePrice: '85',
//     img: '#',
//   },
//   {
//     id: 64,
//     category: 'softDrinks',
//     itemName: 'Ginger Ale',
//     cupPrice: '',
//     bottlePrice: '85',
//     img: '#',
//   },
//   {
//     id: 65,
//     category: 'softDrinks',
//     itemName: 'Agua Tónica',
//     cupPrice: '',
//     bottlePrice: '85',
//     img: '#',
//   },
//   {
//     id: 66,
//     category: 'softDrinks',
//     itemName: 'Tehuacan Brillante',
//     cupPrice: '',
//     bottlePrice: '85',
//     img: '#',
//   },
//   {
//     id: 67,
//     category: 'softDrinks',
//     itemName: 'Evian',
//     cupPrice: '',
//     bottlePrice: '190',
//     img: '#',
//   },
//   {
//     id: 68,
//     category: 'softDrinks',
//     itemName: 'Santa Maria',
//     cupPrice: '',
//     bottlePrice: '85',
//     img: '#',
//   },
//   {
//     id: 69,
//     category: 'softDrinks',
//     itemName: 'Perrier',
//     cupPrice: '',
//     bottlePrice: '190',
//     img: '#',
//   },
//   {
//     id: 70,
//     category: 'softDrinks',
//     itemName: 'San Pellegrino',
//     cupPrice: '',
//     bottlePrice: '160',
//     img: '#',
//   },
//   {
//     id: 71,
//     category: 'softDrinks',
//     itemName: 'Kombuchas Mandolin',
//     cupPrice: '',
//     bottlePrice: '100',
//     img: '#',
//   },
//   {
//     id: 72,
//     category: 'softDrinks',
//     itemName: 'Red Bull',
//     cupPrice: '',
//     bottlePrice: '140',
//     img: '#',
//   },
//   {
//     id: 73,
//     category: 'softDrinks',
//     itemName: 'Jugos',
//     cupPrice: '',
//     bottlePrice: '85',
//     img: '#',
//   },
//   {
//     id: 74,
//     category: 'softDrinks',
//     itemName: 'Jugos Naturales',
//     cupPrice: '',
//     bottlePrice: '100',
//     img: '#',
//   },
// ]
// const champagneData = [
//   {
//     id: 24,
//     category: 'champagne',
//     itemName: 'VEUVE CLICQUOT 750 ML',
//     cupPrice: '',
//     bottlePrice: '4,300',
//     img: '#',
//   },
//   {
//     id: 25,
//     category: 'champagne',
//     itemName: 'MOET & CHANDON BRUT 750 ML',
//     cupPrice: '',
//     bottlePrice: '4,100',
//     img: '#',
//   },
//   {
//     id: 26,
//     category: 'champagne',
//     itemName: 'MOET & CHANDON ICE IMPERIAL 750 ML',
//     cupPrice: '',
//     bottlePrice: '5,300',
//     img: '#',
//   },
//   {
//     id: 27,
//     category: 'champagne',
//     itemName: 'MOET & CHANDON BRUT 3 LT',
//     cupPrice: '',
//     bottlePrice: '19,700',
//     img: '#',
//   },
//   {
//     id: 28,
//     category: 'champagne',
//     itemName: 'MOET & CHANDON ICE 3 LT',
//     cupPrice: '',
//     bottlePrice: '26,500',
//     img: '#',
//   },
//   {
//     id: 29,
//     category: 'champagne',
//     itemName: 'DOM PERIGNON BRUT',
//     cupPrice: '',
//     bottlePrice: '11,600',
//     img: '#',
//   },
// ]
// const wineData = [
//   {
//     id: 30,
//     category: 'wine',
//     itemName: 'WHISPERING ANGEL 375 ML',
//     cupPrice: '',
//     bottlePrice: '1,300',
//     img: '#',
//   },
//   {
//     id: 31,
//     category: 'wine',
//     itemName: 'WHISPERING ANGEL 750ML',
//     cupPrice: '',
//     bottlePrice: '2,700',
//     img: '#',
//   },
//   {
//     id: 32,
//     category: 'wine',
//     itemName: 'CORONA DEL VALLE SAUVIGNON BLANC 1.5 LT',
//     cupPrice: '',
//     bottlePrice: '2,900',
//     img: '#',
//   },
//   {
//     id: 33,
//     category: 'wine',
//     itemName: 'CORONA DEL VALLE ROSE GRENACHE 1.5 LT',
//     cupPrice: '',
//     bottlePrice: '3,250',
//     img: '#',
//   },
//   {
//     id: 34,
//     category: 'wine',
//     itemName: 'KRUGER ROSE SANGIOVESE 1.5 LT',
//     cupPrice: '',
//     bottlePrice: '3,000',
//     img: '#',
//   },
// ]

// const tequilaData = [
//   {
//     id: 16,
//     category: 'tequila',
//     itemName: 'TIERRA NOBLE BLANCO',
//     cupPrice: '280',
//     bottlePrice: '3,500',
//     img: '#',
//   },
//   {
//     id: 17,
//     category: 'tequila',
//     itemName: 'TIERRA NOBLE REPOSADO',
//     cupPrice: '320',
//     bottlePrice: '4,000',
//     img: '#',
//   },
//   {
//     id: 18,
//     category: 'tequila',
//     itemName: 'HERRADURA REPOSADO',
//     cupPrice: '320',
//     bottlePrice: '4,000',
//     img: '#',
//   },
//   {
//     id: 19,
//     category: 'tequila',
//     itemName: 'HERRADURA ULTRA',
//     cupPrice: '380',
//     bottlePrice: '4,500',
//     img: '#',
//   },
// ]
