"use client";

import { useState } from "react";


interface SidebarProps  {
collapsed: boolean;
onToggle:()=>void;
}
export default function Sidebar({collapsed,onToggle}:SidebarProps) {


  
  return (
  <>
  
 <aside
      className={`
        fixed top-0 left-0 h-screen
        bg-slate-900 dark:bg-gray-900
        border-r border-gray-200 dark:border-gray-700
        text-gray-800 dark:text-gray-200
        z-40
        transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
       <div className="flex h-full flex-col">
 <div
  className="
    h-16 px-6
    flex items-center gap-3
    border-b border-gray-200 dark:border-gray-700
    bg-gray-900
  "
>
  {/* SVG Icon */}
  <svg
    className="h-8 w-8 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l7 4v5c0 5-3.5 9-7 11-3.5-2-7-6-7-11V7l7-4z"
    />
  </svg>

 {!collapsed && (
            <span className="text-lg font-semibold text-white">
              Audit<span className="text-blue-500 ml-1">One</span>
            </span>
          )}

          {/* Toggle Button */}
          <button
            onClick={onToggle}
            className="p-2 rounded hover:bg-gray-700"
          >
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
</div>


      {/*menu*/}
      <div className="flex-1 px-4 py-4 overflow-y-auto">
           <div className="space-y-1">
                
              {/* Single Menu */}
    <div className="px-4 py-2 rounded-lg text-gray-100 hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium ">
      Dashboard
    </div>

    {/* Parent Menu */}
       <details className="group">
    <summary className="px-4 py-2 rounded-lg text-gray-100 hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium flex justify-between items-center
          list-none">
      
      User Management
            <span className="group-open:rotate-90 transition-transform">›</span>
    </summary>

    {/* Child Menus */}
    <div className="pl-8 space-y-1">
      <div className="px-4 py-2 rounded-lg text-gray-100 hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800">
        Users
      </div>
       <details className="group">
      <summary className="px-4 py-2 rounded-lg text-gray-100 hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800  flex justify-between items-center
              list-none">
        Roles
           <span className="group-open:rotate-90 transition-transform">›</span>
      </summary>

      {/* Sub-Child Menus */}
      <div className="pl-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
        <div className="px-4 py-2 rounded-lg text-gray-100 hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800">
          Create Role
        </div>
        <div className="px-4 py-2 rounded-lg text-gray-100 hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800">
          Assign Permissions
        </div>
      </div>
      </details>
    </div>
</details>
    {/* Another Parent */}
    <details className="group">
    <summary className="px-4 py-2 text-gray-100 hover:text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 font-medium  flex justify-between items-center
          list-none">
      Reports
        <span className="group-open:rotate-90 transition-transform">›</span>
    </summary>

    <div className="pl-8 space-y-1">
      <div className="px-4 py-2 rounded-lg text-gray-100 hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800">
        Daily Report
      </div>
      <div className="px-4 py-2 rounded-lg text-gray-100 hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800">
        Monthly Report
      </div>
    </div>
    </details>
           </div>
      </div>

       {/*footer*/}
       <div className="h-14 px-6
        flex items-center
        border-t border-gray-200 dark:border-gray-700
        text-sm text-gray-500 dark:text-gray-400">
        <div className="text-sm text-gray-500 dark:text-gray-400">
  © 2026 AuditOne
</div>
       </div>
         </div>
</aside>

  </>
  );
}
  
