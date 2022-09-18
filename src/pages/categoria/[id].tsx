import { useRouter } from "next/router";
import { Sales } from "src/utils/Data";
import { Sale } from "src/interfaces/tableInterfaces";
import SaleGrid from "src/components/Grids/SaleGrid/SaleGrid";
export default function Categoria() {
  const { query } = useRouter();
  const categorySearched = query.id;

  //filter which sales are in the category
  const sales: Sale[] = Sales.filter(
    (sale) => sale.category === categorySearched
  );

  return (
    <div>
      <h1>Categoria</h1>
      <p>{query.id}</p>
      <p>{sales.length}</p>
      <SaleGrid array={sales} />
    </div>
  );
}
