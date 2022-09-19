import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <div>
            {/* <Link href="/"> */}
            {/*   <Image */}
            {/*     src="/img/logo cangrejal.png" */}
            {/*     width={200} */}
            {/*     height={200} */}
            {/*     alt="logo" */}
            {/*   /> */}
            {/* </Link> */}
          </div>
          <nav className={styles.navegacion}>
            <Link href="/"> Inicio</Link>
            <Link href="/tienda"> Tienda</Link>
            <Link href="/blog"> Blog</Link>
            <Link href="/nosotros"> ¿Quiénes Somos?</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
