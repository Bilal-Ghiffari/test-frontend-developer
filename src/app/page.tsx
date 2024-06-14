import { Button } from "@/components/ui/button";
import { GetAllData } from "./lib/actions";
import Link from "next/link";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { colums } from "./components/colums-table";

export default async function Home() {
  const data = await GetAllData();
  console.log(data);
  return (
    <div className="">
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-semibold">Product</div>
        <Button asChild>
          <Link href="create">
            <Plus className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      <DataTable columns={colums} data={data} />
    </div>
  );
}
