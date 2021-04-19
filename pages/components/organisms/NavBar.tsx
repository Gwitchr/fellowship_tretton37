import Image from "next/image";
import styles from "../../../styles/NavBar.module.css";

function NavBar({ below }) {
  return (
    <nav className="fixed w-full flex z-50 px-4">
      <Image
        src="/logo.svg"
        className={`${styles.logoFill} ${below ? styles.logoFill_below : ""}`}
        height={80}
        width={100}
      />
    </nav>
  );
}

export default NavBar;
