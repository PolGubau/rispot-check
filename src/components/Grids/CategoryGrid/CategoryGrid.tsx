import Link from "next/link";
import styles from "./CategoryGrid.module.css";
export default function CategoryGrid({ array = [] }: any) {
  return (
    <>
      <p>CATEGORIAS</p>
      <div className={styles.grid}>
        {array.map((element: any) => (
          <Link href={`/categoria/${element.name}`} key={element.id}>
            <a className={styles.card}>
              <div className={styles.elementBox}>
                <h3>{element.name}</h3>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}
