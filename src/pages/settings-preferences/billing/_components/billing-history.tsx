import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Invoice } from "@/types/billing";
import { useState } from "react";
import { useLoaderData } from "react-router";

export default function BillingHistory() {
  const [selected, setSelected] = useState<string[]>([]);

  const billings = useLoaderData();

  const toggleAll = () => {
    setSelected(
      selected.length === billings.length
        ? []
        : billings.map((i: Invoice) => i.id),
    );
  };

  const toggleOne = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-100">
            <TableHead className="w-10 px-4">
              <Checkbox
                checked={selected.length === billings.length}
                onCheckedChange={toggleAll}
                className="border-border border"
              />
            </TableHead>
            <TableHead className="font-sans text-sm font-medium text-gray-500">
              Invoice ↓
            </TableHead>
            <TableHead className="font-sans text-sm font-medium text-gray-500">
              Status
            </TableHead>
            <TableHead className="font-sans text-sm font-medium text-gray-500">
              Amount
            </TableHead>
            <TableHead className="font-sans text-sm font-medium text-gray-500">
              Plan
            </TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {billings.map((invoice: Invoice) => (
            <TableRow
              key={invoice.id}
              className="border-border border-b last:border-0"
            >
              <TableCell className="px-4">
                <Checkbox
                  checked={selected.includes(invoice.id)}
                  onCheckedChange={() => toggleOne(invoice.id)}
                  className="border-border border"
                />
              </TableCell>
              <TableCell className="font-sans text-sm font-medium">
                {invoice.month}
              </TableCell>
              <TableCell>
                <span className="border-border inline-flex items-center gap-1 rounded-md border px-2 py-0.5 font-sans text-xs text-green-500">
                  <svg viewBox="0 0 12 12" className="size-3 fill-green-500">
                    <path
                      d="M1 6l3.5 3.5L11 2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-muted-foreground">
                    {invoice.status}
                  </span>
                </span>
              </TableCell>
              <TableCell className="font-sans text-sm text-gray-700">
                {invoice.amount}
              </TableCell>
              <TableCell className="font-sans text-sm text-gray-700">
                {invoice.plan}
              </TableCell>
              <TableCell className="px-4 text-right">
                <button className="font-sans text-sm font-semibold text-[#02519E] hover:underline">
                  Edit
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
