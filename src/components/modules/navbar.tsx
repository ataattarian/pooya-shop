import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import Icon from "../atoms/icon";
import styles from "@/lib/sass/navbar.module.scss";
import { useSidebar } from "@/lib/hooks/useSidebar";
import { useRecoilState, useRecoilValue } from "recoil";
import { CartsContext } from "@/lib/contexts";

interface NavItemProps {
  title: string;
  href: string;
}

export default function Navbar() {
  return (
    <header className={styles["header"]}>
      <nav className={styles["navbar"]}>
        <Logo />
        <ul className={styles["nav-list"]}>
          <NavItem title="صفحه اصلی" href="/" />
          <NavItem title="جستجو" href="/search" />
          <NavItem title="درباره ما" href="/about" />
          <NavItem title="تماس با ما" href="/contact" />
          <NavItem title="وارد شوید" href="/auth/login" />
        </ul>
        <NavButtons />
      </nav>
    </header>
  );
}

function Logo() {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")} className={styles["logo"]}>
      <img src="/logo.png" />
      <h2>فوتینو</h2>
    </div>
  );
}

function NavItem({ title, href }: NavItemProps) {
  const router = useRouter();
  return <li onClick={() => router.push(href)}>{title}</li>;
}

const NavButtons = () => {
  const { theme, setTheme } = useTheme();
  const { openSidebar } = useSidebar();
  const carts = useRecoilValue(CartsContext)
  const router = useRouter()
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => router.push('/carts')}
        className="flex items-center leading-6 text-sm gap-2 bg-blue dark:bg-sky-200 dark:text-sky-800 px-3 py-2 rounded-lg font-semibold text-white active:scale-90 duration-150"
      >
        <Icon name="shopping-bag" />
        <span>{carts.length}</span>
      </button>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="flex items-center leading-6 text-sm gap-2 bg-blue dark:bg-sky-200 dark:text-sky-800 px-3 py-2 rounded-lg font-semibold text-white active:scale-90 duration-150"
      >
        <Icon name="moon" />
        <span>تغیر پوسته</span>
      </button>
      <button onClick={openSidebar} className={styles["nav-menu"]}>
        <Icon name="bars" />
      </button>
    </div>
  );
};
