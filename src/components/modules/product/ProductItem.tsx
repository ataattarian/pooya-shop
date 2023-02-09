import BlurImage from "@/components/atoms/blur-image";
import Icon from "@/components/atoms/icon";
import { CartsContext } from "@/lib/contexts";
import { ProductProps } from "@/lib/interfaces";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";
import { useRecoilState } from "recoil";

export default function Product(product: ProductProps) {
  const [carts, setCarts] = useRecoilState(CartsContext);
  const addToCart = () => {
    const existCart = carts.find((cart) => cart.id === product.id);
    if (existCart) {
      setCarts(
        carts.map((cart) =>
          cart.id === product.id
            ? { ...existCart, qty: existCart.qty + 1 }
            : cart
        )
      );
    } else {
      toast.success("New Cart Added!");
      setCarts((prev) => [...prev, { ...product, qty: 1 }]);
    }
  };

  const url = new URL(product.image);
  url.port = "1337";

  return (
    <>
      <div
        key={product.id}
        className="p-4 rounded-xl bg-secondary border border-line cursor-pointer"
      >
        <BlurImage alt={product.name} src={url.toString()} />
        <div className="flex flex-col mt-4">
          <h2 className="text-sm text-heading font-medium leading-7">
            {product.name}
          </h2>
          <p>{product.price}.000 تومان</p>
          <div className="my-2 flex items-center">
            <p className="text-sm px-4 py-2 font-medium text-blue leading-5 rounded-xl border border-line bg-primary">
              {product.category.name}
            </p>
          </div>
          <button
            onClick={addToCart}
            className="flex items-center text-center justify-center leading-6 text-sm gap-2 bg-blue dark:bg-sky-200 dark:text-sky-800 px-3 py-2 rounded-lg font-semibold text-white active:scale-90 duration-150"
          >
            <Icon name="shopping-cart" />
            <span className="-mt-1">سبد خرید</span>
          </button>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export function ProductSkeletons() {
  const skeletons = Array(20).fill(null)
  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
      {skeletons.map((_) => (
        <div
          key={_}
          className="p-4 rounded-xl bg-secondary border border-line cursor-pointer"
        >
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-primary xl:aspect-w-7 xl:aspect-h-6" />
          <div className="flex flex-col mt-4 gap-4">
            <div className="w-full h-5 bg-primary rounded-full"></div>
            <div className="w-1/3 h-5 bg-primary rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
