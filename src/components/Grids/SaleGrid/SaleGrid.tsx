import Link from "next/link";
import Image from "next/image";
import styles from "./SaleGrid.module.css";
export default function SaleGrid({ array }: any) {
  return (
    <>
      <p>OFERTA</p>
      <div className={styles.grid}>
        {array.map(
          (element: {
            id: number;
            name: string;
            image: string;
            oldPrice: number;
            newPrice: number;
            stars: number;
            valorations: number;
          }) => (
            <Link href={`/categoria/${element.name}`} key={element.id}>
              <a className={styles.card}>
                <div className={styles.cardContent}>
                  <div className={styles.cardImage}>
                    <Image
                      src={element.image}
                      alt={element.name}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <h3>{element.name}</h3>
                    <p>{element.newPrice / 100}</p>
                    <p className={styles.oldPrice}>
                      PVPR:
                      <span className={styles.oldPriceNumbers}>
                        {` `}
                        {element.oldPrice / 100}€
                      </span>
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          )
        )}
      </div>
    </>
  );
}
