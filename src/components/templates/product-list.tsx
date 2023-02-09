import { useRef } from "react";
import BlurImage from "@/components/atoms/blur-image";
import { useAllProducts } from "@/lib/hooks/useProducts";

export default function ProductList() {
  const {
    data,
    isLoading,
    isSuccess,
  } = useAllProducts();
  const observerElem = useRef(null);

  return (
    <>
      <h1 className="text-2xl font-bold text-heading mb-3">Products</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
            {data?.map((product: any, i: number) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-secondary border border-line cursor-pointer"
              >
                <BlurImage alt={product.title} src={product.images[0]} />
                <div className="flex flex-col mt-4">
                  <h2 className="text-sm">{product.title}</h2>
                  <p>${product.price}</p>
                </div>
              </div>
            ))
          )}
      </div>
    </>
  );
}
