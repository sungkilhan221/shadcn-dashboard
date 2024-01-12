"use client";

import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type Props = {};

export default function OrdersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Orders" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

type Order = {
  order: string;
  status: string;
  lastOrder: string;
  method: string;
};

export const data: Order[] = [
  {
    order: "ORD001",
    status: "Pending",
    lastOrder: "2023-01-15",
    method: "Credit Card",
  },
  {
    order: "ORD002",
    status: "Processing",
    lastOrder: "2023-01-15",
    method: "Credit Card",
  },
  {
    order: "ORD003",
    status: "Completed",
    lastOrder: "2023-01-15",
    method: "Credit Card",
  },
  {
    order: "ORD004",
    status: "Pending",
    lastOrder: "2023-01-15",
    method: "Credit Card",
  },
  {
    order: "ORD005",
    status: "Pending",
    lastOrder: "2023-01-15",
    method: "Credit Card",
  },
  {
    order: "ORD006",
    status: "Pending",
    lastOrder: "2023-01-15",
    method: "Credit Card",
  },
  {
    order: "ORD007",
    status: "Pending",
    lastOrder: "2023-01-15",
    method: "Credit Card",
  },
  {
    order: "ORD008",
    status: "Pending",
    lastOrder: "2023-01-15",
    method: "Credit Card",
  },
  {
    order: "ORD009",
    status: "Pending",
    lastOrder: "2023-01-15",
    method: "Credit Card",
  },
  {
    order: "ORD0010",
    status: "Pending",
    lastOrder: "2023-01-15",
    method: "Credit Card",
  },
  {
    order: "ORD0011",
    status: "Pending",
    lastOrder: "2023-01-15",
    method: "Credit Card",
  },
];

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "order",
    header: "Order",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-200": row.getValue("status") === "Pending",
            "bg-orange-200": row.getValue("status") === "Processing",
            "bg-green-200": row.getValue("status") === "Completed",
          })}
        >
          {row.getUniqueValues("status")}
        </div>
      );
    },
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
];
