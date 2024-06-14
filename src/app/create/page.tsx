import React from "react";
import FormProduct from "../components/form-product";

type Props = {};

export default function CreatePage({}: Props) {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="my-6 text-2xl font-semibold">Tambah data Product</div>
      </div>
      <FormProduct type="ADD" />
    </div>
  );
}
