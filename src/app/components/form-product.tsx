"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import { saveProduct, updateProduct } from "../lib/actions";
import SubmitFormButton from "./fragments/submit-form-button";

export type ActionResult = {
  status: boolean | null;
  product: string | null;
};

const initialFormState: ActionResult = {
  status: null,
  product: null,
};

type Props = {
  type?: "ADD" | "EDIT";
  defaultValues?: any | null;
};

export default function FormProduct({ defaultValues, type }: Props) {
  const updateProductWithId = (_state: ActionResult, formData: FormData) =>
    updateProduct(null, formData, defaultValues?.id ?? "");
  const [state, formAction] = useFormState(
    type === "ADD" ? saveProduct : (updateProductWithId as any),
    initialFormState
  );
  console.log(state);
  return (
    <form className="space-y-6 w" action={formAction}>
      {state.product !== null && (
        <div className="mx-auto my-7 bg-red-500 w-[400px] p-4 rounded-lg text-white">
          <div className="font-bold mb-4">{state.product}</div>
        </div>
      )}
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name Product</Label>
          <Input
            placeholder="Harga Name..."
            name="name"
            id="name"
            type="text"
            defaultValue={defaultValues?.name ?? ""}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="Year">Year</Label>
          <Input
            placeholder="Year..."
            name="year"
            id="Year"
            type="number"
            defaultValue={defaultValues?.data?.year}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="Price">Price</Label>
          <Input
            placeholder="Price..."
            name="price"
            id="Price"
            type="number"
            defaultValue={defaultValues?.data?.price}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="Cpu model">CPU Model</Label>
          <Input
            placeholder="CPU Model..."
            name="cpu"
            id="Cpu model"
            type="text"
            defaultValue={defaultValues?.data?.["CPU model"]}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="Hard disk size">Hard disk size</Label>
          <Input
            placeholder="Hard disk size..."
            name="hardisk"
            id="hardisk"
            type="text"
            defaultValue={defaultValues?.data?.["Hard disk size"]}
            required
          />
        </div>
      </div>
      <SubmitFormButton />
    </form>
  );
}
