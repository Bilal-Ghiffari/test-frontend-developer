"use client";

import {
  Accordion,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import Link from "next/link";
import AccordionCom from "./ui/accordion";
import DeletedProduct from "./deleted-product";

type DetailProduct = {
  data: any;
};

type Product = {
  id: string;
  name: string;
} & DetailProduct;

export const colums: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "data",
    header: "detail product",
    cell: ({ row }) => {
      const original = row.original;

      return (
        <Accordion type="single" collapsible>
          {original.data?.color && (
            <AccordionCom
              accordionContent={original.data?.color}
              accordionItem="item-1"
              accordionTrigger="Color"
            />
          )}
          {original.data?.Color && (
            <AccordionCom
              accordionContent={original.data?.Color}
              accordionItem="item-2"
              accordionTrigger="Color"
            />
          )}
          {original.data?.capacity && (
            <AccordionCom
              accordionContent={original.data?.capacity}
              accordionItem="item-3"
              accordionTrigger="Capacity"
            />
          )}
          {original.data?.Capacity && (
            <AccordionCom
              accordionContent={original.data?.Capacity}
              accordionItem="item-4"
              accordionTrigger="Capacity"
            />
          )}
          {original.data?.price && (
            <AccordionCom
              accordionContent={original.data?.price}
              accordionItem="item-5"
              accordionTrigger="Price"
            />
          )}
          {original.data?.Price && (
            <AccordionCom
              accordionContent={original.data?.Price}
              accordionItem="item-6"
              accordionTrigger="Price"
            />
          )}
          {original.data?.["capacity 6GB"] && (
            <AccordionCom
              accordionContent={original.data?.["capacity 6GB"]}
              accordionItem="item-7"
              accordionTrigger="capacity 6GB"
            />
          )}
          {original.data?.["CPU model"] && (
            <AccordionCom
              accordionContent={original.data?.["CPU model"]}
              accordionItem="item-8"
              accordionTrigger="CPU model"
            />
          )}
          {original.data?.["Strap Colour"] && (
            <AccordionCom
              accordionContent={original.data?.["Strap Colour"]}
              accordionItem="item-9"
              accordionTrigger="Strap Colour"
            />
          )}
          {original.data?.["Case Size"] && (
            <AccordionCom
              accordionContent={original.data?.["Case Size"]}
              accordionItem="item-10"
              accordionTrigger="Case Size"
            />
          )}
          {original.data?.["Screen size"] && (
            <AccordionCom
              accordionContent={original.data?.["Screen size"]}
              accordionItem="item-11"
              accordionTrigger="Screen size"
            />
          )}
          {original.data?.Generation && (
            <AccordionCom
              accordionContent={original.data?.Generation}
              accordionItem="item-12"
              accordionTrigger="Generation"
            />
          )}
          {original.data?.Description && (
            <AccordionCom
              accordionContent={original.data?.Description}
              accordionItem="item-13"
              accordionTrigger="Description"
            />
          )}
          {original.data?.["capacity 6GB"] && (
            <AccordionCom
              accordionContent={original.data?.["capacity 6GB"]}
              accordionItem="item-13"
              accordionTrigger="Description"
            />
          )}
        </Accordion>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <div className="inline-flex gap-6 items-center">
          <Button variant="secondary" size="sm" asChild>
            <Link href={`/edit/${product.id}`}>
              <Pencil className="h-4 w-4 mr-2" />
            </Link>
          </Button>
          <DeletedProduct id={product.id} />
        </div>
      );
    },
  },
];
