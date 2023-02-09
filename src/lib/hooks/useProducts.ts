import { useQuery } from "@tanstack/react-query";
import { CategoryProps, ProductProps } from "../interfaces";
import {
  getCategory,
  getProducts,
  getProductsByCategory,
} from "../services/products";

export function useAllProducts() {
  return useQuery<ProductProps[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}

export function useCategory(id: number | string) {
  const { data, isLoading } = useQuery<CategoryProps>({
    queryKey: ["category"],
    queryFn: () => getCategory(id),
  });
  return { category: data, isLoading };
}

export function useAllProductsByCategory(catId: number | string) {
  const { data, isLoading } = useQuery<ProductProps[]>({
    queryKey: ["products", catId],
    queryFn: () => getProductsByCategory(catId),
  });
  return { products: data, isLoading };
}
