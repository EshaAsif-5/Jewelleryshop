 
 import cart from './cart.png';
 import deleteIcon from './delete.png';
 import diamondring from './diamondring.jpg';
 import earings from './earings.jpg';
 import elegantRing from './elegantring.jpg';
 import flowerEarings from './flowerearings.jpg';
 import flowerPendant from './flowerpendant.jpg';
 import logo from './logo.png';
 import longEarings from './longearings.jpg';
 import pendant from './pendant.jpg';
 import pinkStoneRing from './pinkstonering.jpg';
 import roundPendant from './roundpendant.jpg';
 import roundEarings from './roundearings.jpg';
 import silverRing from './silverring.jpg';
 import squarePendant from './squarependant.jpg';
 import topsShort from './topsshort.jpg';
 import searchIcon from './search-icon.png';
 import profileIcon from './profileIcon.png';
 import menuIcon from './menu.png';
 import Hero from './hero.jpeg';
 import heroes from './mine.jpg';
import geometricTops from './geometrictops.jpg';
import squareTops from './sqauretops.jpg';
import vintageTops from './vintagetops.jpg';
import flowerTops from './flowertops.jpg';
import pearlDaintyEarings from './pearldaintyearings.jpg';
import hollowTops from './hollowtops.jpg';
import ballEarings from './ballearings.jpg';
import minimalistTops from './minimalisttops.jpg';
import elegantBracelet from './elegantbracelet.jpg';
import goldRing from './goldring.jpg';
import goldHeartBracelet from './goldheartbracelet.jpg';
import ballBracelet from './ballbracelet.png';
import pearlBracelet from './pearlbracelet.jpg';
import heartBracelet from './heartbracelet.jpg';
import packOf4Bracelets from './packof4bracelets.jpg';
import fillHeartRing from './fillheartring.jpg';
import pearlsRing from './pearlsring.jpg';
import butterflyRing from './butterflyring.jpg';
import About from './about.jpg';

import Exchange from './exchange.png';
import Csr from './csr.png';
import Returns from './return.png';
import CrossIcon from './cross_icon.png';

 const assets = {

   logo,heroes,About,
   CrossIcon,
   Exchange,
  Csr,
  Returns,
  geometricTops,
  squareTops,
  vintageTops,
  flowerTops,
  pearlDaintyEarings,
  hollowTops,
  ballEarings,
  minimalistTops,
  elegantBracelet,
  goldRing,
  goldHeartBracelet,
  ballBracelet,
  pearlBracelet,
  heartBracelet,
  packOf4Bracelets,
  fillHeartRing,
  pearlsRing,
  butterflyRing,
   Hero,
   menuIcon,
   profileIcon,
   cart,
   deleteIcon,
   diamondring,
   earings,
   elegantRing,
   flowerEarings,
   flowerPendant,
   longEarings,
   pendant,
   pinkStoneRing,
   roundPendant,
   roundEarings,
   silverRing,
   squarePendant,
   topsShort,
   searchIcon
 };
 
 const products = [
  {
    id: "1",
    name: "Diamond Ring",
    price: 4500,
    category: "Ring",
    subcategory: "accessories",
    material: "Gold",
    description: "Elegant diamond ring with a premium cut for luxury events.",
    size: ["10-20y", "20-30y"],
    date: "2025-04-10",
    bestSeller: false,
    image: {
      main: diamondring,
      gallery: [diamondring, elegantRing, pinkStoneRing],
    },
  },
  {
    id: "2",
    name: "Elegant Ring",
    price: 3900,
    category: "Ring",
    subcategory: "accessories",
    material: "Platinum",
    description: "Sophisticated ring design for modern style statements.",
    size: ["20-30y"],
    date: "2025-04-09",
    bestSeller: false,
    image: {
      main: elegantRing,
      gallery: [elegantRing, diamondring, silverRing],
    },
  },
  {
    id: "3",
    name: "Pink Stone Ring",
    price: 3100,
    category: "Ring",
    subcategory: "accessories",
    material: "Gold",
    description: "Pink gemstone ring for charming looks and soft elegance.",
    size: ["10-20y"],
    date: "2025-04-08",
    bestSeller: false,
    image: {
      main: pinkStoneRing,
      gallery: [pinkStoneRing, elegantRing],
    },
  },
  {
    id: "4",
    name: "Silver Ring",
    price: 2700,
    category: "Ring",
    subcategory: "accessories",
    material: "Silver",
    description: "Classic silver ring for all occasions and easy matching.",
    size: ["10-20y", "20-30y"],
    date: "2025-04-05",
    bestSeller: false,
    image: {
      main: silverRing,
      gallery: [silverRing, diamondring],
    },
  },
  {
    id: "5",
    name: "Round Pendant",
    price: 2500,
    category: "Necklace",
    subcategory: "top wear",
    material: "Silver",
    description: "Stylish round pendant with minimalistic design.",
    size: ["10-20y", "20-30y"],
    date: "2025-04-06",
    bestSeller: false,
    image: {
      main: roundPendant,
      gallery: [roundPendant, pendant],
    },
  },
  {
    id: "6",
    name: "Square Pendant",
    price: 2300,
    category: "Necklace",
    subcategory: "top wear",
    material: "Silver",
    description: "Geometric square pendant in sleek silver finish.",
    size: ["20-30y"],
    date: "2025-04-07",
    bestSeller: false,
    image: {
      main: squarePendant,
      gallery: [squarePendant, pendant],
    },
  },
  {
    id: "7",
    name: "Flower Pendant",
    price: 2800,
    category: "Necklace",
    subcategory: "top wear",
    material: "Gold",
    description: "Floral pendant with soft curves and detailed petals.",
    size: ["10-20y"],
    date: "2025-04-08",
    bestSeller: false,
    image: {
      main: flowerPendant,
      gallery: [flowerPendant, roundPendant],
    },
  },
  {
    id: "8",
    name: "Flower Earrings",
    price: 1900,
    category: "Earrings",
    subcategory: "accessories",
    material: "Gold",
    description: "Flower-shaped earrings for vibrant and fresh style.",
    size: ["10-20y"],
    date: "2025-04-03",
    bestSeller: false,
    image: {
      main: flowerEarings,
      gallery: [flowerEarings, earings, longEarings],
    },
  },
  {
    id: "9",
    name: "Round Earrings",
    price: 1800,
    category: "Earrings",
    subcategory: "accessories",
    material: "Silver",
    description: "Minimalist round earrings to complement any outfit.",
    size: ["10-20y", "20-30y"],
    date: "2025-04-01",
    bestSeller: false,
    image: {
      main: roundEarings,
      gallery: [roundEarings, longEarings],
    },
  },
  {
    id: "10",
    name: "Long Earrings",
    price: 2200,
    category: "Earrings",
    subcategory: "accessories",
    material: "Platinum",
    description: "Dangling long earrings for a bold fashion statement.",
    size: ["20-30y"],
    date: "2025-04-02",
    bestSeller: false,
    image: {
      main: longEarings,
      gallery: [longEarings, flowerEarings],
    },
  },
  {
    id: "11",
    name: "Short top Set",
    price: 3200,
    category: "Earrings",
    subcategory: "top wear",
    material: "Gold",
    description: "Trendy short top set for casual wear with comfort.",
    size: ["10-20y", "20-30y"],
    date: "2025-04-12",
    bestSeller: true,
    image: {
      main: topsShort,
      gallery: [topsShort, logo],
    },
  },
  {
    id: "12",
    name: "Geometric Top",
    price: 3400,
    category: "Earrings",
    subcategory: "top wear",
    material: "Silver",
    description: "Modern geometric patterned top for edgy styling.",
    size: ["10-20y", "20-30y"],
    date: "2025-04-11",
    bestSeller: false,
    image: {
      main: geometricTops,
      gallery: [geometricTops, squareTops],
    },
  },
  {
    id: "13",
    name: "Pearl Dainty Earrings",
    price: 2000,
    category: "Earrings",
    subcategory: "accessories",
    material: "Platinum",
    description: "Elegant dainty pearl earrings for timeless beauty.",
    size: ["20-30y"],
    date: "2025-04-04",
    bestSeller: true,
    image: {
      main: pearlDaintyEarings,
      gallery: [pearlDaintyEarings, ballEarings],
    },
  },
  {
    id: "14",
    name: "Elegant Bracelet",
    price: 3700,
    category: "Bracelet",
    subcategory: "accessories",
    material: "Gold",
    description: "Chic and classy bracelet for formal events.",
    size: ["10-20y", "20-30y"],
    date: "2025-04-06",
    bestSeller: true,
    image: {
      main: elegantBracelet,
      gallery: [elegantBracelet, goldHeartBracelet],
    },
  },
  {
    id: "15",
    name: "Gold Ring",
    price: 4600,
    category: "Ring",
    subcategory: "accessories",
    material: "Gold",
    description: "Shiny gold ring, perfect for traditional and modern attire.",
    size: ["20-30y"],
    date: "2025-04-07",
    bestSeller: true,
    image: {
      main: goldRing,
      gallery: [goldRing, fillHeartRing, pearlsRing],
    },
  },
  {
    id: "16",
    name: "Butterfly Ring",
    price: 2900,
    category: "Ring",
    subcategory: "accessories",
    material: "Silver",
    description: "Adorable butterfly-shaped ring for soft aesthetics.",
    size: ["10-20y"],
    date: "2025-04-09",
    bestSeller: false,
    image: {
      main: butterflyRing,
      gallery: [butterflyRing, pinkStoneRing],
    },
  },
  {
    id: "17",
    name: "Pack of 4 Bracelets",
    price: 5200,
    category: "Bracelet",
    subcategory: "accessories",
    material: "Platinum",
    description: "Complete bracelet set to mix and match styles.",
    size: ["10-20y", "20-30y"],
    date: "2025-04-12",
    bestSeller: true,
    image: {
      main: packOf4Bracelets,
      gallery: [packOf4Bracelets, pearlBracelet, heartBracelet],
    },
  },
];

 
 export { assets, products };