import SaleElement from "./SaleElement/SaleElement";
import styles from "./SaleGrid.module.css";
import { SaleInterface } from "src/interfaces/tableInterfaces";
export default function SaleGrid({ array }: any) {
  return (
    <>
      <p>OFERTA</p>
      <div className={styles.grid}>
        {array.map((a: SaleInterface) => (
          <SaleElement product={a} key={a.id} />
        ))}
      </div>
    </>
  );
}
