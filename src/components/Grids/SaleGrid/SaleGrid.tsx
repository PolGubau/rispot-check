import Link from "next/link";
import Image from "next/image";
import styles from "./SaleGrid.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function SaleGrid({ array }: any) {
  return (
    <>
      <p>OFERTA</p>
      <div className={styles.grid}>
        {array.map(
          (prod: {
            id: number;
            name: string;
            image: string;
            oldPrice: number;
            newPrice: number;
            stars: number;
            valorations: number;
          }) => (
            <Link href={`/categoria/${prod.name}`} key={prod.id}>
              <a className={styles.card}>
                <div className={styles.cardContent}>
                  <div className={styles.cardImage}>
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      width={350}
                      height={150}
                    />
                  </div>
                  <h3 className={styles.nameProduct}>
                    {
                      // showing prod.name with a max of 30 characters:
                      prod.name.length > 30
                        ? prod.name.substring(0, 30) + "..."
                        : prod.name
                    }
                  </h3>
                  <div className={styles.stars}>
                    <p className={styles.starsNumber}>
                      <div>
                        {/* drawing how many stars as number in prod.stars/10, if not arrives to 5, draw outlined ones*/}
                        {[...Array(Math.floor(prod.stars / 10))].map((e, i) => (
                          <AiFillStar key={i} />
                        ))}
                        {[...Array(5 - Math.floor(prod.stars / 10))].map(
                          (e, i) => (
                            <AiOutlineStar key={i} />
                          )
                        )}
                      </div>
                      <p> {prod.stars / 10} de 5</p>
                    </p>
                    <p className={styles.valoraciones}>
                      {prod.valorations} valoraciones globales.
                    </p>
                  </div>
                  <div className={styles.details}>
                    <div className={styles.price}>
                      <p className={styles.newPrice}>{prod.newPrice / 100}€</p>
                      <p className={styles.oldPrice}>
                        PVPR:
                        <span className={styles.oldPriceNumbers}>
                          {prod.oldPrice / 100}€
                        </span>
                      </p>
                    </div>
                    <div className={styles.percents}>
                      <p>Ahorra {(prod.oldPrice / 100) * prod.newPrice}%</p>
                    </div>
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
