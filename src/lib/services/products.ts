import axios from "axios";

export async function getProducts() {
  const { data } = await axios.get(
    "http://212.24.97.65:1337/pictures"
  );
  return data;
}

export async function getCategory(categoryId: number | string) {
  const { data } = await axios.get(
    `https://api.escuelajs.co/api/v1/categories/${categoryId}`
  );
  return data;
}

export async function getProductsByCategory(catId: number | string) {
  const { data } = await axios.get(
    `https://api.escuelajs.co/api/v1/products/?categoryId=${catId}`
  );
  return data;
}
