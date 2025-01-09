import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Cars shop</h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://botostart.ir" target="_blank" rel="noreferrer">
          Botostart
        </a>{" "}
         Cars shop Project &copy; by emaad
      </footer>
    </>
  );
}

export default Layout;
