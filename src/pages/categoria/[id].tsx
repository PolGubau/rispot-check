import { useRouter } from "next/router";

export default function Categoria() {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      <h1>Categoria</h1>
      <p>{query.id}</p>
    </div>
  );
}
