"use client";

import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type Props = {};

export default function UsersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

type Payment = {
  name: string;
  email: string;
  lastOrer: string;
  method: string;
};

export const data: Payment[] = [
  {
    name: "John Doe",
    email: "john@example.com",
    lastOrer: "2023-01-01",
    method: "Credit Card",
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    lastOrer: "2022-10-26",
    method: "Cash",
  },
  {
    name: "Jessica Moore",
    email: "jessica@example.com",
    lastOrer: "2022-12-8",
    method: "Debit Card",
  },
  {
    name: "Fiona Miller",
    email: "fiona@example.com",
    lastOrer: "2023-9-7",
    method: "Credit Card",
  },
  {
    name: "Jack Smith",
    email: "jack@example.com",
    lastOrer: "2023-01-01",
    method: "Cash",
  },
  {
    name: "John Doe",
    email: "john@example.com",
    lastOrer: "2023-01-01",
    method: "Credit Card",
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    lastOrer: "2022-10-26",
    method: "Cash",
  },
  {
    name: "Jessica Moore",
    email: "jessica@example.com",
    lastOrer: "2022-12-8",
    method: "Debit Card",
  },
  {
    name: "Fiona Miller",
    email: "fiona@example.com",
    lastOrer: "2023-9-7",
    method: "Credit Card",
  },
  {
    name: "Jack Smith",
    email: "jack@example.com",
    lastOrer: "2023-01-01",
    method: "Cash",
  },
  {
    name: "John Doe",
    email: "john@example.com",
    lastOrer: "2023-01-01",
    method: "Credit Card",
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    lastOrer: "2022-10-26",
    method: "Cash",
  },
  {
    name: "Jessica Moore",
    email: "jessica@example.com",
    lastOrer: "2022-12-8",
    method: "Debit Card",
  },
  {
    name: "Fiona Miller",
    email: "fiona@example.com",
    lastOrer: "2023-9-7",
    method: "Credit Card",
  },
  {
    name: "Jack Smith",
    email: "jack@example.com",
    lastOrer: "2023-01-01",
    method: "Cash",
  },
  {
    name: "John Doe",
    email: "john@example.com",
    lastOrer: "2023-01-01",
    method: "Credit Card",
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    lastOrer: "2022-10-26",
    method: "Cash",
  },
  {
    name: "Jessica Moore",
    email: "jessica@example.com",
    lastOrer: "2022-12-8",
    method: "Debit Card",
  },
  {
    name: "Fiona Miller",
    email: "fiona@example.com",
    lastOrer: "2023-9-7",
    method: "Credit Card",
  },
  {
    name: "Jack Smith",
    email: "jack@example.com",
    lastOrer: "2023-01-01",
    method: "Cash",
  },
  {
    name: "John Doe",
    email: "john@example.com",
    lastOrer: "2023-01-01",
    method: "Credit Card",
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    lastOrer: "2022-10-26",
    method: "Cash",
  },
  {
    name: "Jessica Moore",
    email: "jessica@example.com",
    lastOrer: "2022-12-8",
    method: "Debit Card",
  },
  {
    name: "Fiona Miller",
    email: "fiona@example.com",
    lastOrer: "2023-9-7",
    method: "Credit Card",
  },
  {
    name: "Jack Smith",
    email: "jack@example.com",
    lastOrer: "2023-01-01",
    method: "Cash",
  },
  {
    name: "John Doe",
    email: "john@example.com",
    lastOrer: "2023-01-01",
    method: "Credit Card",
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    lastOrer: "2022-10-26",
    method: "Cash",
  },
  {
    name: "Jessica Moore",
    email: "jessica@example.com",
    lastOrer: "2022-12-8",
    method: "Debit Card",
  },
  {
    name: "Fiona Miller",
    email: "fiona@example.com",
    lastOrer: "2023-9-7",
    method: "Credit Card",
  },
  {
    name: "Jack Smith",
    email: "jack@example.com",
    lastOrer: "2023-01-01",
    method: "Cash",
  },
  {
    name: "John Doe",
    email: "john@example.com",
    lastOrer: "2023-01-01",
    method: "Credit Card",
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    lastOrer: "2022-10-26",
    method: "Cash",
  },
  {
    name: "Jessica Moore",
    email: "jessica@example.com",
    lastOrer: "2022-12-8",
    method: "Debit Card",
  },
  {
    name: "Fiona Miller",
    email: "fiona@example.com",
    lastOrer: "2023-9-7",
    method: "Credit Card",
  },
  {
    name: "Jack Smith",
    email: "jack@example.com",
    lastOrer: "2023-01-01",
    method: "Cash",
  },
  {
    name: "John Doe",
    email: "john@example.com",
    lastOrer: "2023-01-01",
    method: "Credit Card",
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    lastOrer: "2022-10-26",
    method: "Cash",
  },
  {
    name: "Jessica Moore",
    email: "jessica@example.com",
    lastOrer: "2022-12-8",
    method: "Debit Card",
  },
  {
    name: "Fiona Miller",
    email: "fiona@example.com",
    lastOrer: "2023-9-7",
    method: "Credit Card",
  },
  {
    name: "Jack Smith",
    email: "jack@example.com",
    lastOrer: "2023-01-01",
    method: "Cash",
  },
  {
    name: "John Doe",
    email: "john@example.com",
    lastOrer: "2023-01-01",
    method: "Credit Card",
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    lastOrer: "2022-10-26",
    method: "Cash",
  },
  {
    name: "Jessica Moore",
    email: "jessica@example.com",
    lastOrer: "2022-12-8",
    method: "Debit Card",
  },
  {
    name: "Fiona Miller",
    email: "fiona@example.com",
    lastOrer: "2023-9-7",
    method: "Credit Card",
  },
  {
    name: "Jack Smith",
    email: "jack@example.com",
    lastOrer: "2023-01-01",
    method: "Cash",
  },
  {
    name: "John Doe",
    email: "john@example.com",
    lastOrer: "2023-01-01",
    method: "Credit Card",
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    lastOrer: "2022-10-26",
    method: "Cash",
  },
  {
    name: "Jessica Moore",
    email: "jessica@example.com",
    lastOrer: "2022-12-8",
    method: "Debit Card",
  },
  {
    name: "Fiona Miller",
    email: "fiona@example.com",
    lastOrer: "2023-9-7",
    method: "Credit Card",
  },
  {
    name: "Jack Smith",
    email: "jack@example.com",
    lastOrer: "2023-01-01",
    method: "Cash",
  },
];

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "lastOrer",
    header: "ast Order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
];
