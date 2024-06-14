"use client";

import React from "react";
import { deleteProduct } from "../lib/actions";
import { Trash } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

type Props = {
  id: string;
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button size="sm" disabled={pending} type="submit" variant="destructive">
      <Trash className="mr-2 w-4 h-4" />
      {pending ? "Process..." : "Hapus"}
    </Button>
  );
}

export default function DeletedProduct({ id }: Props) {
  const deletedProductWithId = deleteProduct.bind(null, id);
  return (
    <form action={deletedProductWithId}>
      <SubmitButton />
    </form>
  );
}
