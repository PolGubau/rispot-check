import styles from "./SaleElement.module.css";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { SaleInterface } from "src/interfaces/tableInterfaces";

//
export default function SaleElement({ product }: { product: SaleInterface }) {
  const { image, name, stars, valorations, oldPrice, newPrice } = product;
  const savingPercentage = Math.round(((oldPrice / 10 / 100) * newPrice) / 100);
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.cardHeader}>
            {/* IMAGE */}
            <div className={styles.cardImage}>
              <div className={styles.cardImageOverlay}>
                <Image
                  src={image}
                  alt={name}
                  width={150}
                  height={150}
                  //   layout="fill"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className={styles.cardFooter}>
            {/* NAME */}
            <h3 className={styles.nameProduct}>
              {
                // showing prod.name with a max of 30 characters:
                name.length > 30 ? name.substring(0, 50) + "..." : name
              }
            </h3>
            {/* STARS */}
            <div className={styles.reviews}>
              <div className={styles.starsNumber}>
                <div>
                  {/* drawing how many stars as number in stars/10, if not arrives to 5, draw outlined ones*/}
                  {[...Array(Math.floor(stars / 10))].map((e, i) => (
                    <AiFillStar key={i} size={10} />
                  ))}
                  {[...Array(5 - Math.floor(stars / 10))].map((e, i) => (
                    <AiOutlineStar key={i} size={10} />
                  ))}
                </div>
                <p className={styles.numStars}> {stars / 10} de 5</p>
              </div>

              {/* VALORATION */}
              <p className={styles.valoraciones}>
                {valorations} valoraciones globales.
              </p>
            </div>

            <div className={styles.bottom}>
              {/* PRICE */}
              <div className={styles.price}>
                <p className={styles.newPrice}>{newPrice / 100}€</p>
              </div>

              {/* PERCENT */}
              <div className={styles.percentsContainer}>
                <div className={styles.percents}>
                  <p className={styles.oldPrice}>
                    PVPR:
                    <span className={styles.oldPriceNumbers}>
                      {oldPrice / 100}€
                    </span>
                  </p>
                  <p>Ahorra {savingPercentage}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
