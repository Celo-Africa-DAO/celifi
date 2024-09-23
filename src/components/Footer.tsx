import React from "react";
import { Button } from "./ui/button";
import { SwapIcon } from "./icons/swap";
import { DashboardIcon } from "./icons/Dashboard";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FileSearch } from "lucide-react";

export function Footer() {
  const pathname = usePathname();

  return (
    <>
      <div className="bg-Celifi-Dark-Gray h-20 w-screen flex md:justify-center justify-between pr-4 md:gap-5 items-center mr-2 rounded">
        {/* Dashboard Link */}
        <Link href="/dashboard" className="flex flex-col justify-center items-center text-xs">
          <div className="rounded-full">
            <DashboardIcon
              className={`${
                pathname.includes("dashboard")
                  ? "text-Celifi-Yellow"
                  : "text-Celifi-Gray"
              }`}
            />
          </div>
          <Button
            className={`text-xs ${
              pathname.includes("dashboard")
                ? "text-Celifi-Yellow"
                : "text-Celifi-Gray"
            }`}
            variant="link"
          >
            Dashboard
          </Button>
        </Link>

        {/* Swap Link */}
        <Link href="/swap" className="flex flex-col justify-center items-center text-xs">
          <div className="rounded-full">
            <SwapIcon
              className={`${
                pathname.includes("swap")
                  ? "text-Celifi-Yellow"
                  : "text-Celifi-Gray"
              }`}
            />
          </div>
          <Button
            className={`text-xs ${
              pathname.includes("swap")
                ? "text-Celifi-Yellow"
                : "text-Celifi-Gray"
            }`}
            variant="link"
          >
            Swap
          </Button>
        </Link>

        {/* Request A Feature Link*/}
        <Link href="/request" className="flex flex-col justify-center items-center text-xs">
          <div className="rounded-full">
            <FileSearch
              className={`${
                pathname.includes("request")
                  ? "text-Celifi-Yellow"
                  : "text-Celifi-Gray"
              }`}
            />
          </div>
          <Button
            className={`text-xs ${
              pathname.includes("request")
                ? "text-Celifi-Yellow"
                : "text-Celifi-Gray"
            }`}
            variant="link"
          >
            Request A Feature
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Footer;
