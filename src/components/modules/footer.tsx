export default function Footer() {
  return (
    <footer className="border-t border-line pb-10 pt-20 px-8 bg-secondary">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col gap-10 justify-between">
          <div>
            <h3 className="text-2xl text-heading font-semibold mb-5">فوتینو</h3>
            <p className="text-sm leading-6">
              دنیای فروش انواع عکس ها از سراسر جهان
            </p>
            <div className="flex items-center gap-4 mt-8"></div>
          </div>
          <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col justify-evenly gap-4 flex-1">
            <div>
              <h3 className="text-cyan-400 font-semibold text-xl mb-6">
                سایت مپ
              </h3>
              <ul>
                <li className="py-2 leading-6 hover:text-heading font-medium cursor-pointer text-sm">
                  صفحه اصلی
                </li>
                <li className="py-2 leading-6 hover:text-heading font-medium cursor-pointer text-sm">
                  جستجو
                </li>
                <li className="py-2 leading-6 hover:text-heading font-medium cursor-pointer text-sm">
                  وبلاگ
                </li>
                <li className="py-2 leading-6 hover:text-heading font-medium cursor-pointer text-sm">
                  درباره ما
                </li>
                <li className="py-2 leading-6 hover:text-heading font-medium cursor-pointer text-sm">
                  تماس با ما
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-emerald-400 font-semibold text-xl mb-6">
                Top Users
              </h3>
              <ul>
                <li className="py-2 leading-6 hover:text-heading font-medium cursor-pointer text-sm">
                  Soheil Ghanbary
                </li>
                <li className="py-2 leading-6 hover:text-heading font-medium cursor-pointer text-sm">
                  Nima Teflisi
                </li>
                <li className="py-2 leading-6 hover:text-heading font-medium cursor-pointer text-sm">
                  Mahdi Alishahi
                </li>
                <li className="py-2 leading-6 hover:text-heading font-medium cursor-pointer text-sm">
                  Artin Bahrpeyma
                </li>
                <li className="py-2 leading-6 hover:text-heading font-medium cursor-pointer text-sm">
                  Hasan Mohamammadi
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-amber-400 font-semibold text-xl mb-6">
                محصولات پرفروش
              </h3>
              <ul>
                <li className="py-2 leading-6 hover:text-heading font-medium cursor-pointer text-sm">
                  سامسونگ S23 Ultra
                </li>
                <li className="py-2 leading-6 hover:text-heading font-medium cursor-pointer text-sm">
                  شیائومی Mi 12 Ultra
                </li>
                <li className="py-2 leading-6 hover:text-heading font-medium cursor-pointer text-sm">
                  لپ تاپ مک بوک پرو M2
                </li>
                <li className="py-2 leading-6 hover:text-heading font-medium cursor-pointer text-sm">
                  مانیتور سامسونگ VA24CLX
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-8 border-line" />
        <p className="text-sm text-center">© تمامی حقوق این وبسایت متعلق به محمد قاسمی میباشد</p>
      </div>
    </footer>
  );
}
