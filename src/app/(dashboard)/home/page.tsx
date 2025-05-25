"use server";
import { auth } from "@/auth";
import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/sidebar";
import MobileSidebar from "@/components/sidebar/MobileSidebar";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="flex h-screen">
      <div className="block md:hidden">
        <MobileSidebar />
      </div>
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <Dashboard />
    </div>
  );
};
export default page;
