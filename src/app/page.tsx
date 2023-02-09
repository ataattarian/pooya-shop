"use client";
import Product, { ProductSkeletons } from "@/components/modules/product/ProductItem";
import { useAllProducts } from "@/lib/hooks/useProducts";

export default function HomePage() {
  const { isLoading, data } = useAllProducts();
  if (isLoading) return <ProductSkeletons />;
  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
      {data?.map((product, i) => (
        <Product {...product} />
      ))}
    </div>
  );
}