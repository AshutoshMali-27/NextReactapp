// app/(protected)/layout.tsx
import Sidebar from "../../src/ui/layout/sidebar";
import Topbar from "../../src/ui/layout/navbar";
import Footer from "../../src/ui/layout/footer";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <Topbar />
        <main className="p-4 flex-grow-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
