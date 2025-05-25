"use client";
import { PizzaTable } from "@/components/PizzaOrders";
import Sidebar from "@/components/sidebar";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/app/context/globalContext";
import { useRouter } from "next/navigation";
import { debounce } from "@/lib/utils";
import PizzaOrdersData from "@/lib/Data";
import { ChevronDown, ChevronUp } from "lucide-react";
import MobileSidebar from "@/components/sidebar/MobileSidebar";

type Props = {};

const page = (props: Props) => {
  const [dropMenuStatus, setDropMenuStatus] = useState<boolean>(false);
  const [dropMenuFilter, setDropMenuFilter] = useState<boolean>(false);
  const { order, setOrder, filter, setFilter, sort, setSort } =
    useGlobalContext();
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

  //filter orders based on status
  useEffect(() => {
    if (!filter) {
      setOrder(PizzaOrdersData);
      return;
    }

    const filteredOrders = PizzaOrdersData.filter(
      (item) => item.status.toLowerCase() === filter.toLowerCase()
    );

    setOrder(filteredOrders);
  }, [filter]);

  //sort orders based on date
  useEffect(() => {
    if (!sort) {
      setOrder(PizzaOrdersData);
      return;
    }
    if (sort == "Newest first") {
      const filteredOrders = [...PizzaOrdersData].sort((a, b) => {
        return (
          new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()
        );
      });
      setOrder(filteredOrders);
    }
    if (sort == "Oldest first") {
      const filteredOrders = [...PizzaOrdersData].sort((a, b) => {
        return (
          new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
        );
      });
      setOrder(filteredOrders);
    }
  }, [sort]);

  //search orders by customer name
  const handleSearch = debounce((name: string) => {
    if (name.trim() === "") {
      setOrder(PizzaOrdersData);
      return;
    }
    const filteredOrders = order.filter((item) => {
      return item.customerName.toLowerCase().includes(name.toLowerCase());
    });
    setOrder(filteredOrders);
  }, 300);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="block md:hidden">
      <MobileSidebar />
      </div>
      <div className="hidden md:block">
      <Sidebar />
      </div>
      <div className="flex flex-col w-full gap-6 p-4 md:p-10 md:overflow-y-hidden">
      <div className="flex flex-col md:flex-row md:items-start md:w-full md:gap-5 gap-3 flex-wrap">
        <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleSearch(e.target.value)
        }
        type="search"
        id="default-search"
        className="block w-full md:w-1/2 p-2 ps-10 text-sm text-gray-900 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Orders by Customer Name"
        required
        />
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
        <DropdownMenu open={dropMenuStatus} onOpenChange={setDropMenuStatus}>
          <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex gap-2 w-full sm:w-auto">
            Filter by{" "}
            {filter ? (
            <span className="font-semibold">{filter}</span>
            ) : (
            "Status"
            )}{" "}
            {dropMenuStatus ? <ChevronUp /> : <ChevronDown />}
          </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
            <DropdownMenuRadioItem value="Pending" className="cursor-pointer">
            Pending
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Preparing" className="cursor-pointer">
            Preparing
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Out for Delivery" className="cursor-pointer">
            Out for Delivery
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Cancelled" className="cursor-pointer">
            Cancelled
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Delivered" className="cursor-pointer">
            Delivered
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button onClick={() => setFilter("")} className="w-full sm:w-auto">
          Clear filters
        </Button>
        <DropdownMenu open={dropMenuFilter} onOpenChange={setDropMenuFilter}>
          <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex gap-2 w-full sm:w-auto">
            Sort by{" "}
            {sort ? <span className="font-semibold">{sort}</span> : "Date"}{" "}
            {dropMenuFilter ? <ChevronUp /> : <ChevronDown />}
          </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
            <DropdownMenuRadioItem value="Newest first" className="cursor-pointer">
            Newest first
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Oldest first" className="cursor-pointer">
            Oldest first
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button onClick={() => setSort("")} className="w-full sm:w-auto">
          Clear Sort
        </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <PizzaTable />
      </div>
      </div>
    </div>
  );
};
export default page;
