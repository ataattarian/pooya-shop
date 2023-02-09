export default function ContactPage() {
  return (
    <div className="max-w-screen-md mx-auto p-10">
      <h1 className="text-5xl font-black text-heading text-center mb-6">
        ارتباط با ما
      </h1>
      <h2 className="text-sm leading-7 text-center">
        ما از یک رویکرد چابک برای آزمایش مفروضات و ارتباط زودهنگام و اغلب با
        نیازهای مخاطبان شما استفاده می کنیم.
      </h2>
      <form className="max-w-md mx-auto flex flex-col gap-4 mt-8">
        <input
          type={"text"}
          className="py-2 px-4 bg-secondary border rounded-xl border-line leading-7 w-full duration-200 focus:ring-2 ring-blue text-white"
          placeholder="نام و نام خانوادگی"
        />
        <input
          type={"text"}
          className="py-2 px-4 bg-secondary border rounded-xl border-line leading-7 w-full duration-200 focus:ring-2 ring-blue text-white"
          placeholder="آدرس ایمیل"
        />
        <textarea
          rows={4}
          className="py-2 px-4 bg-secondary border rounded-xl border-line leading-7 w-full duration-200 focus:ring-2 ring-blue text-white"
          placeholder="توضیحات"
        />
        <button className="px-4 py-2 rounded-xl border text-white font-semibold border-blue bg-blue leading-7">
          ارسال پیام
        </button>
      </form>
    </div>
  );
}
