const PRODUCTS = [
  {
    id: 100,
    name: "Mutton Biriyani",
    price: 11,
    image: require("../assets/products/MuttonBiriyani.png"),
    description: "Delectable Mutton Biriyani from Muslim weddings",
    quantity: 0,
  },
  {
    id: 101,
    name: "Chicken Biriyani",
    price: 9,
    image: require("../assets/products/ChickenBiriyani.png"),
    description:
      "The Chicken variant cooked in the same style as Biriyanis from Muslim Weddings",
    quantity: 0,
  },
  {
    id: 102,
    name: "Mutton Biriyani (1 KG)",
    price: 85,
    image: require("../assets/products/MuttonBiriyani.png"),
    description: "Party pack. Serves 8*",
    quantity: 0,
  },
  {
    id: 103,
    name: "Chicken Biriyani (1 KG)",
    price: 70,
    image: require("../assets/products/ChickenBiriyani.png"),
    description: "Party pack. Serves 8*",
    quantity: 0,
  },
];
export function getProductsFromService() {
  return PRODUCTS;
}
export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
