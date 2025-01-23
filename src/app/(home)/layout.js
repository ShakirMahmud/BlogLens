import Footer from "@/components/Footer";
import NavbarPathName from "@/components/NavbarPathName";

export default function HomeLayout({ children }) {
  return (
    <section className="min-h-screen">
      <NavbarPathName />
      <section className="min-h-[70vh]">{children}</section>
      <Footer/>
    </section>
  );
}
