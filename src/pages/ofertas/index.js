import React from "react";
import Grid from "src/components/Grid/Grid";
import { Sale } from "src/utils/Data";
export default function Ofertas() {
  return (
    <>
      <Grid array={Sale} />
    </>
  );
}
