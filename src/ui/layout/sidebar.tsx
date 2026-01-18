// src/ui/layout/Sidebar.tsx
"use client";

import Link from "next/link";
import { ROUTES } from "@/src/constants/routes";

export default function Sidebar() {
  return (
    <aside className="sidebar bg-dark text-white p-3">
      <h5 className="mb-4">Enterprise Portal</h5>

      <ul className="nav flex-column">
        <li className="nav-item">
          <Link href={ROUTES.DASHBOARD} className="nav-link text-white">
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link href={ROUTES.USERS} className="nav-link text-white">
            Users
          </Link>
        </li>

        <li className="nav-item">
          <Link href={ROUTES.BILLS} className="nav-link text-white">
            Bills
          </Link>
        </li>
      </ul>
    </aside>
  );
}
