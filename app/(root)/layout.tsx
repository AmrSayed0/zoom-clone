import Navbar from "@/components/Navbar";

interface layoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: layoutProps) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};
export default RootLayout;
