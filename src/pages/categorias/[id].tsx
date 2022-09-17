import React from "react";

export default function oneCategory(props: any) {
  const { id } = props;
  return <div>{id}</div>;
}

export function getServerSideProps({ params }: any) {
  const id = params.id;
  return { id };
}
