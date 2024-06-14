import FormProduct from "@/app/components/form-product";
import { getProductById } from "@/app/lib/data";

type Params = {
  id: string;
};
interface EditPageProduct {
  params: Params;
}

export default async function EditPage({ params }: EditPageProduct) {
  const data = await getProductById(params.id);
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Edit data Product</div>
      </div>
      <FormProduct type="EDIT" defaultValues={data} />
    </div>
  );
}
