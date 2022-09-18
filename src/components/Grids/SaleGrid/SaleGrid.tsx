import Link from "next/link";
import styles from "./SaleGrid.module.css";
export default function SaleGrid({ array }: any) {
  return (
    <>
      <p>OFERTA</p>
      <div className={styles.grid}>
        {array.map((element: { id: number; name: string }) => (
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
