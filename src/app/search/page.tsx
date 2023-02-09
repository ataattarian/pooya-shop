"use client";
import BlurImage from "@/components/atoms/blur-image";
import Product, { ProductSkeletons } from "@/components/modules/product/ProductItem";
import { useAllProducts } from "@/lib/hooks/useProducts";

export default function SearchPage() {
  const { isLoading, data } = useAllProducts();
  return (
    <>
      <div className="p-10 max-w-md mx-auto">
        <input
          type={"text"}
          placeholder="جستجو بر اساس عنوان عکس"
          className="bg-secondary focus:ring-2 ring-blue duration-200 shadow-md rounded-xl px-4 py-2 leading-7 w-full"
        />
      </div>
      {isLoading ? (
        <ProductSkeletons />
      ) : (
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
          {data?.map((product, i) => (
            <Product key={i} {...product} />
          ))}
        </div>
      )}
    </>
  );
}
