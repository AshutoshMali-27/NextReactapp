// src/ui/layout/Topbar.tsx
"use client";

interface TopbarProps {
  sidebarCollapsed: boolean;
}
import { useRef, useState, useEffect } from "react";

export default function Topbar({sidebarCollapsed}:TopbarProps) {
 const [open, setOpen] = useState(false);
 const containerRef=useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{

    const handleClickOutside=(event:MouseEvent)=>{
      if(containerRef.current && !containerRef.current.contains(event.target as Node)){
        setOpen(false);
    };
  }

    document.addEventListener("mousedown",handleClickOutside);
    return()=>{
      document.removeEventListener("mousedown",handleClickOutside);
    };

},[]);


  const handleClickIcon = () => {
    setOpen(true);
    inputRef.current?.focus();
  };
  return (

    
   <>
     <div
      className={`fixed top-0 h-16 px-6 flex items-center justify-between bg-slate-900 dark:bg-gray-900 border-b border-gray-700 z-30 transition-all duration-300 ${
        sidebarCollapsed ? "left-20 right-0" : "left-64 right-0"
      }`}
    >


   <div ref={containerRef} className="relative flex items-center h-10">
      <button
        type="button"
        onClick={handleClickIcon}
        className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <svg
          className="h-5 w-5 text-gray-500 dark:text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
          />
        </svg>

      </button>

       <input
      
        type="text"
        placeholder="Search..."
        className=
          {`absolute left-12 h-10 pl-3 pr-4 rounded-full bg-gray-100 dark:bg-gray-800
          border border-gray-300 dark:border-gray-700
          text-sm text-gray-700 dark:text-gray-200
          placeholder-gray-400 dark:placeholder-gray-500
          outline-none
          transition-all duration-300 ${open?"w-64 opacity-100":"w-0 opacity-0 pointer-events-none"}`} />
   </div>




   
  <div className="flex items-center gap-4">
      <div
      className="
        h-9 w-9
        flex items-center justify-center
        rounded-full
        hover:bg-gray-100 dark:hover:bg-gray-800
        cursor-pointer
      "
    >
      <svg
        className="h-5 w-5 text-gray-600 dark:text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 17h5l-1.4-1.4A2 2 0 0118 14V11a6 6 0 10-12 0v3a2 2 0 01-.6 1.4L4 17h5m6 0a3 3 0 01-6 0"
        />
      </svg>
    </div>

       <div
      className="
        h-9 w-9
        flex items-center justify-center
        rounded-full
        hover:bg-gray-100 dark:hover:bg-gray-800
        cursor-pointer
      "
    >
      <svg
        className="h-5 w-5 text-gray-600 dark:text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
        />
      </svg>
    </div>
  </div>
    </div>
   </>
  );
}
