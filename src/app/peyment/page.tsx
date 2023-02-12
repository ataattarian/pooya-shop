'use client'
import Icon from "@/components/atoms/icon";
import { CartsContext } from "@/lib/contexts";
import { useRecoilState } from "recoil";

export default function PeymentPage() {
  const [carts, setCarts] = useRecoilState(CartsContext);
  const totalPrice = carts.reduce(
    (a, item: any) => a + item.price * item.qty,
    0
  );
  return (
    <div className="mx-auto p-8 grid grid-cols-2 gap-4">
      <div>
        <div className="flex items-center mx-auto justify-center p-5 bg-blue text-white rounded-full w-12 h-12">
          <Icon name="paypal" />
        </div>
        <form className="max-w-md mx-auto flex flex-col gap-4 mt-8">
          <input
            type={"text"}
            className="py-2 px-4 bg-secondary border rounded-xl border-line leading-7 w-full duration-200 focus:ring-2 ring-blue text-white"
            placeholder="نام روی کارت"
          />
          <input
            type={"text"}
            className="py-2 px-4 bg-secondary border rounded-xl border-line leading-7 w-full duration-200 focus:ring-2 ring-blue text-white"
            placeholder="شماره کارت: 0000 0000 0000 0000"
          />
          <input
            type={"text"}
            className="py-2 px-4 bg-secondary border rounded-xl border-line leading-7 w-full duration-200 focus:ring-2 ring-blue text-white"
            placeholder="تاریخ انقضا"
          />
          <input
            type={"text"}
            className="py-2 px-4 bg-secondary border rounded-xl border-line leading-7 w-full duration-200 focus:ring-2 ring-blue text-white"
            placeholder="کد امنیتی"
          />
          <button className="px-4 py-2 rounded-xl border text-white font-semibold border-blue bg-blue leading-7">
            پرداخت نهایی
          </button>
        </form>
      </div>
      <div className="p-6 flex gap-6 bg-secondary border border-line rounded-xl">
        {totalPrice !== 0 && (
          <div>
            <h2 className="text-base font-medium text-heading whitespace-nowrap">
              قیمت نهایی : {totalPrice}.000 تومان
            </h2>
            <h2 className="text-xl text-heading font-semibold my-8">روش پرداخت</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-4 border border-line rounded-2xl p-6 bg-primary hover:ring-2 duration-200 cursor-pointer">
                <img className="w-10 h-10 object-cover" src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Saman_Bank_logo.png/220px-Saman_Bank_logo.png" />
                <h2 className="whitespace-nowrap font-medium text-heading">بانک سامان</h2>
              </div>
              <div className="flex items-center gap-4 border border-line rounded-2xl p-6 bg-primary hover:ring-2 duration-200 cursor-pointer">
                <img className="w-10 h-10 object-cover" src="https://mellatbank.am/assets/images/nav/logo.png" />
                <h2 className="whitespace-nowrap font-medium text-heading">بانک ملت</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
