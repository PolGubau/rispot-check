import Link from "next/link";
import styles from "./Grid.module.css";
export default function Grid() {
  return (
    <>
      <p>CATEGORIAS</p>
      <div className={styles.grid}>
        <Link href={`/categorias/${"Ropa"}`} className={styles.element}>
          Ropa
        </Link>
      </div>
    </>
  );
}
