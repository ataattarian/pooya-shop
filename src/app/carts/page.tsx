"use client";
import Icon from "@/components/atoms/icon";
import { CartsContext } from "@/lib/contexts";
import { CartProps } from "@/lib/interfaces";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useRecoilState } from "recoil";

export default function CartsPage() {
  const [carts, setCarts] = useRecoilState(CartsContext);
  const totalPrice = carts.reduce(
    (a, item: any) => a + item.price * item.qty,
    0
  );

  const router = useRouter();

  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-6 gap-4 mx-auto max-w-screen-md my-10">
      <div className="flex flex-col gap-4 col-span-4">
        {carts.map((cart) => (
          <CardCart key={cart.id} {...cart} />
        ))}
      </div>
      <div className="lg:col-span-2">
        <div className="p-6 flex gap-6 bg-secondary border border-line rounded-xl">
          {totalPrice !== 0 ? (
            <div className="flex flex-col">
              <h2 className="text-base font-medium text-heading whitespace-nowrap">
                قیمت نهایی : {totalPrice}.000 تومان
              </h2>
              <button
                onClick={() => router.push("/peyment")}
                className="mt-4 flex items-center text-center justify-center leading-6 text-sm gap-2 bg-blue dark:bg-sky-200 dark:text-sky-800 px-3 py-2 rounded-lg font-semibold text-white active:scale-90 duration-150"
              >
                <Icon name="shopping-transaction" />
                <span className="-mt-1">نهایی کردن خرید</span>
              </button>
            </div>
          ) : (
            <h2 className="text-lg font-medium text-heading">
              هیچ محصولی در سبد خرید شما وحود ندارد
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

const CardCart = (cart: CartProps) => {
  const [carts, setCarts] = useRecoilState(CartsContext);

  const incrementQty = (id: number) => {
    setCarts(
      carts.map((cart) => {
        return cart.id === id ? { ...cart, qty: cart.qty + 1 } : cart;
      })
    );
  };

  const decrementQty = (id: number) => {
    const existCart = carts.find((x) => x.id === id);
    if (existCart?.qty === 1) {
      setCarts(carts.filter((x) => x.id !== id));
      return toast.success("Cart Removed!");
    } else {
      return setCarts(
        carts.map((cart) => {
          return cart.id === id ? { ...cart, qty: cart.qty - 1 } : cart;
        })
      );
    }
  };

  return (
    <div
      key={cart.id}
      className="p-6 flex gap-6 bg-secondary border border-line rounded-xl"
    >
      <img src={cart.image} className="rounded-xl w-24 h-24" />
      <div className="flex flex-col gap-2">
        <h2 className="text-lg text-heading font-medium">{cart.name}</h2>
        <p>{cart.price}.000 تومان</p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => incrementQty(cart.id)}
            className="px-2 py-1 bg-emerald-400 text-white rounded-lg"
          >
            <Icon name="plus" />
          </button>
          <p>{cart.qty}</p>
          <button
            onClick={() => decrementQty(cart.id)}
            className="px-2 py-1 bg-rose-400 text-white rounded-lg"
          >
            <Icon name="minus" />
          </button>
        </div>
      </div>
    </div>
  );
};
