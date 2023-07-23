import modernArmchair from "../images/products/modern-armchair.png";
import blueChair from "../images/products/blue-chair.png";
import computerTable from "../images/products/computer-table.png";
import designerShelves from "../images/products/designer-shelves.png";
import foamMatress from "../images/products/foam-matress.png";
import gardenTable from "../images/products/garden-table.png";
import hybridMatress from "../images/products/hybrid-matress.png";
import kitchenTable from "../images/products/kitchen-table.png";
import laminated from "../images/products/laminated.png";
import matress from "../images/products/matress.png";
import matressBlue from "../images/products/matress-blue.png";
import matressLightBlue from "../images/products/matress-light-blue.png";
import naturalArmchair from "../images/products/natural-armchair.png";
import olliSofa from "../images/products/ollis-sofa.png";
import softMatress from "../images/products/soft-matress.png";
import softTextile from "../images/products/soft-textile.png";
import textileArmchair from "../images/products/textile-armchair.png";
import tvPedestal from "../images/products/tv-pedestal.png";
import vealEntrecode from "../images/products/veal-entrecode.png";
import vintageStool from "../images/products/vintage-stool.png";
import whiteChair from "../images/products/white-chair.png";
import wickerLounge from "../images/products/wicker-lounge.png";
import woodenChest from "../images/products/wooden-chest.png";
import wickerSofa from "../images/products/wicker-sofa.png"



const productdata = [
  {
    id: 1,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/mat_05-600x600.jpg",
    photoDark: matress,

    title: "Orthopedic Mattress",
    category: "Mattresses",
    discount: "219.00",
    price: "249.00",
    cart: "+Add to cart",
    rate: 3.5,
    review: 2,
    status: true,
    sku: "0044",
  },
  {
    id: 2,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/shop_01-600x600.jpg",
    photoDark: woodenChest,
    title: "Wooden Chest",
    category: " Architechture",
    discount: null,
    price: "249.00",
    cart: "+Add to cart",
    rate: 2.8,
    review: 2,
    status: false,
    sku: "0065",
  },
  {
    id: 3,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/shop_02-360x360.jpg",
    photoDark: modernArmchair,
    title: "Modern Armchair",
    category: "Architechture",
    discount: "119.00",
    price: "126.00",
    cart: "+Add to cart",
    rate: 3.5,
    review: 2,
    status: true,
    sku: "0064",
  },
  {
    id: 4,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/shop_03-360x360.jpg",
    photoDark: kitchenTable,
    title: "Kitchen Table",
    category: " Furniture",
    discount: null,
    price: "143.00",
    cart: "+Add to cart",
    rate: 3.5,
    review: 2,
    status: false,
    sku: "0064",
  },
  {
    id: 5,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/shop_04-360x360.jpg",
    photoDark: blueChair,
    title: "Blue Synthetic Chair",
    category: "Architechture",
    discount: "290.00",
    price: "312.00",
    cart: "+Add to cart",
    rate: 4.2,
    review: 2,
    status: true,
    sku: "0064",
  },
  {
    id: 6,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/shop_05-360x360.jpg",
    photoDark: computerTable,
    title: "Computer Table",
    category: "Uncategorized",
    discount: null,
    price: "237.00",
    cart: "+Add to cart",
    rate: 5.2,
    review: 2,
    status: false,
    sku: "0064",
  },
  {
    id: 7,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/mat_01-360x360.jpg",
    photoDark: matressBlue,
    title: "High Rigidity Mattress",
    category: "Mattresses",
    discount: "197.00",
    price: "237.00",
    cart: "+Add to cart",

    rate: 4.2,
    review: 2,
    status: true,
    sku: "0054",
  },
  {
    id: 8,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/mat_06-360x360.jpg",
    photoDark: hybridMatress,
    title: "Hybrid Mattress",
    category: "Mattresses",
    discount: null,
    price: "257.00",
    cart: "+Add to cart",
    rate: 5.5,
    review: 2,
    status: false,
    sku: "0064",
  },
  {
    id: 9,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/shop_06-360x360.jpg",
    photoDark: tvPedestal,
    title: "TV-Pedestal",
    category: "Furniture",
    discount: null,
    price: "468.00",
    cart: "+Add to cart",
    rate: 3.2,
    review: 2,
    status: false,
    sku: "0044",
  },
  {
    id: 10,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/mat_02-360x360.jpg",
    photoDark: matressLightBlue,
    title: "Springless Mattress",
    category: "Mattresses",
    discount: "138.00",
    price: "178.00",
    cart: "+Add to cart",
    rate: 5.2,
    review: 2,
    status: true,
    sku: "0064",
  },
  {
    id: 11,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/shop_07-360x360.jpg",
    photoDark: whiteChair,
    title: "White Leather Chair",
    category: "Furniture",
    discount: "128.00",
    price: "178.00",
    cart: "+Add to cart",
    rate: 4.6,
    review: 2,
    status: true,
    sku: "0067",
  },
  {
    id: 12,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/mat_04-360x360.jpg",
    photoDark: foamMatress,
    title: "Foam Mattress",
    category: "Mattresses",
    discount: null,
    price: "19.00",
    cart: "+Add to cart",
    rate: 4.7,
    review: 2,
    status: false,
    sku: "0064",
  },
  {
    id: 13,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/shop_08-360x360.jpg",
    photoDark: textileArmchair,
    title: "Textile Armchair",
    category: "Architechture",
    discount: null,
    price: "179.00",
    cart: "+Add to cart",
    rate: 5.2,
    review: 2,
    status: false,
    sku: "0054",
  },
  {
    id: 14,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/shop_09-360x360.jpg",
    photoDark: softTextile,
    title: "Soft Textile Chair",
    category: "Interior Design",
    discount: null,
    price: "9.00",
    cart: "+Add to cart",
    rate: 4.8,
    review: 2,
    status: false,
    sku: "0064",
  },

  {
    id: 15,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/shop_10-360x360.jpg",
    photoDark: gardenTable,
    title: "Garden Dining Table",
    category: "Uncategorized",
    discount: null,
    price: "12.00",
    cart: "+Add to cart",
    rate: 5.9,
    review: 2,
    status: false,
    sku: "0064",
  },
  {
    id: 16,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/shop_11-360x360.jpg",
    photoDark: designerShelves,
    title: "Designer Shelves",
    category: "Interior",
    discount: "199.00",
    price: "300.00",
    cart: "+Add to cart",
    rate: 5.2,
    review: 2,
    status: true,
    sku: "0066",
  },
  {
    id: 17,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/mat_03-360x360.jpg",
    photoDark: softMatress,
    title: "Soft Mattress",
    category: "Mattresses",
    discount: null,
    price: "199.00",
    cart: "+Add to cart",
    rate: 3.5,
    review: 2,
    status: false,
    sku: "0064",
  },
  {
    id: 18,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/shop_12-360x360.jpg",
    photoDark: vealEntrecode,
    title: "Veal entrecote",
    category: "Decoration",
    discount: "199.00",
    price: "210.00",
    cart: "+Add to cart",
    rate: 4.2,
    review: 2,
    status: true,
    sku: "0061",
  },
  {
    id: 19,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/shop_13-360x360.jpg",
    photoDark: wickerSofa,
    title: "Wicker Sofa",
    category: "Interior",
    discount: "319.00",
    price: "379.00",
    cart: "+Add to cart",
    rate: 4.6,
    review: 2,
    status: true,
    sku: "0061",
  },
  {
    id: 20,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/shop_14-600x600.jpg",
    photoDark: olliSofa,
    title: "Ollis Folding Sofa",
    category: "Decoration",
    discount: "145.00",
    price: "180.00",
    cart: "+Add to cart",
    rate: "4.2",
    review: 2,
    status: true,
    sku: "0064",
  },
  {
    id: 21,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/shop_15-360x360.jpg",
    photoDark: laminated,
    title: "Laminated Bookshelf",
    category: "Decoration",
    discount: null,
    price: "180.00",
    cart: "+Add to cart",
    rate: "4.2",
    review: 2,
    status: false,
    sku: "0064",
  },
  {
    id: 22,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/shop_16-360x360.jpg",
    photoDark: naturalArmchair,
    title: "Natural Blue Armchair",
    category: "Home Interior",
    discount: null,
    price: "180.00",
    cart: "+Add to cart",
    rate: "4.2",
    review: 2,
    status: false,
    sku: "0064",
  },
  {
    id: 23,
    photo:
      " http://ollis.like-themes.com/wp-content/uploads/2018/02/shop_17-360x360.jpg",
    photoDark: vintageStool,
    title: "Vintage Style Stool",
    category: "Home Interior",
    discount: "129.00",
    price: "199.00",
    cart: "+Add to cart",
    rate: "4.2",
    review: 2,
    status: true,
    sku: "0064",
  },
  {
    id: 24,
    photo:
      "http://ollis.like-themes.com/wp-content/uploads/2018/02/shop_18-360x360.jpg",
    photoDark: wickerLounge,
    title: "Wicker Chaise Lounge",
    category: "Decoration",
    discount: "159.00",
    price: "190.00",
    cart: "+Add to cart",
    rate: "4.2",
    review: 2,
    status: true,
    sku: "0064",
  },
];
export default productdata;
  
    