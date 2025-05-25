"use client";
import { PizzaTable } from "@/components/PizzaOrders";
import Sidebar from "@/components/sidebar";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { PizzaOrderType } from "@/lib/Data";
import { useGlobalContext } from "@/app/context/globalContext";
import { useRouter } from "next/navigation";

type Props = {};

const page = (props: Props) => {
  const [SearchName, setSearchName] = useState<string>("");
  const { order, setOrder, filter, setFilter } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("/api/auth/session");

      if (!res.ok) {
        router.push("/");
      }
    };
    checkAuth();
  }, []);

  const handleSearch = (name: string) => {
    setSearchName(name);
  };
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex flex-col overflow-y-hidden w-full gap-10 p-10">
        <div className="flex items-start  w-full gap-5">
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSearch(e.target.value)
            }
            type="search"
            id="default-search"
            className="block w-1/2 p-2 ps-10 text-sm text-gray-900  rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Tasks "
            required
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Sort by</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <span>Date</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Filter by</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <span>Status</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <PizzaTable />
      </div>
    </div>
  );
};
export default page;
