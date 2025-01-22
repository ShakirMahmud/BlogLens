import Navbar from "@/components/Navbar";

export default function HomeLayout({ children }) {
  return (
    <section>
      <Navbar />
      <section>{children}</section>
    </section>
  );
}
