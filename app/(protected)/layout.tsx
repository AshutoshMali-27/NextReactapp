// app/(protected)/layout.tsx
import Sidebar from "../../src/ui/layout/sidebar";
import Topbar from "../../src/ui/layout/navbar";
import Footer from "../../src/ui/layout/footer";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
     <div className="flex flex-col flex-1 ml-64">
    <Topbar />
   <main className="flex-1 overflow-y-auto p-4 pb-16 mt-16 ">
  {children}
</main>
    <Footer />
  </div>
    </div>
  );
}
