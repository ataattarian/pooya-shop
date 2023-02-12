import axios from "axios";

export async function getProducts() {
  const { data } = await axios.get(
    "https://project.lgscloud.xyz/pictures"
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
