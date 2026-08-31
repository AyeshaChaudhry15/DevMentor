"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";

const HIDDEN_ROUTES = ["/login", "/signup", "/forgetpassword", "/forgetpassword2"];

export default function ConditionalNavbar() {
  const pathname = usePathname();

  const shouldHide = HIDDEN_ROUTES.some((route) => pathname?.startsWith(route));

  if (shouldHide) return null;

  return <Navbar />;
}