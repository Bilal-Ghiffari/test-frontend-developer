import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

type Props = {
  accordionItem: string;
  accordionTrigger: string;
  accordionContent: string;
};

export default function Accordion({
  accordionContent,
  accordionItem,
  accordionTrigger,
}: Props) {
  return (
    <AccordionItem value={accordionItem}>
      <AccordionTrigger>{accordionTrigger}</AccordionTrigger>
      <AccordionContent>{accordionContent}</AccordionContent>
    </AccordionItem>
  );
}
