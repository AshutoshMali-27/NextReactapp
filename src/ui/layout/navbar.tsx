// src/ui/layout/Topbar.tsx
"use client";

export default function Topbar() {
  return (
    <header className="navbar navbar-light bg-light px-4">
      <span className="navbar-brand">Welcome</span>

      <button className="btn btn-outline-danger btn-sm">
        Logout
      </button>
    </header>
  );
}
