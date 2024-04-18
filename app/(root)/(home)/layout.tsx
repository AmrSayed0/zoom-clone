import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zoom",
  description: "A Zoom clone built with Stream's Video SDK and Next.js",
  icons: "/icons/logo.svg",
};

interface layoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: layoutProps) => {
  return (
    <main className="relative">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};
export default HomeLayout;
