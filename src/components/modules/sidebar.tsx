import { useSidebar } from "@/lib/hooks/useSidebar";
import styles from "@/lib/sass/sidebar.module.scss";
import { useRouter } from "next/navigation";

interface SidebarItemProps {
  title: string;
  href: string;
}

export default function Sidebar() {
  const { sidebar , closeSidebar } = useSidebar();
  
  return (
    <>
      <div
        className={`${styles["sidebar"]} ${
          sidebar ? "right-0" : "-right-full"
        }`}
      >
        <div className={styles["logo"]}>
          <img src="/logo.png" />
          <h2>فوتینو</h2>
        </div>
        <ul className={styles["sidebar-list"]}>
          <SidebarItem title="صفحه اصلی" href="/" />
          <SidebarItem title="جستجو" href="/search" />
          <SidebarItem title="درباره ما" href="/about" />
          <SidebarItem title="تماس با ما" href="/contact" />
          <SidebarItem title="وارد شوید" href="/auth/login" />
        </ul>
      </div>
      {sidebar ? (
        <div onClick={closeSidebar} className="fixed top-0 left-0 w-full h-full bg-primary opacity-70"></div>
      ) : null}
    </>
  );
}

function SidebarItem({ title, href }: SidebarItemProps) {
  const router = useRouter();
  const { closeSidebar } = useSidebar();
  return (
    <li
      onClick={() => {
        router.push(href);
        closeSidebar();
      }}
    >
      {title}
    </li>
  );
}
