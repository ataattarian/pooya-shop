import Icon from "@/components/atoms/icon";

export default function PeymentPage() {
  return (
    <div className="max-w-sm mx-auto p-8">
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
  );
}
